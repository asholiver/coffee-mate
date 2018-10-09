import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import { App } from "./layout";
import { LandingPage } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import { Icons } from "./components";
import "./App.css";
import "./Keyframes.css";

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Icons />
            <Route exact path="/" component={LandingPage} />
            <Route path="/app/:userId" component={App} />
        </Fragment>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
