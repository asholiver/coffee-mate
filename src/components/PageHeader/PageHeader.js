import React from "react";
import "./PageHeader.css";

const PageHeader = ({ buttons }) => {
    return (
        <div className="c-header">
            {buttons.map(
                (button, index) =>
                    button.isEmpty ? (
                        <div key={index} className="c-header__item--empty" />
                    ) : (
                        <button
                            key={index}
                            onClick={button.onClick}
                            value={button.value}
                            className={
                                index === 1
                                    ? "c-header__title"
                                    : "c-button c-button--narrow"
                            }
                        >
                            {button.text}
                        </button>
                    )
            )}
        </div>
    );
};

export default PageHeader;
