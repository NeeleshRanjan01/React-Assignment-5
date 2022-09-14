import React, { Component } from "react";
import HOC from "./HOC";
import HoverCounter from "./HoverCounter";


class ClickCounter extends Component {
    render() {

        const { count, incrementCount } = this.props
        return (
            <>
                <div className="div">
                    <h2>Higher Order Component (HOC) </h2>
                    <p>It is an advanced technique in React for reusing component logic.</p>
                    <p>It is a function that takes a component and returns a new component</p>

                    <div className="div2">
                        <h4>In this assignment, we create HOC components that have the functionality of <i>count increment</i> and by reusing this component functionality, two other components are created where 1st will increase the count on click and 2nd will increase the count on hover </h4>


                    <button onClick={incrementCount}>Clicked {count} times</button>
                    <HoverCounter />
                    </div>
                </div>
            </>
        )
    }

}

export default HOC(ClickCounter);