import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import { GroupsList, GroupDetails, HomePage } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import "./App.css";

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/groups" component={GroupsList} />
            <Route path="/group_details/:groupId" component={GroupDetails} />
        </Fragment>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
