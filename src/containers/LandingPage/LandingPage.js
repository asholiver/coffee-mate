import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, ButtonGroup, Icon } from "./../../components";

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
      <div className="l-container">
        <div className="c-home-page">
          <div className="c-logo-container h-spacing-2x-large">
            <Icon icon="app-logo" size="large" classes="c-logo" />
          </div>
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
          <Link
            className="c-button c-button--secondary c-button--full-width h-spacing"
            to="/app/2/groups"
          >
            Login
          </Link>
          <ButtonGroup type="space-between">
            <Button text="Signup" buttonStyle="primary" size="full-width" />
            <Link
              className="c-button c-button--primary c-button--full-width"
              to="/app/2/groups"
            >
              Forgot Password
            </Link>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default LandingPage;
