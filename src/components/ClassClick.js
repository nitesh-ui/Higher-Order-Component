import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        alert("Button Clicked Class");
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler}>Class Click Event Button</button>
            </div>
        )
    }
}

export default ClassClick