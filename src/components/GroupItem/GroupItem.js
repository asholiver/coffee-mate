import React from "react";
import { NavLink } from "react-router-dom";
import "./GroupItem.css";

const GroupItem = ({ name, handleDelete, id, userId, toggleSidebar }) => {
    return (
        <li className="c-group-link__item">
            <NavLink
                className="c-group-link__link"
                onClick={toggleSidebar}
                to={`/app/${userId}/group_details/${id}`}
            >
                {name}
            </NavLink>
            <button value={id} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default GroupItem;
