import React, { Component, Fragment } from "react";
import axios from "axios";
import { Footer, Header, Body, Sidebar } from "./../../layout";
import { move } from "./../../utils";

class App extends Component {
    state = {
        userId: 2,
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
                <Body />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
