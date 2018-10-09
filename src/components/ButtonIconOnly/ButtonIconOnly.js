import React from "react";
import "./ButtonIconOnly.css";
import Icon from "./../Icon";

const ButtonIconOnly = ({ buttonOnClick, icon, classes, size, helpText }) => (
    <button
        type="button"
        className={`c-button-icon-only ${classes}`}
        onClick={buttonOnClick}
    >
        <span className="h-hide-visually">{helpText}</span>
        <Icon icon={icon} size={size} />
    </button>
);

export default ButtonIconOnly;
