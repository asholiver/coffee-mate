import React from "react";
import classNames from "classnames";
import "./GroupMember.css";

const GroupMember = ({ name, handleDelete, handleComplete, id, isActive }) => {
    const getClasses = classNames({
        "c-group-link__item": true,
        "is-active": isActive
    });
    return (
        <li className={getClasses}>
            <span className="c-group-link__link">{name}</span>
            {isActive ? <button onClick={handleComplete}>Done</button> : null}
            <button value={id} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default GroupMember;
