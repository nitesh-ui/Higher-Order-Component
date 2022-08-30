import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            counter : 0
        }
    }

    doIncrement() {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render() {
        return(
            <div>
                <h4>Count - {this.state.counter}</h4>
                <button onClick={() => this.doIncrement()}>Click Here</button>
            </div>
        )
    }
}

export default Counter