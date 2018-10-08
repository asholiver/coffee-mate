import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField } from "./../../components";

class LandingPage extends Component {
    render() {
        return (
            <div className="h-container">
                <div className="an-slide-fwd-center c-home-page-container">
                    <div className="c-home-page">
                        <h1 className="c-home-page__title">Coffee Mate</h1>
                        <TextField label="Username" name="new_username" />
                        <TextField
                            label="Password"
                            name="new_password"
                            isInvalid="true"
                            type="password"
                            errorMessage="The password you have entered is incorrect"
                        />
                        <div className="c-button-group c-button-group--space-between">
                            <button
                                type="button"
                                className="c-button c-button--secondary"
                            >
                                Signup
                            </button>
                            <Link
                                className="c-button c-button--secondary"
                                to="/app"
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

export default LandingPage;
