import React from "react";
import "./Label.css";

const Label = ({ name, text }) => {
    return (
        <label className="c-form-field__label" htmlFor={`id_${name}`}>
            {text}
        </label>
    );
};

export default Label;
