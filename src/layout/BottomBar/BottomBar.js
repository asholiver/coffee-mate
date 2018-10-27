import React, { Component } from "react";
import "./BottomBar.css";
import { Button } from "./../../components";
import classNames from "classnames";
import { Header, Body } from "./../../layout";

class BottomBar extends Component {
    componentDidMount = () => {
        // Make a request for a user with a given ID
    };

    render() {
        const { isVisible, onClick, userId } = this.props;
        const classes = classNames({
            "c-bottombar": true,
            "is-active": isVisible
        });
        return (
            <div className={classes}>
                <div className="c-bottombar__header">
                    <h1 className="c-header__title">New Group</h1>
                    <Button
                        onClick={onClick}
                        className="c-button c-button--narrow"
                        text="Cancel"
                    />
                </div>

                <div className="c-bottombar__content">{userId}</div>
            </div>
        );
    }
}

export default BottomBar;
