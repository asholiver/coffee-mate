import React from "react";
import ButtonIconOnly from "./../ButtonIconOnly";
import Icon from "./../Icon";
import "./Header.css";

const Header = ({ buttonOnClick }) => (
    <header className="c-header">
        <div className="c-header__logo">
            <Icon icon="coffee" isLarge="true" />
        </div>
        <ButtonIconOnly buttonOnClick={buttonOnClick} icon="hamburger" />
        <ButtonIconOnly buttonOnClick={buttonOnClick} icon="cogs" />
    </header>
);

export default Header;
