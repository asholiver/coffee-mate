import React from "react";
import { Link } from "react-router-dom";
import "./GroupItem.css";

const GroupItem = ({ name, handleDelete, id }) => {
    return (
        <li className="c-group-link__item">
            <Link className="c-group-link__link" to={`/app/group_details/${id}`}>
                {name}
            </Link>
            <button value={id} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default GroupItem;
