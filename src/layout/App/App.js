import React, { Component, Fragment } from "react";
import axios from "axios";
import { Footer, Header, Body, Sidebar } from "./../../layout";
import { GroupItem } from "./../../components";
import { move } from "./../../utils";

class App extends Component {
    state = {
        groups: [],
        new_group: "",
        isSideBarVisible: false
    };
    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get("https://coffee-mate-server.herokuapp.com/api/groups")
            .then(response => {
                this.setState({ groups: response.data });
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    handleChange = e => {
        this.setState({
            new_group: e.target.value
        });
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

    setActive = e => {
        this.setState({ active_group: e.target.value });
    };
    render() {
        const { groups, isSideBarVisible } = this.state;
        return (
            <Fragment>
                <Header buttonOnClick={this.toggleSidebar} />
                <Sidebar isVisible={isSideBarVisible}>
                    <button type="button" onClick={this.toggleSidebar}>
                        Close
                    </button>
                    <ol className="c-group-link-container">
                        {groups.map((group, index) => (
                            <GroupItem
                                key={index}
                                handleDelete={this.deleteGroup}
                                name={group.name}
                                id={group.id}
                            />
                        ))}
                    </ol>
                </Sidebar>
                <Body />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
