import React from "react";
import NavItem from "./../NavItem";
import "./NavList.css";
import classNames from "classnames";

const NavList = ({ arr, onClick, isColumn, to, userId, isSideBarVisible }) => {
    const classes = classNames({
        "c-nav": true,
        "is-hidden": isSideBarVisible,
        "c-nav--column": isColumn,
        "c-nav--inline": !isColumn
    });
    return (
        <ul className={classes}>
            {arr.map((item, index) => (
                <NavItem
                    to={item.to == null ? `${to}${item.id}` : item.to}
                    key={index}
                    name={item.name}
                    icon={item.icon}
                    handleClick={onClick}
                    isColumn={isColumn}
                />
            ))}
        </ul>
    );
};

export default NavList;
