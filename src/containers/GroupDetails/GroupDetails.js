import React, { Component, Fragment } from "react";
import { GroupMember } from "./../../components";
import { Page } from "./../../layout";
import { move } from "./../../utils";
import axios from "axios";

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
            .get(
                `https://coffee-mate-server.herokuapp.com/api/groups/${this
                    .props.match.params.groupId}`
            )
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
        this.setState({ names: move(this.state.names) });
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
                                    id={e.display_order}
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
