import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";
import classNames from "classnames";
import { Icon } from "./../../Icons";

const NavItem = ({ name, id, userId, handleClick, isColumn, to, icon }) => {
  const classes = classNames({
    "c-nav-item": true,
    "c-nav-item--column": isColumn,
    "c-nav-item--inline": !isColumn
  });
  return (
    <li className={classes}>
      <NavLink
        className="c-nav-item__link"
        activeClassName="is-active"
        onClick={handleClick == null ? null : handleClick}
        to={to}
      >
        <Icon icon={icon} classes="c-nav-item__icon" size="x-small" />
        <span className="c-nav-item__text">{name}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
