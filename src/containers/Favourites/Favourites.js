import React, { Component, Fragment } from "react";
import { Header, Body, Footer } from "./../../layout";

class Favourites extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        isLoading: true,
        names: []
    };
    render() {
        const { userId } = this.state;
        return (
            <Fragment>
                <Header>
                    <h1 className="c-header__title">Favourites</h1>
                </Header>

                <Body hasNav={true}>Favourites feature coming soon!!</Body>
                <Footer userId={userId} editMode={false} readOnlyMode={false} />
            </Fragment>
        );
    }
}

export default Favourites;
