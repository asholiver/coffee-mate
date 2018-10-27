import React, { Component, Fragment } from "react";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";
import { Header, Body, Footer, BottomBar } from "./../../layout";
import { Button, Group } from "./../../components";

class Groups extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        groups: [],
        editMode: false,
        isBottomBarVisible: false
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

    toggleEditMode = e => {
        this.setState({ editMode: !this.state.editMode });
    };

    toggleBottomBar = e => {
        this.setState({ isBottomBarVisible: !this.state.isBottomBarVisible });
    };

    render() {
        const { userId, groups, editMode, isBottomBarVisible } = this.state;
        return (
            <Fragment>
                <Header>
                    <Button
                        onClick={this.toggleEditMode}
                        text={editMode ? "Done" : "Edit"}
                    />
                    <h1 className="c-header__title">Groups</h1>
                    <Button onClick={this.toggleBottomBar} text="Create" />
                </Header>

                <Body hasHiddenElements={true} hasNav={true}>
                    {groups.map((item, index) => (
                        <Group
                            key={index}
                            group={item}
                            isSideBarVisible={editMode}
                        />
                    ))}
                </Body>
                <Footer userId={userId} isSideBarVisible={editMode} />
                <BottomBar
                    isVisible={isBottomBarVisible}
                    onClick={this.toggleBottomBar}
                    userId={userId}
                />
            </Fragment>
        );
    }
}

export default Groups;
