import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, GroupItem } from "./../../components";
import { move } from "./../../utils";

class HomePage extends Component {
    render() {
        return (
            <div className="h-container">
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
            </div>
        );
    }
}

export default HomePage;
