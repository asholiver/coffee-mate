import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, ButtonGroup, Button } from "../../components";
import { LoggedOut } from "../../layout";

class ResetPassword extends Component {
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
      <LoggedOut>
        <TextField
          label="Email"
          name="new_username"
          onChange={this.handleChange}
        />

        <ButtonGroup type="space-between">
          <Link
            className="c-button c-button--primary c-button--small c-button--full-width"
            to="/"
          >
            Return to login
          </Link>
          <Link
            className="c-button c-button--secondary c-button--full-width c-button--small"
            to="/app/2/groups"
          >
            Reset Password
          </Link>
        </ButtonGroup>
      </LoggedOut>
    );
  }
}

export default ResetPassword;
