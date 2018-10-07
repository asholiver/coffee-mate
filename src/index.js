import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import { GroupsList, GroupDetails, HomePage } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import { Icons } from "./components";
import "./App.css";
import "./Keyframes.css";

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Icons />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/groups" component={GroupsList} />
            <Route path="/group_details/:groupId" component={GroupDetails} />
        </Fragment>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
