import React from "react";
import "./Footer.css";
import { NavList, ButtonIconOnly } from "./../../components";

const Footer = ({ userId, groupId, hasLinks }) => {
    const baseUrl = `app/${userId}/group_details/${groupId}`;

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
        }
    ];

    return (
        <div className="l-footer">
            {hasLinks ? <NavList arr={links} userId={userId} /> : null}
        </div>
    );
};

export default Footer;
