import React, { Component } from "react";
import { Header } from "./../../components";
import { move } from "./../../utils";

const groups = {
    1: [
        "Alex Nedoboi",
        "Ashley Oliver",
        "David Berner",
        "Ev Komarevtsev",
        "Gary Wood"
    ],
    2: ["Dick face", "Knob head", "Vaginal Passage", "({})", "8===D---"]
};

class GroupDetails extends Component {
    state = {
        new_name: "",
        names: groups[this.props.match.params.groupId]
    };

    handleChange = e => {
        this.setState({
            new_name: e.target.value
        });
    };

    addMember = e => {
        this.setState({
            names: this.state.names.concat(this.state.new_name),
            new_name: ""
        });
    };

    deleteMember = e => {
        this.setState({
            names: this.state.names.filter(
                (item, index) => index !== Number(e.target.value)
            )
        });
    };

    completedOrder = e => {
        this.setState({ names: move(this.state.names) });
    };

    render() {
        const { groupId } = this.props;
        console.log(this.props);
        return (
            <ol>
                {this.state.names.map((e, index) => (
                    <li key={index}>
                        {e}
                        {index === 0 ? (
                            <button onClick={this.completedOrder}>Done</button>
                        ) : null}
                        <button value={index} onClick={this.deleteMember}>
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        );
    }
}

export default GroupDetails;
