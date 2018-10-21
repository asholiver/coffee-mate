import React from "react";
import "./Header.css";

const Header = ({ title }) => (
    <header className="c-header">
        <h1 className="c-header__title">{title}</h1>
    </header>
);

export default Header;
