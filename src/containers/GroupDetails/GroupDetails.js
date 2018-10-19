import React, { Component, Fragment } from "react";
import { GroupMember } from "./../../components";
import { Page } from "./../../layout";
import { move } from "./../../utils";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";

class GroupDetails extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        groupId: Number(this.props.match.params.groupId),
        isLoading: true,
        group_name: "",
        names: []
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/groups/${this.props.match.params.groupId}`)
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

    completedOrder = e => {
        console.log(e.currentTarget.value);
        console.log(this.state.groupId);
        axios
            .post(`${API_ROOT}api/rounds`, {
                user_id: Number(e.currentTarget.value),
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
        const { names, isLoading, group_name, userId, groupId } = this.state;
        return (
            <Page
                hasLinks={true}
                userId={userId}
                groupId={groupId}
                isLoading={isLoading}
            >
                <Fragment>
                    <p className="c-paragraph">{group_name}</p>
                    <p className="c-paragraph">Its your round</p>
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
                </Fragment>
            </Page>
        );
    }
}

export default GroupDetails;
