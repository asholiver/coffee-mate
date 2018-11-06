import React, { Component } from "react";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";
import { Body, Header, Footer, Page } from "./../../layout";
import { Group } from "./../../components";
import { getViewportSize } from "./../../utils";
import { GroupChannel, CreateGroup } from "./../../containers";

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

    getData = (id, isInitial = false) => {
        axios
            .get(`${API_ROOT}api/groups?owner=${id}`)
            .then(response => {
                if (isInitial) {
                    getViewportSize();
                }
                this.setState({ groups: response.data });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    componentDidMount = () => {
        this.getData(Number(this.props.match.params.userId), true);
    };

    deleteGroup = groupId => {
        axios
            .post(`${API_ROOT}api/groups/${groupId}`)
            .then(response => {
                console.log(response);
                this.setState({
                    groupId: 0
                });
                this.getData(this.state.userId);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    addGroup = id => {
        this.setState({ groupId: Number(id) });
        this.closeBottomBar();
        this.getData(this.state.userId);
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
        const headerItems = [
            {
                type: "button",
                text: editMode ? "Done" : "Edit",
                onClick: editMode
                    ? () =>
                          this.setState({
                              readOnly: !readOnly,
                              editMode: false
                          })
                    : () =>
                          this.setState({
                              editMode: !editMode,
                              readOnly: false
                          })
            },
            {
                type: "title",
                text: "Groups"
            },
            {
                type: "button",
                text: "Create",
                onClick: () =>
                    this.setState({
                        showBottomBar: !showBottomBar,
                        hideBottomBar: false
                    })
            }
        ];
        return (
            <Page slideFromDirection="none">
                <Header items={headerItems} />
                <Body hasInner={true}>
                    {groups.map((item, index) => (
                        <Group
                            key={index}
                            group={item}
                            editMode={editMode}
                            readOnlyMode={readOnly}
                            onClick={() => this.setState({ groupId: item.id })}
                            userId={userId}
                            currentRound="blah"
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
                        onClick={() => this.setState({ groupId: 0 })}
                        handleDelete={this.deleteGroup}
                    />
                ) : null}

                <CreateGroup
                    isVisible={showBottomBar}
                    isClosed={hideBottomBar}
                    onClick={() =>
                        this.setState({
                            hideBottomBar: !hideBottomBar,
                            showBottomBar: false
                        })}
                    userId={userId}
                    handleSubmit={this.addGroup}
                />
            </Page>
        );
    }
}

export default Groups;
