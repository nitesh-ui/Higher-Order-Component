import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

    render() {
        const{count, handleIncrement} = this.props;

        return (
            <button onClick={handleIncrement}>{this.props.name} clicked {count} times</button>
        )
    }
}

export default withCounter(ClickCounter, 5)