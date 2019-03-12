import React from "react";
import classNames from "classnames";
import { ErrorMessage, Label } from "./../index";
import "./TextField.css";

const TextField = ({
  label,
  name,
  type,
  value,
  isInvalid,
  error,
  onChange
}) => {
  const getClasses = classNames({
    "c-form-field": true,
    "is-invalid": error
  });
  return (
    <div className={getClasses}>
      <Label name={name} text={label} />
      <input
        id={`id_${name}`}
        className="c-form-field__input"
        type={type == null ? "text" : type}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <ErrorMessage id={`id_${name}_error`} message={error} />}
    </div>
  );
};

export default TextField;
