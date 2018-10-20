import React, { Component } from "react";
import "./TabSet.css";
import { Tab, TabList, TabPane } from "./index";
import Container from "./../Container";
import { KEYCODES } from "./../../constants/constants";

class TabSet extends Component {
    state = {
        indexSelected: this.props.defaultIndex
    };

    handleClick = e => {
        const index = e.target.getAttribute("data-index");
        this.setState({
            indexSelected: index
        });
    };

    handleKeyPress = e => {
        if (
            e.keyCode === KEYCODES.leftArrow ||
            e.keyCode === KEYCODES.rightArrow
        ) {
            const currentIndex = Number(e.target.getAttribute("data-index"));
            let newIndex;
            if (e.keyCode === KEYCODES.leftArrow) {
                newIndex =
                    currentIndex === 0
                        ? this.props.tabData.length - 1
                        : currentIndex - 1;
            } else {
                //if right arrow
                newIndex =
                    currentIndex === this.props.tabData.length - 1
                        ? 0
                        : currentIndex + 1;
            }
            this.setState({
                indexSelected: String(newIndex)
            });
        }
    };
    render() {
        const { tabData } = this.props;
        const { indexSelected } = this.state;
        return (
            <Container>
                <TabList>
                    {tabData.map((item, i) => (
                        <Tab
                            key={item.id}
                            index={i}
                            handleKeyPress={this.handleKeyPress}
                            handleClick={this.handleClick}
                            id={item.id}
                            href={item.href}
                            isSelected={indexSelected === String(i)}
                            label={item.label}
                        />
                    ))}
                </TabList>
                {tabData.map((item, i) => (
                    <TabPane
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        isSelected={indexSelected === String(i)}
                    >
                        {item.content}
                    </TabPane>
                ))}
            </Container>
        );
    }
}

export default TabSet;
