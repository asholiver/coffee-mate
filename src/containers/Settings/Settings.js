import React, { Component } from "react";
import { Footer, Page, Body } from "./../../layout";
import axios from "axios";
import { TextField, Button, PageHeader } from "./../../components";
import API_ROOT from "./../../constants/api-root";

class Settings extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        new_first_name: "",
        new_last_name: "",
        hasUpdated: false
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/users/${this.state.userId}`)
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
            .put(`${API_ROOT}api/users/${this.state.userId}`, {
                first_name: this.state.new_first_name,
                last_name: this.state.new_last_name
            })
            .then(response => {
                this.setState({
                    hasUpdated: true
                });
                console.log("updated user");
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
        const headerItems = [
            {
                type: "empty"
            },
            {
                type: "title",
                text: "Settings"
            },
            {
                type: "link",
                to: "create_member",
                text: "Create Member"
            }
        ];
        return (
            <Page slideFromDirection="none">
                <PageHeader items={headerItems} />
                <Body>
                    {hasUpdated ? <p>Username has been updated!</p> : null}
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
                        text="Update"
                        type="submit"
                        buttonStyle="primary"
                        onClick={this.updateUser}
                    />
                </Body>

                <Footer userId={userId} editMode={false} readOnlyMode={false} />
            </Page>
        );
    }
}

export default Settings;
