import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
    return (
        <span className="c-form-field__error_message">
            {message == null ? "This field is required." : message}
        </span>
    );
};

export default ErrorMessage;
