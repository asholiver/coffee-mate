import React, { Component } from "react";
import { PageHeader } from "./../../components";
import { Page } from "./../../layout";

class GroupDetails extends Component {
    state = {
        userId: Number(this.props.userId),
        groupId: Number(this.props.groupId),
        group_name: "",
        names: []
    };

    deleteGroup = e => {
        axios
            .post(`${API_ROOT}api/groups/${this.state.groupId}`)
            .then(response => {
                this.setState({
                    groupId: 0
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    deleteMember = e => {
        const userToDelete = Number(e.currentTarget.value);
        axios
            .post(`${API_ROOT}api/user_groups/${this.state.groupId}`, {
                user_id: userToDelete
            })
            .then(response => {
                console.log("removed member");
                this.setState({
                    members: this.state.members.filter(
                        user => user.user_id !== userToDelete
                    )
                });
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
                console.log(response);
                this.setState({
                    hasUpdated: true
                });
                console.log("added member");
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { onClick, isOpen } = this.props;
        const headerButtons = [
            {
                isButton: true,
                text: "back",
                onClick: onClick
            },
            {
                isButton: true,
                text: "Group Info"
            },
            {
                isEmpty: true
            }
        ];
        return (
            <Page isOpen={isOpen} slideFromDirection="right">
                <PageHeader buttons={headerButtons} />
                <div className="c-bottombar__content">
                    Details coming soon!!
                </div>
            </Page>
        );
    }
}

export default GroupDetails;
