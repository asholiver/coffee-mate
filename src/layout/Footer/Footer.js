import React from "react";
import "./Footer.css";
import { NavList, Button } from "./../../components";
import classNames from "classnames";
import PropTypes from "prop-types";

const Footer = ({ userId, isSideBarVisible }) => {
    const getClasses = classNames({
        "c-footer__buttons": true,
        "is-active": isSideBarVisible
    });
    const links = [
        {
            name: "Rewards",
            to: `/app/${userId}/rewards`,
            icon: "hamburger"
        },
        {
            name: "Favourites",
            to: `/app/${userId}/favourites`,
            icon: "hamburger"
        },
        {
            name: "Search",
            to: `/app/${userId}/search`,
            icon: "symbol"
        },
        {
            name: "Groups",
            to: `/app/${userId}`,
            icon: "close"
        },
        {
            name: "Settings",
            to: `/app/${userId}/settings`,
            icon: "cogs"
        }
    ];
    const editButtons = [
        {
            text: "Archive"
        },
        {
            text: "Delete"
        }
    ];

    return (
        <div className="l-footer">
            <NavList
                arr={links}
                userId={userId}
                isSideBarVisible={isSideBarVisible}
            />
            <div className={getClasses}>
                {editButtons.map((button, index) => (
                    <Button key={index} text={button.text} size="narrow" />
                ))}
            </div>
        </div>
    );
};

Footer.propTypes = {
    userId: PropTypes.number,
    groupId: PropTypes.number,
    hasLinks: PropTypes.bool
};

export default Footer;
