import React, { Component } from "react";
import "./Sidebar.css";
import classNames from "classnames";

class Sidebar extends Component {
    state = {
        groups: []
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
    };

    render() {
        const { isVisible } = this.props;
        const classes = classNames({
            "c-sidebar": true,
            "is-active": isVisible,
            "is-hidden": !isVisible
        });
        return <div className={classes}>hello</div>;
    }
}

export default Sidebar;
