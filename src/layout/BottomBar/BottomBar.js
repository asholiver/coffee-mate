import React, { Component } from "react";
import "./BottomBar.css";
import axios from "axios";
import { Page } from "./../../layout";
import { Button, TextField, Group, PageHeader } from "./../../components";
import API_ROOT from "./../../constants/api-root";

class BottomBar extends Component {
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
                this.props.handleSubmit(response.data.id);
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

    render() {
        const { isVisible, onClick, userId, isClosed } = this.props;
        const { users } = this.state;
        const headerButtons = [
            {
                isEmpty: true
            },
            {
                isButton: true,
                text: "New Group"
            },
            {
                isButton: true,
                text: "Cancel",
                onClick: onClick
            }
        ];
        return (
            <Page
                slideFromDirection="bottom"
                isOpen={isVisible}
                isClosed={isClosed}
            >
                <PageHeader buttons={headerButtons} />
                <div className="c-bottombar__content">
                    <TextField
                        label="Group Name"
                        name="new_name"
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
                </div>
            </Page>
        );
    }
}

export default BottomBar;
