import React, { Fragment } from "react";
import { Header } from "./../../layout";
import { NavList } from "./../../components";

const Groups = ({ data, userId, complete }) => {
    return (
        <Fragment>
            <Header title="Groups" />
            <NavList
                arr={data}
                isColumn="true"
                userId={userId}
                to={`/app/${userId}/group_details/`}
            />
        </Fragment>
    );
};

export default Groups;
