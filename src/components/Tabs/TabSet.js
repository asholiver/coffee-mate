import React, { Component } from "react";
import "./TabSet.css";
import { Tab, TabList, TabPane } from "./index";
import Container from "./../Container";

const KEYCODES = {
    leftArrow: 37,
    rightArrow: 39
};

class TabSet extends Component {
    state = {
        indexSelected: this.props.defaultIndex
    };

    handleClick = e => {
        console.log("click");
        const index = e.target.getAttribute("data-index");
        this.setState({
            indexSelected: index
        });
    };

    handleKeyPress = e => {
        const { tabData } = this.props;
        if (
            e.keyCode === KEYCODES.leftArrow ||
            e.keyCode === KEYCODES.rightArrow
        ) {
            const currentIndex = Number(e.target.getAttribute("data-index"));
            let newIndex;
            if (e.keyCode === KEYCODES.leftArrow) {
                newIndex =
                    currentIndex === 0 ? tabData.length - 1 : currentIndex - 1;
            } else {
                //if right arrow
                newIndex =
                    currentIndex === tabData.length - 1 ? 0 : currentIndex + 1;
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
                <div className="c-tabset-container">
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
                </div>
            </Container>
        );
    }
}

export default TabSet;
