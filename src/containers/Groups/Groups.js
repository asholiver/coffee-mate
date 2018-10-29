import React, { Component, Fragment } from "react";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";
import { Body, Footer, BottomBar } from "./../../layout";
import { Group, PageHeader } from "./../../components";
import { GroupChannel } from "./../../containers";

class Groups extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        groups: [],
        groupId: 0,
        editMode: false,
        readOnly: false,
        showBottomBar: false,
        hideBottomBar: false
    };

    getViewportSize = () => {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        const rootEl = document.querySelector("html");
        rootEl.style.setProperty("--g-viewport-height", height + "px");
        rootEl.style.setProperty("--g-viewport-width", width + "px");
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/groups?owner=${this.state.userId}`)
            .then(response => {
                this.setState({ groups: response.data });
                console.log(response.data);
                this.getViewportSize();
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    toggleRightSidebar = e => {
        this.setState({ groupId: e.target.value });
    };

    toggleEditMode = e => {
        this.setState({ editMode: !this.state.editMode, readOnly: false });
    };

    toggleReadOnly = e => {
        this.setState({ readOnly: !this.state.readOnly, editMode: false });
    };

    openBottomBar = e => {
        this.setState({
            showBottomBar: !this.state.showBottomBar,
            hideBottomBar: false
        });
    };

    closeBottomBar = e => {
        this.setState({
            hideBottomBar: !this.state.hideBottomBar,
            showBottomBar: false
        });
    };

    addGroup = id => {
        this.setState({ groupId: Number(id) });
        this.closeBottomBar();
    };

    render() {
        const {
            userId,
            groups,
            editMode,
            showBottomBar,
            hideBottomBar,
            readOnly,
            groupId
        } = this.state;
        const headerButtons = [
            {
                isButton: true,
                text: editMode ? "Done" : "Edit",
                onClick: editMode ? this.toggleReadOnly : this.toggleEditMode
            },
            {
                isButton: true,
                text: "Groups"
            },
            {
                isButton: true,
                text: "Create",
                onClick: this.openBottomBar
            }
        ];
        return (
            <Fragment>
                <PageHeader buttons={headerButtons} />
                <Body hasHiddenElements={true} hasNav={true}>
                    {groups.map((item, index) => (
                        <Group
                            key={index}
                            group={item}
                            editMode={editMode}
                            readOnlyMode={readOnly}
                            onClick={this.toggleRightSidebar}
                            userId={userId}
                        />
                    ))}
                </Body>
                <Footer
                    userId={userId}
                    editMode={editMode}
                    readOnlyMode={readOnly}
                />
                {groupId > 0 ? (
                    <GroupChannel
                        groupId={Number(groupId)}
                        userId={userId}
                        onClick={this.toggleRightSidebar}
                    />
                ) : null}

                <BottomBar
                    isVisible={showBottomBar}
                    isClosed={hideBottomBar}
                    onClick={this.closeBottomBar}
                    userId={userId}
                    handleSubmit={this.addGroup}
                />
            </Fragment>
        );
    }
}

export default Groups;