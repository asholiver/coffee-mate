import React from "react";
import "./Body.css";
import classNames from "classnames";

const Body = ({ children, hasHiddenElements, hasNav }) => {
    const classes = classNames({
        "l-body": true,
        "l-body--hidden": hasHiddenElements,
        "l-body--has-nav": hasNav
    });
    return <div className={classes}>{children}</div>;
};

export default Body;
