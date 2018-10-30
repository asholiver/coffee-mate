import React, { Component } from "react";
import "./CreateGroup.css";
import axios from "axios";
import { Page, Body, Header } from "./../../layout";
import { Button, TextField, Group } from "./../../components";
import API_ROOT from "./../../constants/api-root";

class CreateGroup extends Component {
    state = {
        is_loading: true,
        users: [],
        new_name: ""
    };
    componentDidMount = () => {
        axios
            .get(`${API_ROOT}api/users`)
            .then(response => {
                this.setState({
                    users: response.data.map((user, index) => ({
                        id: user.id,
                        name: `${user.first_name} ${user.last_name}`
                    }))
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

    addGroup = e => {
        axios
            .post(`${API_ROOT}api/groups`, {
                new_name: this.state.new_name
            })
            .then(response => {
                console.log("success");
                this.props.handleSubmit(response.data.id);
                this.setState({
                    new_name: ""
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    toggleBottomBar = e => {
        this.setState({
            new_name: ""
        });
        this.props.onClick();
    };

    render() {
        const { isVisible, userId, isClosed } = this.props;
        const { users, new_name } = this.state;
        const headerItems = [
            {
                type: "empty"
            },
            {
                type: "title",
                text: "New Group"
            },
            {
                type: "button",
                text: "Cancel",
                onClick: this.toggleBottomBar
            }
        ];
        return (
            <Page
                slideFromDirection="bottom"
                isOpen={isVisible}
                isClosed={isClosed}
            >
                <Header items={headerItems} />
                <Body>
                    <TextField
                        label="Group Name"
                        name="new_name"
                        value={new_name}
                        onChange={this.handleChange}
                    />

                    {users.map((item, index) => (
                        <Group
                            key={index}
                            group={item}
                            editMode={true}
                            onClick={this.toggleRightSidebar}
                            userId={userId}
                        />
                    ))}

                    <Button
                        text="Create"
                        buttonStyle="primary"
                        onClick={this.addGroup}
                    />
                </Body>
            </Page>
        );
    }
}

export default CreateGroup;
