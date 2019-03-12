import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// CSS Must come before the `Routes` where component overrides live
import "backpack.css";
import { App } from "./layout";
import { Login, CreateAccount, ResetPassword } from "./containers";
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
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={CreateAccount} />
      <Route exact path="/reset_password" component={ResetPassword} />
      <Route path="/app/:userId" component={App} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
