import React from "react";
import NavItem from "./../NavItem";
import "./NavList.css";
import classNames from "classnames";

const NavList = ({ arr, onClick, isColumn, to }) => {
    const classes = classNames({
        "c-nav": true,
        "c-nav--column": isColumn
    });
    return (
        <ul className={classes}>
            {arr.map((item, index) => (
                <NavItem
                    to={`${to}${item.id}`}
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
