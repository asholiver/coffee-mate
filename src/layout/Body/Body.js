import React from "react";
import "./Body.css";
import classNames from "classnames";

const Body = ({ children }) => {
    const classes = classNames({
        "l-body": true
    });
    return <div className={classes}>{children}</div>;
};

export default Body;
