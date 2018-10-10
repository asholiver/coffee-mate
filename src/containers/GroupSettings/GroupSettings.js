import React, { Component, Fragment } from "react";
import axios from "axios";
import { Body, Footer } from "./../../layout";
import { Button } from "./../../components";
import { Redirect } from "react-router-dom";

class GroupSettings extends Component {
    state = {
        isLoading: true,
        userId: Number(this.props.match.params.userId),
        groupId: Number(this.props.match.params.groupId),
        data: [],
        members: []
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

    render() {
        const { userId, groupId, data, members, isLoading } = this.state;
        if (isLoading) {
            return (
                <Body>
                    <div>Loading...</div>
                </Body>
            );
        }

        if (groupId > 0) {
            return (
                <Fragment>
                    <Body>
                        <p>Name: {data.name}</p>
                        <p>Admin: {data.created_by}</p>
                        {members != null ? (
                            <p>
                                Members:
                                {members.map(member => (
                                    <p key={member.user_id}>
                                        <p>
                                            {member.first_name}{" "}
                                            {member.last_name}
                                        </p>
                                        <p>Order: {member.display_order}</p>
                                        <p>{member.user_id}</p>
                                        <p>Joined group: {member.added_on}</p>
                                    </p>
                                ))}
                            </p>
                        ) : (
                            <p>No Members</p>
                        )}
                        <Button
                            type="submit"
                            text="Delete"
                            buttonStyle="primary"
                            onClick={this.deleteGroup}
                        />
                    </Body>
                    <Footer hasLinks={true} groupId={groupId} userId={userId} />
                </Fragment>
            );
        }

        return <Redirect to={`/app/${userId}`} />;
    }
}

export default GroupSettings;
