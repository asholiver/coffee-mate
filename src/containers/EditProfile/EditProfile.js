import React, { Component } from "react";
import { Page } from "./../../layout";
import { TextField, Button } from "./../../components";
import { Redirect } from "react-router-dom";
import axios from "axios";

class EditProfile extends Component {
    state = {
        hasUpdated: false,
        userId: Number(this.props.match.params.userId),
        new_first_name: "",
        new_last_name: ""
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(
                `https://coffee-mate-server.herokuapp.com/api/users/${this.state
                    .userId}`
            )
            .then(response => {
                this.setState({
                    new_first_name: response.data.first_name,
                    new_last_name: response.data.last_name
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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    updateUser = e => {
        axios
            .put(
                `https://coffee-mate-server.herokuapp.com/api/users/${this.state
                    .userId}`,
                {
                    first_name: this.state.new_first_name,
                    last_name: this.state.new_last_name
                }
            )
            .then(response => {
                this.setState({
                    hasUpdated: true
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const {
            userId,
            hasUpdated,
            new_first_name,
            new_last_name
        } = this.state;
        if (hasUpdated) {
            return <Redirect to={`/app/${userId}`} />;
        }

        return (
            <Page hasLinks={false} userId={userId}>
                <TextField
                    label="First name"
                    name="new_first_name"
                    value={new_first_name}
                    onChange={this.handleChange}
                />
                <TextField
                    label="Last name"
                    name="new_last_name"
                    value={new_last_name}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    text="Update"
                    buttonStyle="primary"
                    onClick={this.updateUser}
                />
            </Page>
        );
    }
}

export default EditProfile;
