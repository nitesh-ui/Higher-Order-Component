import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component {

    render() {
        const{count,handleIncrement} = this.props;
        return (
            <h4 onMouseOver={handleIncrement}>You hovered {count} times</h4>
        )
    }
}

export default withCounter(HoverCounter, 6)