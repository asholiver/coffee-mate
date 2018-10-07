import React from "react";
import classNames from "classnames";
import "./Icon.css";

const Icon = ({ icon, isLarge }) => {
    const getClasses = classNames({
        "c-icon": true,
        "c-icon--large": isLarge
    });
    return (
        <svg aria-hidden="true" className={getClasses}>
            <use xlinkHref={`#${icon}-icon`} />
        </svg>
    );
};

export default Icon;
