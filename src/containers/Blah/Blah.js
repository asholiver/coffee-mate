import React, { Component } from "react";
import { Page } from "./../../layout";
import { TabSet } from "./../../components";
import Details from "./Details";
import Settings from "./Settings";
import { move } from "./../../utils";
import axios from "axios";
import { Redirect } from "react-router-dom";
import API_ROOT from "./../../constants/api-root";

class Blah extends Component {
    state = {
        isLoading: true,
        groupId: this.props.match.params.groupId,
        userId: this.props.match.params.userId,
        groupName: "",
        data: [],
        members: [],
        membersId: [],
        users: []
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/groups/${this.props.match.params.groupId}`)
            .then(response => {
                this.setState({
                    groupName: response.data.name,
                    data: response.data,
                    members: response.data.members,
                    membersId: response.data.members.map((user, index) => ({
                        id: user.user_id
                    }))
                });
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });

        axios
            .get(`${API_ROOT}api/users`)
            .then(response => {
                this.setState({
                    users: response.data.map((user, index) => ({
                        value: user.id,
                        name: `${user.first_name} ${user.last_name}`
                    }))
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(() => {
                this.setState({ isLoading: false });
            });
    };

    completedOrder = e => {
        console.log(e.target.value);
        axios
            .post(`${API_ROOT}api/rounds`, {
                user_id: Number(e.target.value),
                group_id: Number(this.state.groupId)
            })
            .then(response => {
                this.setState({ members: move(this.state.members) });
                console.log("updated rounds");
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    deleteGroup = e => {
        axios
            .post(`${API_ROOT}api/groups/${this.state.groupId}`)
            .then(response => {
                this.setState({
                    groupId: 0
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    deleteMember = e => {
        const userToDelete = Number(e.currentTarget.value);
        axios
            .post(`${API_ROOT}api/user_groups/${this.state.groupId}`, {
                user_id: userToDelete
            })
            .then(response => {
                console.log("removed member");
                this.setState({
                    members: this.state.members.filter(
                        user => user.user_id !== userToDelete
                    )
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    addMember = e => {
        axios
            .post(`${API_ROOT}api/user_groups`, {
                user_id: e.target.value,
                group_id: this.state.groupId
            })
            .then(response => {
                console.log(response);
                this.setState({
                    hasUpdated: true
                });
                console.log("added member");
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const {
            userId,
            groupId,
            members,
            groupName,
            isLoading,
            users,
            data
        } = this.state;

        if (groupId > 0) {
            return (
                <Page
                    hasLinks={true}
                    userId={userId}
                    groupId={groupId}
                    isLoading={isLoading}
                >
                    <TabSet
                        defaultIndex="0"
                        tabData={[
                            {
                                id: "overview",
                                href: "overview",
                                label: "Overview",
                                content: (
                                    <Details
                                        names={members}
                                        groupName={groupName}
                                        groupId={groupId}
                                        userId={userId}
                                        complete={this.completedOrder}
                                    />
                                )
                            },
                            {
                                id: "search",
                                href: "search",
                                label: "Search",
                                content: "SEARCH"
                            },
                            {
                                id: "settings",
                                href: "settings",
                                label: "Settings",
                                content: (
                                    <Settings
                                        members={members}
                                        users={users}
                                        data={data}
                                        addMember={this.addMember}
                                        deleteMember={this.deleteMember}
                                        deleteGroup={this.deleteGroup}
                                    />
                                )
                            }
                        ]}
                    />
                </Page>
            );
        }

        return <Redirect to={`/app/${userId}`} />;
    }
}

export default Blah;
