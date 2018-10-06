import React from "react";
import classNames from "classnames";
import "./TextField.css";

const TextField = ({ label, name, type, value, isInvalid, errorMessage }) => {
    const getClasses = classNames({
        "c-form-field": true,
        "is-invalid": isInvalid
    });
    return (
        <div className={getClasses}>
            <label className="c-form-field__label" htmlFor={`id_${name}`}>
                {label}
            </label>
            <input
                id={`id_${name}`}
                className="c-form-field__input"
                type={type ? null : type || "text"}
                name={name}
                value={value}
            />
            <span className="c-form-field__error_message">
                {errorMessage
                    ? null
                    : errorMessage || "This field is required."}
            </span>
        </div>
    );
};

export default TextField;
