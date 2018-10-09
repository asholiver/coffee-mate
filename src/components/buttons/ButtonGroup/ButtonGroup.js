import React from "react";
import "./ButtonGroup.css";
import classNames from "classnames";

const ButtonGroup = ({ children, type }) => {
    const classes = classNames({
        "c-button-group": true,
        [`c-button-group--${type}`]: type == null ? false : true
    });
    return <div className={classes}>{children}</div>;
};

export default ButtonGroup;
