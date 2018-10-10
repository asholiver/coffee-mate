import React from "react";
import NavItem from "./../NavItem";
import "./NavList.css";
import classNames from "classnames";

const NavList = ({ arr, onClick, isColumn, to, userId, hasHome }) => {
    const classes = classNames({
        "c-nav": true,
        "c-nav--column": isColumn,
        "c-nav--inline": !isColumn
    });
    return (
        <ul className={classes}>
            {hasHome ? (
                <NavItem
                    to={`/app/${userId}`}
                    name="Home"
                    handleClick={onClick}
                    isColumn={isColumn}
                />
            ) : null}
            {arr.map((item, index) => (
                <NavItem
                    to={item.to == null ? `${to}${item.id}` : item.to}
                    key={index}
                    name={item.name}
                    handleClick={onClick}
                    isColumn={isColumn}
                />
            ))}
        </ul>
    );
};

export default NavList;
