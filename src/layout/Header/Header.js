import React from "react";
import { ButtonIconOnly, Icon } from "./../../components";
import "./Header.css";

const Header = ({ buttonOnClick }) => (
    <header className="l-header">
        <div className="l-header__logo">
            <Icon icon="coffee" size="large" ariaHidden="false" />
        </div>
        <ButtonIconOnly
            buttonOnClick={buttonOnClick}
            icon="hamburger"
            helpText="open sidebar"
        />
        <ButtonIconOnly
            buttonOnClick={buttonOnClick}
            icon="cogs"
            helpText="settings"
        />
    </header>
);

export default Header;
