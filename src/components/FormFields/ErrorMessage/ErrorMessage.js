import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ message, id }) => {
  return (
    message && (
      <p id={id} className="c-form-field__error_message">
        {message}
      </p>
    )
  );
};

export default ErrorMessage;
