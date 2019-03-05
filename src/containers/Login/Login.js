import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, ButtonGroup } from "../../components";
import { LoggedOut } from "../../layout";

class Login extends Component {
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
          <Link
            className="c-button c-button--primary c-button--small c-button--full-width"
            to="/create"
          >
            Signup
          </Link>
          <Link
            className="c-button c-button--primary  c-button--small c-button--full-width"
            to="/reset_password"
          >
            Forgot Password
          </Link>
        </ButtonGroup>
      </LoggedOut>
    );
  }
}

export default Login;
