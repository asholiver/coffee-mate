import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ name, id, userId, handleClick }) => {
    return (
        <li className="c-group-link__item">
            <NavLink
                className="c-group-link__link"
                onClick={handleClick == null ? null : handleClick}
                to={`/app/${userId}/group_details/${id}`}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default NavItem;
