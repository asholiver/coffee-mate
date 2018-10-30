import React, { Component, Fragment } from "react";
import {
    PageHeader,
    Select,
    ButtonGroup,
    Button,
    ButtonIconOnly
} from "./../../components";
import { Page, Body } from "./../../layout";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";

class GroupDetails extends Component {
    state = {
        userId: Number(this.props.userId),
        groupId: Number(this.props.groupId),
        group_name: "",
        users: [],
        showDeleteWarning: false
    };

    componentDidMount = () => {
        axios
            .get(`${API_ROOT}api/users`)
            .then(response => {
                this.setState({
                    users: response.data.map((user, index) => ({
                        value: user.id,
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

    toggleDeleteWarning = e => {
        this.setState({ showDeleteWarning: !this.state.showDeleteWarning });
    };

    deleteGroup = e => {
        this.props.handleDelete(this.state.groupId);
    };

    deleteMember = e => {
        const userToDelete = e.currentTarget.value;
        axios
            .post(`${API_ROOT}api/user_groups/${this.state.groupId}`, {
                user_id: userToDelete
            })
            .then(response => {
                console.log("removed member");
                this.props.updateData(this.state.groupId);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    addMember = e => {
        axios
            .post(`${API_ROOT}api/user_groups`, {
                user_id: e.target.value,
                group_id: this.state.groupId
            })
            .then(response => {
                this.props.updateData(this.state.groupId);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { onClick, isOpen, members } = this.props;
        const { users, showDeleteWarning } = this.state;
        const headerItems = [
            {
                type: "button",
                text: "back",
                onClick: onClick
            },
            {
                type: "title",
                text: "Group Info"
            },
            {
                type: "empty"
            }
        ];
        return (
            <Page isOpen={isOpen} slideFromDirection="right">
                <PageHeader items={headerItems} />
                <Body>
                    <Select
                        label="Add member"
                        name="new_member"
                        options={users}
                        onChange={this.addMember}
                    />
                    {members != null ? (
                        <Fragment>
                            {members.map((e, index) => (
                                <div className="h-display-flex" key={index}>
                                    <span>
                                        {e.first_name} {e.last_name}
                                    </span>
                                    <ButtonIconOnly
                                        buttonValue={e.user_id}
                                        buttonOnClick={this.deleteMember}
                                        icon="close"
                                        size="x-small"
                                        helpText="delete member"
                                    />
                                </div>
                            ))}
                        </Fragment>
                    ) : (
                        <p>There are no members in this group</p>
                    )}

                    {showDeleteWarning ? (
                        <Fragment>
                            <p>Are you sure you want to delete this group?</p>
                            <ButtonGroup type="space-between">
                                <Button
                                    text="Cancel"
                                    buttonStyle="primary"
                                    onClick={this.toggleDeleteWarning}
                                />
                                <Button
                                    text="Delete"
                                    type="submit"
                                    buttonStyle="primary"
                                    onClick={this.deleteGroup}
                                />
                            </ButtonGroup>
                        </Fragment>
                    ) : (
                        <Button
                            onClick={this.toggleDeleteWarning}
                            buttonStyle="primary"
                            text="Delete group"
                        />
                    )}
                </Body>
            </Page>
        );
    }
}

export default GroupDetails;
