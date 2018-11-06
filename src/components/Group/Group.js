import React from "react";
import classNames from "classnames";
import "./Group.css";

const Group = ({
    group,
    editMode,
    readOnlyMode,
    userId,
    onClick,
    currentRound
}) => {
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
            <div className="c-group-item">
                <div className="c-group-item__image" />
                <div className="c-group-item__inner">
                    <p className="c-group-item__text">{group.name}</p>
                    <p className="c-group-item__text">{currentRound}</p>
                </div>
                <button
                    type="button"
                    className="c-group-item__cover-button"
                    onClick={onClick}
                    value={group.id}
                />
            </div>
        </div>
    );
};

export default Group;
