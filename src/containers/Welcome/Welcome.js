import React, { Component, Fragment } from "react";
import { Body, Footer } from "./../../layout";
import axios from "axios";

class GroupsList extends Component {
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
        const { name } = this.state;
        const { userId } = this.props;
        return (
            <Fragment>
                <Body>
                    <p>Welcome back {name}!</p>
                    <p>Its your round on these groups</p>
                    <p>for r in (</p>
                    <p>select *</p>
                    <p>from groups </p>
                    <p>
                        where id = (select group_id from group_members where
                        user_id = state.userId and display_order = 1)
                    </p>
                    <p>) loop</p>
                </Body>
                <Footer userId={userId} hasLinks={false} />
            </Fragment>
        );
    }
}

export default GroupsList;
