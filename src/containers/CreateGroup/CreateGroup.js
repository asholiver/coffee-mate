import React, { Component, Fragment } from "react";
import { Body, Footer } from "./../../layout";
import { TextField, Button } from "./../../components";
import { Redirect } from "react-router-dom";
import axios from "axios";

class CreateGroup extends Component {
    state = {
        newGroupId: 0,
        userId: this.props.match.params.userId,
        new_group: ""
    };

    handleChange = e => {
        this.setState({
            new_group: e.target.value
        });
    };

    addGroup = e => {
        axios
            .post("https://coffee-mate-server.herokuapp.com/api/groups", {
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
                <Redirect
                    to={`/app/${this.props.match.params
                        .userId}/group_details/${newGroupId}`}
                />
            );
        }

        return (
            <Fragment>
                <Body>
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
                </Body>
                <Footer userId={userId} hasLinks={false} />
            </Fragment>
        );
    }
}

export default CreateGroup;
