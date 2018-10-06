import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ buttonOnClick }) => (
    <header className="c-layout__header">
        <div className="c-layout__logo c-layout__logo--top" />
        <button type="button" onClick={buttonOnClick}>
            sidebar
        </button>
    </header>
);

export default Header;
