import React from "react";
import "./Container.css";
import classNames from "classnames";

const Container = ({ children }) => (
    <div className="l-container">{children}</div>
);

export default Container;
