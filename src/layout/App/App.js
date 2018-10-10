import React, { Component, Fragment } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import {
    Welcome,
    GroupDetails,
    GroupSearch,
    GroupSettings
} from "./../../containers";
import { Header, Sidebar } from "./../../layout";
import { move } from "./../../utils";

class App extends Component {
    state = {
        userId: this.props.match.params.userId,
        isSideBarVisible: false
    };

    addGroup = e => {
        axios
            .post("https://coffee-mate-server.herokuapp.com/api/groups", {
                new_name: this.state.new_group
            })
            .then(response => {
                this.setState({
                    groups: this.state.groups.concat({
                        name: this.state.new_group,
                        id: response.data.id
                    }),
                    new_group: ""
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    deleteGroup = e => {
        const id = e.target.value;
        axios
            .post(`https://coffee-mate-server.herokuapp.com/api/groups/${id}`)
            .then(response => {
                this.setState({
                    groups: this.state.groups.filter(
                        item => item.id !== Number(id)
                    )
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    completedOrder = e => {
        this.setState({ groups: move(this.state.groups) });
    };

    toggleSidebar = e => {
        this.setState({ isSideBarVisible: !this.state.isSideBarVisible });
    };
    render() {
        const { isSideBarVisible, userId } = this.state;
        return (
            <Fragment>
                <Header buttonOnClick={this.toggleSidebar} />
                <Sidebar
                    isVisible={isSideBarVisible}
                    onClick={this.toggleSidebar}
                    userId={userId}
                />
                <Route exact path="/app/:userId" component={Welcome} />
                <Route
                    path="/app/:userId/group_details/:groupId"
                    component={GroupDetails}
                />
                <Route
                    exact
                    path="/app/:userId/group_details/:groupId/search"
                    component={GroupSearch}
                />
                <Route
                    exact
                    path="/app/:userId/group_details/:groupId/settings"
                    component={GroupSettings}
                />
            </Fragment>
        );
    }
}

export default App;
