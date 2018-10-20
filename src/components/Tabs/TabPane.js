import React from "react";
import "./TabSet.css";
import classNames from "classnames";

const TabPane = ({ children, id, isSelected }) => {
    return (
        <section
            className={`c-tabset__content ${isSelected ? "is-active" : ""}`}
            id={id}
            role="tabpanel"
            aria-hidden={!isSelected}
        >
            {children}
        </section>
    );
};

export default TabPane;
