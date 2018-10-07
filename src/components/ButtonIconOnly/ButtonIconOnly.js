import React from "react";
import "./ButtonIconOnly.css";
import Icon from "./../Icon";

const ButtonIconOnly = ({ buttonOnClick, icon }) => (
    <button
        type="button"
        className="c-button-icon-only"
        onClick={buttonOnClick}
    >
        <Icon icon={icon} />
    </button>
);

export default ButtonIconOnly;
