import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import {
    Groups,
    Search,
    Rewards,
    Favourites,
    Settings,
    CreateMember
} from "./../../containers";

class App extends Component {
    state = {
        userId: this.props.match.params.userId,
        groups: []
    };
    render() {
        return (
            <Fragment>
                <Route exact path="/app/:userId/groups" component={Groups} />
                <Route path="/app/:userId/search" component={Search} />
                <Route path="/app/:userId/rewards" component={Rewards} />
                <Route path="/app/:userId/favourites" component={Favourites} />
                <Route path="/app/:userId/settings" component={Settings} />
                <Route
                    path="/app/:userId/create_member"
                    component={CreateMember}
                />
            </Fragment>
        );
    }
}

export default App;
