import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";
import { Button, Form, TextField, ButtonGroup } from "../../components";
import { LoggedOut } from "../../layout";

const CreateAccount = () => {
  const [values, setValues] = useState({
    new_first: "",
    new_last: "",
    new_email: "",
    new_password: "",
    new_repeat_password: ""
  });

  const loginErrorMessages = {
    100: "First name cannot be empty.",
    200: "Last name cannot be empty",
    300: "Email is not valid.",
    400: "Account already exists for this email.",
    500: "Passwords do not match."
  };

  const [errorText, setErrorText] = useState("");

  const [isValid, setIsValid] = useState(false);

  const [user, setUser] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    axios
      .post(`${API_ROOT}api/register`, {
        new_first: values.new_first,
        new_last: values.new_last,
        new_email: values.new_email,
        new_password: values.new_password,
        new_repeat_password: values.new_repeat_password
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

  if (isValid) {
    return <Redirect to={`/app/${user}/groups`} />;
  }

  return (
    <LoggedOut>
      <Form onSubmit={handleSubmit} action="signup">
        <TextField
          label="First name"
          name="new_first"
          onChange={handleChange}
          error={
            loginErrorMessages[errorText.new_first && errorText.new_first.type]
          }
        />
        <TextField
          label="First name"
          name="new_last"
          onChange={handleChange}
          error={
            loginErrorMessages[errorText.new_last && errorText.new_last.type]
          }
        />
        <TextField
          label="Username"
          name="new_email"
          onChange={handleChange}
          error={
            loginErrorMessages[errorText.new_email && errorText.new_email.type]
          }
        />
        <TextField
          label="Create password"
          name="new_password"
          type="password"
          onChange={handleChange}
          error={
            loginErrorMessages[
              errorText.new_password && errorText.new_password.type
            ]
          }
        />
        <TextField
          label="Repeat password"
          name="new_repeat_password"
          isInvalid="true"
          type="password"
          onChange={handleChange}
          error={
            loginErrorMessages[
              errorText.new_repeat_password &&
                errorText.new_repeat_password.type
            ]
          }
        />

        <ButtonGroup type="space-between">
          <Link
            className="c-button c-button--primary c-button--full-width"
            to="/"
          >
            Return to login
          </Link>
          <Button
            text="Create"
            type="submit"
            size="full-width"
            buttonStyle="secondary"
          />
        </ButtonGroup>
      </Form>
    </LoggedOut>
  );
};

export default CreateAccount;
