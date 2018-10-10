import React, { Component, Fragment } from "react";
import axios from "axios";
import { Body, Footer } from "./../../layout";

class GroupSearch extends Component {
    state = {
        is_loading: true,
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
                this.setState({ is_loading: false });
            });
    };

    render() {
        return (
            <Fragment>
                <Body>SEARCH</Body>
                <Footer
                    hasLinks={true}
                    groupId={Number(this.props.match.params.groupId)}
                    userId={Number(this.props.match.params.userId)}
                />
            </Fragment>
        );
    }
}

export default GroupSearch;
