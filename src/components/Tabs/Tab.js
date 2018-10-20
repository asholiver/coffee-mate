import React from "react";
import "./TabSet.css";
import classNames from "classnames";

const Tab = ({
    label,
    id,
    href,
    handleClick,
    handleKeyPress,
    isSelected,
    index
}) => {
    const classes = classNames({
        "c-tabset__tab": true,
        "is-active": isSelected
    });
    return (
        <li className="c-tabset__item" role="presentation">
            <a
                data-index={index}
                className={classes}
                onKeyDown={handleKeyPress}
                onClick={handleClick}
                href={`#${href}`}
                tabIndex={isSelected ? "0" : "-1"}
                role="tab"
                aria-controls={id}
                aria-selected={isSelected}
            >
                {label}
            </a>
        </li>
    );
};

export default Tab;
