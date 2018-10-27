import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { Groups } from "./../../containers";

class App extends Component {
    state = {
        userId: this.props.match.params.userId,
        groups: []
    };
    render() {
        return (
            <Fragment>
                <Route exact path="/app/:userId" component={Groups} />
                {/*<Route exact path="/app/:userId/settings" render={Settings} /> */}
                {/* <Route exact path="/app/:userId/rewards" render={Rewards} /> */}
            </Fragment>
        );
    }
}

export default App;
