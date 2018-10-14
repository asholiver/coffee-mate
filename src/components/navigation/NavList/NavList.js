import React, { Fragment } from "react";
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
                <Fragment>
                    <NavItem
                        to={`/app/${userId}/edit_profile`}
                        name="Edit profile"
                        handleClick={onClick}
                        isColumn={isColumn}
                    />
                    <NavItem
                        to={`/app/${userId}`}
                        name="Home"
                        handleClick={onClick}
                        isColumn={isColumn}
                    />
                </Fragment>
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
            {hasHome ? (
                <Fragment>
                    <NavItem
                        to={`/app/${userId}/create_group`}
                        name="Add new Group"
                        handleClick={onClick}
                        isColumn={isColumn}
                    />
                    <NavItem
                        to={`/app/${userId}/create_member`}
                        name="Create Member"
                        handleClick={onClick}
                        isColumn={isColumn}
                    />
                </Fragment>
            ) : null}
        </ul>
    );
};

export default NavList;
