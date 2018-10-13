import React, { Component, Fragment } from "react";
import axios from "axios";
import { Page } from "./../../layout";
import { Button, Select } from "./../../components";
import { Redirect } from "react-router-dom";

class GroupSettings extends Component {
    state = {
        isLoading: true,
        userId: Number(this.props.match.params.userId),
        groupId: Number(this.props.match.params.groupId),
        data: [],
        members: [],
        new_member: "",
        select: [{ name: "hello", value: "2" }, { name: "goodbye", value: "2" }]
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
                    members: response.data.members
                });
                console.log(response);
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

    handleChange = e => {
        this.setState({ new_member: e.target.value });
    };

    addMember = e => {
        axios
            .post("https://coffee-mate-server.herokuapp.com/api//user_groups", {
                user_id: this.state.new_member
            })
            .then(response => {
                this.setState({
                    new_member: ""
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { userId, groupId, data, members, isLoading } = this.state;
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
                            label="test"
                            name="new_member"
                            options={this.state.select}
                        />
                        <p>Name: {data.name}</p>
                        <p>Admin: {data.created_by}</p>
                        {members != null ? (
                            <div>
                                Members:
                                {members.map(member => (
                                    <div key={member.user_id}>
                                        <p>
                                            {member.first_name}{" "}
                                            {member.last_name}
                                        </p>
                                        <p>Order: {member.display_order}</p>
                                        <p>{member.user_id}</p>
                                        <p>Joined group: {member.added_on}</p>
                                    </div>
                                ))}
                            </div>
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
