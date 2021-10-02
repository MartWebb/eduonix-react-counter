import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        console.log(props)
        super()
        this.state = {
            count: 0
        }
        this.decrementHandler = this.decrementHandler.bind(this)
        this.incrementHandler = this.incrementHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
    }
    decrementHandler() {
        if (this.state.count > 0) {
            this.setState((prevState) =>  {
                return {
                    count: prevState.count = prevState.count - 1
                }
            });
        }  
    }
    incrementHandler() {
        console.log(this.state.count)
        this.setState((prevState) =>  {
            return {
                count: prevState.count = prevState.count + 1
            }
        });
    }

    resetHandler() {
        console.log(this.state.count)
        this.setState((prevState) =>  {
            return {
                count: prevState.count = 0
            }
        });
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="count">{this.state.count}</div>
                <div className="button-container">
                    <button className="button" onClick={this.incrementHandler}>Increment</button>
                    <button className="button" onClick={this.decrementHandler}>Decrement</button>
                    <button className="button" onClick={this.resetHandler}>Reset</button>
                </div>
                </div>
            </>
        )
    }
    
}
export default Counter;