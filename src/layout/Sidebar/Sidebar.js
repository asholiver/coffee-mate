import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import classNames from "classnames";

const Sidebar = ({ isVisible, children }) => {
    const classes = classNames({
        "c-sidebar": true,
        "is-active": isVisible,
        "is-hidden": !isVisible
    });
    return <div className={classes}>{children}</div>;
};

export default Sidebar;
