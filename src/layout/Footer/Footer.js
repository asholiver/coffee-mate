import React from "react";
import "./Footer.css";
import { NavList } from "./../../components";
import PropTypes from "prop-types";

const Footer = ({ userId, groupId, hasLinks }) => {
    const links = [
        {
            name: "Overview",
            to: `/app/${userId}/group_details/${groupId}`
        },
        {
            name: "Search",
            to: `/app/${userId}/group_details/${groupId}/search`
        },
        {
            name: "Settings",
            to: `/app/${userId}/group_details/${groupId}/settings`
        },
        {
            name: "Tabset",
            to: `/app/${userId}/group_details/${groupId}/tabset`
        }
    ];

    return (
        <div className="l-footer">
            {hasLinks ? <NavList arr={links} userId={userId} /> : null}
        </div>
    );
};

Footer.propTypes = {
    userId: PropTypes.number,
    groupId: PropTypes.number,
    hasLinks: PropTypes.bool
};

export default Footer;
