import React, { Component, Fragment } from "react";
import { Header, Body, Footer, Page } from "./../../layout";
import { PageHeader } from "./../../components";

class Search extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        isLoading: true,
        names: []
    };
    render() {
        const headerItems = [
            {
                type: "empty"
            },
            {
                type: "title",
                text: "Search"
            },
            {
                type: "empty"
            }
        ];
        const { userId } = this.state;
        return (
            <Page slideFromDirection="none">
                <PageHeader items={headerItems} />
                <div className="c-bottombar__content">
                    Search feature coming soon!!
                </div>
                <Footer userId={userId} editMode={false} readOnlyMode={false} />
            </Page>
        );
    }
}

export default Search;
