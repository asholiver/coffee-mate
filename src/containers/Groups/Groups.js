import React, { Component, Fragment } from "react";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";
import { Header, Body, Footer, Sidebar } from "./../../layout";
import { Button, Group } from "./../../components";

class Groups extends Component {
    state = {
        userId: this.props.match.params.userId,
        groups: [],
        isSideBarVisible: false
    };
    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/groups?owner=${this.state.userId}`)
            .then(response => {
                this.setState({ groups: response.data });
                console.log(response.data);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    toggleSidebar = e => {
        this.setState({ isSideBarVisible: !this.state.isSideBarVisible });
    };

    render() {
        const { userId, groups, isSideBarVisible } = this.state;
        return (
            <Fragment>
                <Header>
                    <Button
                        onClick={this.toggleSidebar}
                        text={isSideBarVisible ? "Done" : "Edit"}
                    />
                    <h1 className="c-header__title">Groups</h1>
                </Header>
                {/*<Sidebar isVisible={isSideBarVisible} /> */}
                <Body>
                    {groups.map((item, index) => (
                        <Group
                            key={index}
                            group={item}
                            isSideBarVisible={isSideBarVisible}
                        />
                    ))}
                </Body>
                <Footer userId={userId} isSideBarVisible={isSideBarVisible} />
            </Fragment>
        );
    }
}

export default Groups;
