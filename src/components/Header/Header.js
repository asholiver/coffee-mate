import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({
    title,
    onChange,
    value,
    buttonOnClick,
    buttonTitle,
    hasBackButton
}) => (
    <header className="App-header">
        <h1 className="App-title">{title}</h1>
        <input
            className="c-header__input"
            type="text"
            onChange={onChange}
            value={value}
        />
        <button type="submit" onClick={buttonOnClick}>
            {buttonTitle}
        </button>
        {hasBackButton === "true" ? <Link to="/">Back to groups</Link> : null}
    </header>
);

export default Header;
