import React, { Component } from "react";
import { Page } from "./../../layout";
import { TextField, Button } from "./../../components";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";

class CreateMember extends Component {
    state = {
        newUserId: 0,
        userId: this.props.match.params.userId,
        new_first_name: "",
        new_last_name: "",
        new_email: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addUser = e => {
        axios
            .post(`${API_ROOT}api/users`, {
                first_name: this.state.new_first_name,
                last_name: this.state.new_last_name,
                email: this.state.new_email
            })
            .then(response => {
                this.setState({
                    newUserId: response.data.id,
                    new_first_name: "",
                    new_last_name: "",
                    new_email: ""
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { userId, newUserId } = this.state;
        if (newUserId > 0) {
            return <Redirect to={`/app/${userId}/groups`} />;
        }

        return (
            <Page hasLinks={false} userId={userId}>
                <TextField
                    label="First name"
                    name="new_first_name"
                    onChange={this.handleChange}
                />
                <TextField
                    label="Last name"
                    name="new_last_name"
                    onChange={this.handleChange}
                />
                <TextField
                    label="Email"
                    name="new_email"
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    text="Create"
                    buttonStyle="primary"
                    onClick={this.addUser}
                />
            </Page>
        );
    }
}

export default CreateMember;
