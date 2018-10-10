import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, ButtonGroup } from "./../../components";

class LandingPage extends Component {
    state = {
        is_loading: true,
        names: [],
        new_username: "",
        isSideBarVisible: false
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <div className="h-container">
                <div className="c-home-page-container">
                    <div className="c-home-page">
                        <h1 className="c-home-page__title">Coffee Mate</h1>
                        <TextField
                            label="Username"
                            name="new_username"
                            onChange={this.handleChange}
                        />
                        <TextField
                            label="Password"
                            name="new_password"
                            isInvalid="true"
                            type="password"
                            onChange={this.handleChange}
                            errorMessage="The password you have entered is incorrect"
                        />
                        <ButtonGroup type="space-between">
                            <Button text="Signup" buttonStyle="primary" />
                            <Link
                                className="c-button c-button--secondary"
                                to="/app/2"
                            >
                                Login
                            </Link>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
