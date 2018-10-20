import React, { Component } from "react";
import { Page } from "./../../layout";
import { TextField, Button } from "./../../components";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";

class CreateGroup extends Component {
    state = {
        newGroupId: 0,
        userId: this.props.match.params.userId,
        new_group: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    addGroup = e => {
        axios
            .post(`${API_ROOT}api/groups`, {
                new_name: this.state.new_group
            })
            .then(response => {
                this.setState({
                    newGroupId: response.data.id,
                    new_group: ""
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { userId, newGroupId } = this.state;
        if (newGroupId > 0) {
            return (
                <Redirect to={`/app/${userId}/group_details/${newGroupId}`} />
            );
        }

        return (
            <Page hasLinks={false} userId={userId}>
                <TextField
                    label="Group name"
                    name="new_group"
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    text="Create"
                    buttonStyle="primary"
                    onClick={this.addGroup}
                />
            </Page>
        );
    }
}

export default CreateGroup;
