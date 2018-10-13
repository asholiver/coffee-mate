import React, { Component, Fragment } from "react";
import axios from "axios";
import { Header, Sidebar, Body, Footer } from "./../../layout";

class Page extends Component {
    state = {
        userId: this.props.userId,
        groupId: this.props.groupId,
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

    toggleSidebar = e => {
        this.setState({ isSideBarVisible: !this.state.isSideBarVisible });
    };
    render() {
        const { children, hasLinks } = this.props;
        const { isSideBarVisible, userId, groupId } = this.state;
        return (
            <Fragment>
                <Header buttonOnClick={this.toggleSidebar} />
                <Sidebar
                    isVisible={isSideBarVisible}
                    onClick={this.toggleSidebar}
                    userId={userId}
                />
                <Body>
                    {userId}
                    {children}
                </Body>
                <Footer hasLinks={hasLinks} userId={userId} groupId={groupId} />
            </Fragment>
        );
    }
}

export default Page;
