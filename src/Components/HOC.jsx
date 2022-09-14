import React from "react";

const CounterHOC = (OriginalComponents) => {
    class NewComponents extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }


        updateCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return (<OriginalComponents count={this.state.count} incrementCount={this.updateCount} />)
        }
    }


    return NewComponents;

}

export default CounterHOC;


