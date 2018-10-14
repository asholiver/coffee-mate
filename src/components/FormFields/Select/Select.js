import React from "react";
import classNames from "classnames";
import { ErrorMessage, Label } from "./../index";
import { Icon } from "./../../icons";
import "./Select.css";

const Select = ({
    label,
    name,
    isInvalid,
    options,
    errorMessage,
    onChange,
    defaultOption
}) => {
    const classes = classNames({
        "c-select-container": true,
        "is-invalid": isInvalid
    });
    return (
        <div className={classes}>
            <Label name={name} text={label} />
            <span className="c-select">
                <select
                    id={`id_${name}`}
                    name={name}
                    className="c-select__select"
                    onChange={onChange}
                >
                    <option defaultValue value="">
                        Please select
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <Icon icon="arrow-down" classes="c-select__icon" />
            </span>
            <ErrorMessage message={errorMessage} />
        </div>
    );
};

export default Select;
