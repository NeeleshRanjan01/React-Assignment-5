import React, { Component } from "react";
import HOC from "./HOC";

class HoverCounter extends Component{
    render(){
    const {count, incrementCount}= this.props
    return(
        <div className="div3"> 
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
        </div>
    )
    }

}

export default HOC(HoverCounter);