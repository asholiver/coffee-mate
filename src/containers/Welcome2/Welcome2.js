import React, { Component } from "react";
import axios from "axios";
import { TabSet } from "./../../components";
import Groups from "./../Groups";
import API_ROOT from "./../../constants/api-root";

class Welcome2 extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        isLoading: true,
        groups: [],
        names: []
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/groups?owner=${this.state.userId}`)
            .then(response => {
                this.setState({ groups: response.data });
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };

    render() {
        const { groups, userId } = this.state;
        return (
            <TabSet
                defaultIndex="3"
                tabData={[
                    {
                        id: "rewards",
                        href: "rewards",
                        label: "Rewards",
                        icon: "hamburger",
                        content: "Coming soon"
                    },
                    {
                        id: "favourites",
                        href: "favourites",
                        label: "Favourites",
                        icon: "hamburger",
                        content: "Coming soon"
                    },
                    {
                        id: "search",
                        href: "search",
                        label: "Search",
                        icon: "symbol",
                        content: "SEARCH"
                    },
                    {
                        id: "groups",
                        href: "groups",
                        label: "Groups",
                        icon: "close",
                        content: <Groups data={groups} userId={userId} />
                    },
                    {
                        id: "settings",
                        href: "settings",
                        label: "Settings",
                        icon: "cogs",
                        content: "user settings"
                    }
                ]}
            />
        );
    }
}

export default Welcome2;
