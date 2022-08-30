import React, { Component } from "react";

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : 'Hello'
        }

        /* This is for 2nd approach */
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message : 'Welcome to Mumbai'
        })
    }

    // This is 2nd way
    // clickHandler = () => {
    //     this.setState({
    //         message : 'Goodbye'
    //     })
    // }

    render() {
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={() => this.clickHandler()}>Click Event Bind Button</button> */}


                {/* This is 2nd approach */}
                <button onClick={this.clickHandler}>Click Event Bind Button</button>
            </div>
        )
    }
}

export default EventBind