import React from "react";
import "./TabSet.css";
import classNames from "classnames";

const TabPane = ({ children, id, isSelected }) => {
    const classes = classNames({
        "c-tabset__content": true,
        "is-active": isSelected
    });
    return (
        <section
            className={classes}
            id={id}
            role="tabpanel"
            aria-hidden={!isSelected}
        >
            {children}
        </section>
    );
};

export default TabPane;
