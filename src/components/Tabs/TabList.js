import React from "react";
import "./TabSet.css";
import classNames from "classnames";

const Tablist = ({ children }) => (
    <ul className="c-tabset" role="tablist">
        {children}
    </ul>
);

export default TabList;
