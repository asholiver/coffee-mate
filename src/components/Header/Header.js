import React from "react";
import "./Header.css";

const Header = ({ title, onChange, value, buttonOnClick, buttonTitle }) => (
    <header className="App-header">
        <h1 className="App-title">{title}</h1>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit" onClick={buttonOnClick}>
            {buttonTitle}
        </button>
    </header>
);

export default Header;
