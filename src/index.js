import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import { GroupsList, GroupDetails } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import "./App.css";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={GroupsList} />
            <Route path="/group_details/:groupId" component={GroupDetails}  />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
