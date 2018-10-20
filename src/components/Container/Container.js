import React from "react";
import "./Container.css";
import classNames from "classnames";

const Container = ({ size, children }) => {
    const classes = classNames({
        "l-container": true,
        [`l-container--${size}`]: size == null ? false : true
    });
    return <div className={classes}>{children}</div>;
};

export default Container;
