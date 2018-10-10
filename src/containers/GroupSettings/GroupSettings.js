import React, { Component, Fragment } from "react";
import axios from "axios";
import { Body, Footer } from "./../../layout";

class GroupSettings extends Component {
    state = {
        is_loading: true,
        userId: this.props.match.params.userId,
        groupId: this.props.match.params.groupId,
        data: [],
        members: []
    };
    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(
                `https://coffee-mate-server.herokuapp.com/api/groups/${this
                    .props.match.params.groupId}`
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
                this.setState({ is_loading: false });
            });
    };

    render() {
        const { userId, groupId, data, members } = this.state;
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
                                        {member.first_name} {member.last_name}
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
                </Body>
                <Footer hasLinks="true" groupId={groupId} userId={userId} />
            </Fragment>
        );
    }
}

export default GroupSettings;
