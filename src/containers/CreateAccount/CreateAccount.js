import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, ButtonGroup } from "../../components";
import { LoggedOut } from "../../layout";

class CreateAccount extends Component {
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
          label="Choose username"
          name="new_username"
          onChange={this.handleChange}
        />
        <TextField
          label="Create password"
          name="new_password"
          isInvalid="true"
          type="password"
          onChange={this.handleChange}
          errorMessage="The password you have entered is incorrect"
        />

        <ButtonGroup type="space-between">
          <Link
            className="c-button c-button--primary c-button--full-width"
            to="/"
          >
            Return to login
          </Link>
          <Link
            className="c-button c-button--secondary c-button--full-width"
            to="/"
          >
            Create
          </Link>
        </ButtonGroup>
      </LoggedOut>
    );
  }
}

export default CreateAccount;
