import React from "react";
import "./Link.css";

const Link = ({ to, children }) => <a href={to}>{children}</a>;

export default Link;
