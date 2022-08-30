import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello Visitor"
        }
    }

    clickSubscribe() {
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={() => this.clickSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message