import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";
import {
  Form,
  TextField,
  Button,
  ButtonGroup,
  Spacing
} from "../../components";
import { LoggedOut } from "../../layout";

const Login = () => {
  const [values, setValues] = useState({
    new_email: "",
    new_password: ""
  });

  const [isValid, setIsValid] = useState(false);

  const [user, setUser] = useState(null);

  const loginErrorMessages = {
    100: "No account associated with this email.",
    200: "New user - no password",
    300: "Password is incorrect."
  };

  const [errorText, setErrorText] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    axios
      .post(`${API_ROOT}api/login`, {
        new_email: values.new_email,
        new_password: values.new_password
      })
      .then(response => {
        setUser(response.data.id);
      })
      .then(() => {
        setIsValid(true);
      })
      .catch(function(error) {
        if (error.response) {
          console.log("error");
          setErrorText(error.response.data.fields);
        }
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  if (isValid) {
    return <Redirect to={`/app/${user}/groups`} />;
  }
  return (
    <LoggedOut>
      <Form onSubmit={handleSubmit} action="login">
        <TextField
          label="Username"
          name="new_email"
          onChange={handleChange}
          error={
            loginErrorMessages[errorText.new_email && errorText.new_email.type]
          }
        />
        <TextField
          label="password"
          name="new_password"
          isInvalid={values.password_invalid}
          type="password"
          onChange={handleChange}
          error={
            loginErrorMessages[
              errorText.new_password && errorText.new_password.type
            ]
          }
        />
        <Spacing>
          <Button
            text="Login"
            type="submit"
            size="full-width"
            buttonStyle="secondary"
          />
        </Spacing>

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
      </Form>
    </LoggedOut>
  );
};

export default Login;
