import React, { Component } from "react";
import { GroupMember, PageHeader } from "./../../components";
import { Page } from "./../../layout";
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

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/groups/${this.state.groupId}`)
            .then(response => {
                this.setState({
                    names: response.data.members,
                    group_name: response.data.name
                });
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(() => {
                this.setState({ isLoading: false });
            });
    };

    deleteMember = e => {
        this.setState({
            names: this.state.names.filter(
                (item, index) => index !== Number(e.target.value)
            )
        });
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
                console.log("updated rounds");
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
        const { onClick } = this.props;
        const headerButtons = [
            {
                isButton: true,
                text: "back",
                value: "",
                onClick: onClick
            },
            {
                isButton: true,
                text: group_name,
                value: "",
                onClick: this.toggleGroupDetails
            },
            {
                isEmpty: true
            }
        ];
        return (
            <Page isOpen={!isLoading} slideFromDirection="right">
                <PageHeader buttons={headerButtons} />
                <div className="c-bottombar__content">
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
                </div>
                <GroupDetails
                    onClick={this.toggleGroupDetails}
                    isOpen={showGroupDetailsPage}
                />
            </Page>
        );
    }
}

export default GroupChannel;
