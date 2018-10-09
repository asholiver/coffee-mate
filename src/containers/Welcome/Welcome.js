import React, { Component, Fragment } from "react";
import { Body, Footer } from "./../../layout";

class GroupsList extends Component {
    render() {
        return (
            <Fragment>
                <Body>
                    <p>Welcome back ash!</p>
                    <p>Its your round on these groups</p>
                </Body>
                <Footer />
            </Fragment>
        );
    }
}

export default GroupsList;
