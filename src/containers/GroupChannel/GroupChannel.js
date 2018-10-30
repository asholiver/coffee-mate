import React, { Component } from "react";
import { GroupMember, PageHeader } from "./../../components";
import { Page, Body } from "./../../layout";
import { move } from "./../../utils";
import { GroupDetails } from "./../../containers";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";

class GroupChannel extends Component {
    state = {
        userId: Number(this.props.userId),
        groupId: Number(this.props.groupId),
        isLoading: true,
        group_name: "",
        showGroupDetailsPage: false,
        names: []
    };

    getData = (groupId, isInitial) => {
        axios
            .get(`${API_ROOT}api/groups/${Number(groupId)}`)
            .then(response => {
                this.setState({
                    names: response.data.members,
                    group_name: response.data.name
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(() => {
                if (isInitial) {
                    this.setState({ isLoading: false });
                }
            });
    };

    componentDidMount = () => {
        this.getData(this.state.groupId, true);
    };

    toggleGroupDetails = e => {
        this.setState({
            showGroupDetailsPage: !this.state.showGroupDetailsPage
        });
    };

    completedOrder = e => {
        axios
            .post(`${API_ROOT}api/rounds`, {
                user_id: Number(e.target.value),
                group_id: Number(this.state.groupId)
            })
            .then(response => {
                this.setState({ names: move(this.state.names) });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const {
            names,
            isLoading,
            group_name,
            groupId,
            showGroupDetailsPage
        } = this.state;
        const { onClick, handleDelete } = this.props;
        const headerItems = [
            {
                type: "button",
                text: "back",
                onClick: onClick
            },
            {
                type: "button",
                text: group_name,
                onClick: this.toggleGroupDetails
            },
            {
                type: "empty"
            }
        ];
        return (
            <Page isOpen={!isLoading} slideFromDirection="right">
                <PageHeader items={headerItems} />
                <Body>
                    {groupId}
                    {names != null ? (
                        <ol className="c-group-link-container">
                            {names.map((e, index) => (
                                <GroupMember
                                    name={`${e.first_name} ${e.last_name}`}
                                    handleDelete={this.deleteMember}
                                    handleComplete={this.completedOrder}
                                    id={e.user_id}
                                    isActive={index === 0}
                                    key={index}
                                />
                            ))}
                        </ol>
                    ) : (
                        <p>There are no members in this group</p>
                    )}
                </Body>
                <GroupDetails
                    onClick={this.toggleGroupDetails}
                    isOpen={showGroupDetailsPage}
                    members={names}
                    groupId={groupId}
                    updateData={this.getData}
                    handleDelete={handleDelete}
                />
            </Page>
        );
    }
}

export default GroupChannel;
