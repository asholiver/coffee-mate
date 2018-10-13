import React from "react";
import classNames from "classnames";
import "./Icon.css";

const Icon = ({ icon, size, ariaHidden, classes }) => {
    const getClasses = classNames({
        "c-icon": true,
        [`c-icon--${size}`]: size == null ? false : true
    });
    return (
        <svg
            aria-hidden={ariaHidden == null ? true : ariaHidden}
            className={`${getClasses} ${classes}`}
        >
            <use xlinkHref={`#${icon}-icon`} />
        </svg>
    );
};

export default Icon;
