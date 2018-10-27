import React from "react";
import classNames from "classnames";
import "./Group.css";

const Group = ({ group, editMode, readOnlyMode }) => {
    const getClasses = classNames({
        "c-group-container": true,
        "is-pushed-right": editMode,
        "is-pushed-left": readOnlyMode
    });
    return (
        <div className={getClasses}>
            <div className="c-group__placeholder">
                <input type="checkbox" />
            </div>
            <button type="button" className="c-group__item">
                {group.id}
                {group.name}
            </button>
        </div>
    );
};

export default Group;
