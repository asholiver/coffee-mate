import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";
import classNames from "classnames";

const NavItem = ({ name, id, userId, handleClick, isColumn, to }) => {
    const classes = classNames({
        "c-nav-item": true,
        "c-nav-item--column": isColumn,
        "c-nav--inline": !isColumn
    });
    return (
        <li className={classes}>
            <NavLink
                className="c-nav-item__link"
                onClick={handleClick == null ? null : handleClick}
                to={to}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default NavItem;
