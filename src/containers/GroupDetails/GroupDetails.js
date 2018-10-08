import React, { Component, Fragment } from "react";
import { GroupMember } from "./../../components";
import { move } from "./../../utils";
import axios from "axios";

class GroupDetails extends Component {
    state = {
        is_loading: true,
        names: [],
        new_name: "",
        isSideBarVisible: false
    };

    handleChange = e => {
        this.setState({
            new_name: e.target.value
        });
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
                this.setState({ is_loading: false });
            });
    };

    addMember = e => {
        this.setState({
            names: this.state.names.concat(this.state.new_name),
            new_name: ""
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
        this.setState({ names: move(this.state.names) });
    };

    render() {
        const {
            group_name,
            new_name,
            names,
            is_loading,
            isSideBarVisible
        } = this.state;
        return is_loading ? (
            <div>Loading</div>
        ) : (
            <Fragment>
                <p className="c-paragraph">Its your round</p>
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
            </Fragment>
        );
    }
}

export default GroupDetails;
