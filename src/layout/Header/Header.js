import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ items }) => {
    return (
        <div className="c-header">
            {items.map((item, index) => {
                if (item.type === "empty") {
                    return (
                        <div key={index} className="c-header__item--empty" />
                    );
                }
                if (item.type === "button") {
                    return (
                        <button
                            key={index}
                            onClick={item.onClick}
                            value={item.value}
                            className={
                                index === 1
                                    ? "c-header__title"
                                    : "c-button c-button--narrow"
                            }
                        >
                            {item.text}
                        </button>
                    );
                }
                if (item.type === "title") {
                    return (
                        <h1
                            key={index}
                            className={
                                index === 1
                                    ? "c-header__title"
                                    : "c-button c-button--narrow"
                            }
                        >
                            {item.text}
                        </h1>
                    );
                }
                if (item.type === "link") {
                    return (
                        <Link
                            key={index}
                            className={
                                index === 1
                                    ? "c-header__title"
                                    : "c-button c-button--narrow"
                            }
                            to={item.to}
                        >
                            {item.text}
                        </Link>
                    );
                }
            })}
        </div>
    );
};

export default Header;
