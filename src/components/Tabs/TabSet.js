import React, { Component } from "react";
import "./TabSet.css";
import classNames from "classnames";

class TabSet extends Component {
    state = {
        indexSelected: this.props.defaultIndex
    };
    render() {
        const { data } = this.props;
        const { indexSelected } = this.state;

        const handleClick = event => {
            const index = event.target.getAttribute("data-index");
            this.setState({
                indexSelected: index
            });
        };

        const handleKeyPress = event => {
            if (
                event.keyCode == KEYCODES.leftArrow ||
                event.keyCode == KEYCODES.rightArrow
            ) {
                const currentIndex = Number(
                    event.target.getAttribute("data-index")
                );
                let newIndex;
                if (event.keyCode == KEYCODES.leftArrow) {
                    newIndex =
                        currentIndex === 0 ? data.length - 1 : currentIndex - 1;
                } else {
                    //if right arrow
                    newIndex =
                        currentIndex === data.length - 1 ? 0 : currentIndex + 1;
                }
                this.setState({
                    indexSelected: String(newIndex)
                });
            }
        };

        return (
            <Container>
                <Tablist>
                    {data.map((item, i) => (
                        <Tab
                            index={i}
                            handleKeyPress={handleKeyPress}
                            handleClick={handleClick}
                            id={item.id}
                            href={item.href}
                            isSelected={indexSelected === String(i)}
                            label={item.label}
                        />
                    ))}
                </Tablist>
                {data.map((item, i) => (
                    <TabPane
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
