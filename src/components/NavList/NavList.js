import React from "react";
import NavItem from "./../NavItem";
import "./NavList.css";

const NavList = ({ arr, onClick, userId }) => {
    return (
        <ul>
            {arr.map((item, index) => (
                <NavItem
                    key={index}
                    name={item.name}
                    userId={userId}
                    id={item.id}
                    toggleSidebar={onClick}
                />
            ))}
        </ul>
    );
};

export default NavList;
