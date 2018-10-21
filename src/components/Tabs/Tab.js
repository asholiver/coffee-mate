import React from "react";
import "./TabSet.css";
import classNames from "classnames";
import { Icon } from "./../icons";

const Tab = ({
    label,
    id,
    href,
    handleClick,
    handleKeyPress,
    isSelected,
    index,
    icon
}) => {
    const classes = classNames({
        "c-tabset__tab": true,
        "is-active": isSelected
    });

    const ref = {
        ref: isSelected
            ? tab => {
                  if (isSelected && tab) tab.focus();
              }
            : null
        // https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element
    };
    return (
        <li className="c-tabset__item" role="presentation">
            <a
                {...ref}
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
                <Icon icon={icon} classes="c-tabset__tab--icon" size="x-small"/>
                <span className="c-tabset__tab--text">{label}</span>
            </a>
        </li>
    );
};

export default Tab;
