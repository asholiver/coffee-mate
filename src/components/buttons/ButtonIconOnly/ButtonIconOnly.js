import React from "react";
import "./ButtonIconOnly.css";
import { Icon } from "./../../icons";

const ButtonIconOnly = ({
    buttonOnClick,
    icon,
    classes,
    size,
    helpText,
    buttonValue,
    type
}) => (
    <button
        value={buttonValue}
        type={type == null ? "button" : type}
        className={`c-button-icon-only ${classes != null ? classes : ""}`}
        onClick={buttonOnClick}
    >
        <span className="h-hide-visually">{helpText}</span>
        <Icon icon={icon} size={size} />
    </button>
);

export default ButtonIconOnly;
