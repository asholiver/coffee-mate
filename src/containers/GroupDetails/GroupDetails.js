import React, { Component } from "react";
import { Header } from "./../../components";
import { move } from "./../../utils";
import axios from "axios";

class GroupDetails extends Component {
    state = {
        is_loading: true,
        names: [],
        new_name: ""
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
        const { groupId, groupName } = this.props;
        return this.state.is_loading ? (
            <div>Loading</div>
        ) : (
            <div className="App">
                <Header
                    title={this.state.group_name}
                    onChange={this.handleChange}
                    value={this.state.new_name}
                    buttonTitle="Add member"
                    buttonOnClick={this.addMember}
                />
                <p className="c-paragraph">Its your round</p>
                <ol className="c-group-link-container">
                    {this.state.names.map((e, index) => (
                        <li className="c-group-link__item" key={index}>
                            <span className="c-group-link__link">
                                {e.first_name} {e.last_name}
                            </span>
                            {index === 0 ? (
                                <button onClick={this.completedOrder}>
                                    Done
                                </button>
                            ) : null}
                            <button value={index} onClick={this.deleteMember}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default GroupDetails;
