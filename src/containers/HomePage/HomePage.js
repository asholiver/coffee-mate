import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, GroupItem } from "./../../components";
import { move } from "./../../utils";

class GroupsList extends Component {
    state = {
        groups: [],
        new_group: ""
    };
    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get("https://coffee-mate-server.herokuapp.com/api/groups")
            .then(response => {
                this.setState({ groups: response.data });
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    handleChange = e => {
        this.setState({
            new_group: e.target.value
        });
    };

    addGroup = e => {
        axios
            .post("https://coffee-mate-server.herokuapp.com/api/groups", {
                new_name: this.state.new_group
            })
            .then(response => {
                this.setState({
                    groups: this.state.groups.concat({
                        name: this.state.new_group,
                        id: response.data.id
                    }),
                    new_group: ""
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    deleteGroup = e => {
        const id = e.target.value;
        axios
            .post(`https://coffee-mate-server.herokuapp.com/api/groups/${id}`)
            .then(response => {
                this.setState({
                    groups: this.state.groups.filter(
                        item => item.id !== Number(id)
                    )
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    completedOrder = e => {
        this.setState({ groups: move(this.state.groups) });
    };

    setActive = e => {
        this.setState({ active_group: e.target.value });
    };

    render() {
        const { groups, new_group } = this.state;
        return (
            <div className="c-home-page-container">
                <div className="c-home-page">
                    <h1 className="c-home-page__title">Coffee Mate</h1>
                    <div className="c-form-field">
                        <label
                            className="c-form-field__label"
                            for="id_input_user_name"
                        >
                            Username
                        </label>
                        <input
                            id="id_input_user_name"
                            className="c-form-field__input"
                            type="text"
                            name="new_username"
                            value=""
                        />
                    </div>
                    <div className="c-form-field">
                        <label
                            className="c-form-field__label"
                            for="id_input_password"
                        >
                            Password
                        </label>
                        <input
                            id="id_input_password"
                            className="c-form-field__input"
                            type="text"
                            name="new_password"
                            value=""
                        />
                    </div>
                    <div className="c-button-group c-button-group--space-between">
                        <button
                            type="button"
                            className="c-button c-button--secondary"
                        >
                            Signup
                        </button>
                        <Link
                            className="c-button c-button--secondary"
                            to="/groups"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupsList;
