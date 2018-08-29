import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Header } from "./../../components";
import { GroupDetails } from "./../../containers";
import { move } from "./../../utils";

class GroupsList extends Component {
    state = {
        groups: [
            {
                id: 1,
                name: "Coffee Legends"
            },
            {
                id: 2,
                name: "Kings of coffee"
            }
        ],
        new_group: "",
        active_group: 0
    };

    handleChange = e => {
        this.setState({
            new_group: e.target.value
        });
    };

    addGroup = e => {
        this.setState({
            groups: this.state.groups.concat(this.state.new_group),
            new_group: ""
        });
    };

    deleteGroup = e => {
        this.setState({
            groups: this.state.groups.filter(
                (item, index) => index !== Number(e.target.value)
            )
        });
    };

    completedOrder = e => {
        this.setState({ groups: move(this.state.groups) });
    };

    setActive = e => {
        this.setState({ active_group: e.target.value });
    };

    render() {
        return (
            <div className="App">
                <Header
                    title="Welcome to coffee mate"
                    onChange={this.handleChange}
                    value={this.state.new_group}
                    buttonTitle="Add group"
                    buttonOnClick={this.addGroup}
                />
                <ol>
                    {this.state.groups.map((group, index) => (
                        <li key={index}>
                            {/*<button onClick={this.setActive} value={group.id}>
                                {group.name}
                            </button>*/}
                            <Link to={`/group_details/${group.id}`}>
                                {group.name}
                            </Link>
                            <button value={index} onClick={this.deleteGroup}>
                                Delete
                            </button>
                            {group.id === Number(this.state.active_group) ? (
                                <Fragment>
                                    <h3>Group Members</h3>
                                    <GroupDetails
                                        groupId={this.state.active_group}
                                    />
                                </Fragment>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default GroupsList;
