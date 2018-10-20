import React from "react";
import classNames from "classnames";
import "./GroupMember.css";
import { Button } from "./../../components";

const GroupMember = ({ name, handleDelete, handleComplete, id, isActive }) => {
    const getClasses = classNames({
        "h-display-flex": true,
        "is-active": isActive
    });
    return (
        <li className={getClasses}>
            <span className="c-group-link__link">{name}</span>
            {isActive ? (
                <Button
                    text={`Done ${id}`}
                    value={id}
                    buttonStyle="primary"
                    size="small"
                    onClick={handleComplete}
                />
            ) : null}
        </li>
    );
};

export default GroupMember;
