import React, { Component } from "react";
import axios from "axios";
import { Page } from "./../../layout";

class GroupSearch extends Component {
    state = {
        userId: this.props.match.params.userId,
        groupId: this.props.match.params.groupId,
        isLoading: true,
        names: []
    };
    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(
                `https://coffee-mate-server.herokuapp.com/api/users/${this.props
                    .match.params.userId}`
            )
            .then(response => {
                this.setState({
                    name: response.data.first_name
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

    render() {
        const { userId, groupId, isLoading } = this.state;
        return (
            <Page
                hasLinks={true}
                userId={userId}
                groupId={groupId}
                isLoading={isLoading}
            >
                SEARCH
            </Page>
        );
    }
}

export default GroupSearch;
