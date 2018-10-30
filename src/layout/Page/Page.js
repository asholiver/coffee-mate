import React from "react";
import classNames from "classnames";
import "./Page.css";

const Page = ({ children, isOpen, isClosed, slideFromDirection }) => {
    const getClasses = classNames({
        "l-page": true,
        [`l-page--${slideFromDirection}`]:
            slideFromDirection !== "" ? true : false,
        "is-open": isOpen,
        "is-closed": isClosed
    });
    return <div className={getClasses}>{children}</div>;
};

export default Page;
