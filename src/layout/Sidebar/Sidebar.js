import React, { Component } from "react";
import "./Sidebar.css";
import { NavList } from "./../../components";
import axios from "axios";
import classNames from "classnames";

class Sidebar extends Component {
    state = {
        groups: []
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(
                `https://coffee-mate-server.herokuapp.com/api/groups?member=${this
                    .props.userId}`
            )
            .then(response => {
                this.setState({ groups: response.data });
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    render() {
        const { isVisible, onClick, userId } = this.props;
        const { groups } = this.state;
        const classes = classNames({
            "c-sidebar": true,
            "is-active": isVisible,
            "is-hidden": !isVisible
        });
        return (
            <div className={classes}>
                <button type="button" onClick={onClick}>
                    Close
                </button>
                <NavList arr={groups} onClick={onClick} userId={userId} />
            </div>
        );
    }
}

export default Sidebar;
