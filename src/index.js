import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { App } from "./layout";
import { LandingPage } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import { Icons } from "./components";
import "./css/Helpers.css";
import "./css/Settings.css";
import "./css/Resets.css";
import "./css/Shame.css";
import "./css/Keyframes.css";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Fragment>
      <Icons />
      <Route exact path="/" component={LandingPage} />
      <Route path="/app/:userId" component={App} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
