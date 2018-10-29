import React, { Component, Fragment } from "react";
import { Header, Body, Footer } from "./../../layout";
import { Link } from "react-router-dom";
import axios from "axios";
import API_ROOT from "./../../constants/api-root";

class Settings extends Component {
    state = {
        userId: Number(this.props.match.params.userId),
        new_first_name: "",
        new_last_name: ""
    };

    componentDidMount = () => {
        // Make a request for a user with a given ID
        axios
            .get(`${API_ROOT}api/users/${this.state.userId}`)
            .then(response => {
                this.setState({
                    new_first_name: response.data.first_name,
                    new_last_name: response.data.last_name
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(() => {
                this.setState({ isLoading: false });
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    updateUser = e => {
        axios
            .put(`${API_ROOT}api/users/${this.state.userId}`, {
                first_name: this.state.new_first_name,
                last_name: this.state.new_last_name
            })
            .then(response => {
                this.setState({
                    hasUpdated: true
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    render() {
        const { userId } = this.state;
        return (
            <Fragment>
                <Header>
                    <h1 className="c-header__title">Settings</h1>
                </Header>

                <Body hasNav={true}>
                    Settings feature coming soon!!
                    <Link
                        className="c-button c-button--primary"
                        to={"create_member"}
                    >
                        Create member
                    </Link>
                </Body>

                <Footer userId={userId} editMode={false} readOnlyMode={false} />
            </Fragment>
        );
    }
}

export default Settings;
