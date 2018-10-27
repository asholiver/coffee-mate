import React from "react";
import "./Body.css";
import classNames from "classnames";

const Body = ({ children, isSideBarVisible }) => {
    const classes = classNames({
        "l-body": true,
        "is-pushed-right": isSideBarVisible
    });
    return <div className={classes}>{children}</div>;
};

export default Body;
