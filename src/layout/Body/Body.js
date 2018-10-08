import React from "react";
import { Route } from "react-router-dom";
import { Welcome, GroupDetails } from "./../../containers";
import "./Body.css";

const Body = () => (
    <div className="c-layout__body">
        <Route exact path="/app" component={Welcome} />
        <Route path="/app/group_details/:groupId" component={GroupDetails} />
    </div>
);

export default Body;
