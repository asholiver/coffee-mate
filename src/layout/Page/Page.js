import React from "react";
import classNames from "classnames";

const Page = ({ children, isLoading }) => {
    const getClasses = classNames({
        "l-page": true,
        "has-loaded": !isLoading
    });
    return <div className={getClasses}>{children}</div>;
};

export default Page;
