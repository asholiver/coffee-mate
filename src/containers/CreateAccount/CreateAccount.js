import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, TextField, ButtonGroup } from "../../components";
import { LoggedOut } from "../../layout";

const CreateAccount = () => {
  const [values, setValues] = useState({
    new_first: "",
    new_last: "",
    new_email: "",
    new_password: "",
    new_repeat_password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const loginErrorMessages = {
    100: "No account associated with this email.",
    200: "New user - no password",
    300: "Password is incorrect."
  };

  const [errorText, setErrorText] = useState("");

  return (
    <LoggedOut>
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
            errorText.new_repeat_password && errorText.new_repeat_password.type
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
        <Link
          className="c-button c-button--secondary c-button--full-width"
          to="/"
        >
          Create
        </Link>
      </ButtonGroup>
    </LoggedOut>
  );
};

export default CreateAccount;
