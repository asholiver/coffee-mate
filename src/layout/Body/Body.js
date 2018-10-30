import React, { Fragment } from "react";
import "./Body.css";
import classNames from "classnames";

const Body = ({ children, hasInner }) => {
    const classes = classNames({
        "l-body": true
    });
    return (
        <div className={classes}>
            {hasInner ? (
                <div className="l-body--inner">{children}</div>
            ) : (
                <Fragment>{children}</Fragment>
            )}
        </div>
    );
};

export default Body;
