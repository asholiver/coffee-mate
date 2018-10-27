import React, { Component } from "react";
import "./Sidebar.css";
import { NavList, ButtonIconOnly } from "./../../components";
import axios from "axios";
import classNames from "classnames";

class Sidebar extends Component {
    state = {
        groups: []
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
    };

    render() {
        const { isVisible, onClick, userId } = this.props;
        const { groups } = this.state;
        const classes = classNames({
            "c-sidebar": true,
            "is-active": isVisible,
            "is-hidden": !isVisible
        });
        const buttonClass = classNames({
            "c-sidebar__close": true
        });
        return <div className={classes}>hello</div>;
    }
}

export default Sidebar;
