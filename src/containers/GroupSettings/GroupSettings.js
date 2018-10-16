import React, { Component, Fragment } from "react";
import axios from "axios";
import { Page } from "./../../layout";
import { Button, ButtonIconOnly, Select } from "./../../components";
import { Redirect } from "react-router-dom";

class GroupSettings extends Component {
    state = {
        isLoading: true,
        userId: Number(this.props.match.params.userId),
        groupId: Number(this.props.match.params.groupId),
        data: [],
        members: [],
        users: [],
        membersId: []
    };
    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(
                `https://coffee-mate-server.herokuapp.com/api/groups/${this
                    .state.groupId}`
            )
            .then(response => {
                this.setState({
                    data: response.data,
                    members: response.data.members,
                    membersId: response.data.members.map((user, index) => ({
                        id: user.user_id
                    }))
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(() => {});

        axios
            .get("https://coffee-mate-server.herokuapp.com/api/users")
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

    deleteGroup = e => {
        axios
            .post(
                `https://coffee-mate-server.herokuapp.com/api/groups/${this
                    .state.groupId}`
            )
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
            .post(
                `https://coffee-mate-server.herokuapp.com/api/user_groups/${this
                    .state.groupId}`,
                {
                    user_id: userToDelete
                }
            )
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
            .post("https://coffee-mate-server.herokuapp.com/api/user_groups", {
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
        const { userId, groupId, data, members, isLoading, users } = this.state;
        if (groupId > 0) {
            return (
                <Page
                    hasLinks={true}
                    groupId={groupId}
                    userId={userId}
                    isLoading={isLoading}
                >
                    <Fragment>
                        <Select
                            label="Add member"
                            name="new_member"
                            options={users}
                            onChange={this.addMember}
                        />
                        <p>Name: {data.name}</p>
                        <p>Admin: {data.created_by}</p>
                        {members != null ? (
                            <Fragment>
                                <p> Members:</p>
                                <ol>
                                    {members.map(member => (
                                        <li key={member.user_id} className="h-display-flex">
                                            <span>
                                                {member.first_name}{" "}
                                                {member.last_name}
                                            </span>
                                            <ButtonIconOnly
                                                buttonValue={member.user_id}
                                                buttonOnClick={
                                                    this.deleteMember
                                                }
                                                icon="close"
                                                size="x-small"
                                                helpText="delete member"
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </Fragment>
                        ) : (
                            <p>No Members</p>
                        )}
                        <Button
                            type="submit"
                            text="Delete"
                            buttonStyle="primary"
                            onClick={this.deleteGroup}
                        />
                    </Fragment>
                </Page>
            );
        }

        return <Redirect to={`/app/${userId}`} />;
    }
}

export default GroupSettings;
