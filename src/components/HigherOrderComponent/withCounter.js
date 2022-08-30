import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
        }
    
        handleIncrement = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }

        render() {
            return (
                <WrappedComponent 
                    count={this.state.count} 
                    handleIncrement={this.handleIncrement}
                    {...this.props}
                />
            ) 
        }
    }
    return WithCounter
}
export default withCounter