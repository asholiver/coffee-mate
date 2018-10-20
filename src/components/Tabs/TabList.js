import React from "react";
import "./TabSet.css";

const TabList = ({ children }) => (
    <ul className="c-tabset" role="tablist">
        {children}
    </ul>
);

export default TabList;
