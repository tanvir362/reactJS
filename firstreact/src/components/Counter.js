import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    increment(){
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => console.log('call back value: '+this.state.count)
        // )
        this.setState((prevState) => ({
            count: prevState.count+1
        }))
        console.log(this.state.count);
    }

    fiveTimesIncrement(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.fiveTimesIncrement()}>Increment</button>
            </div>
        );
    }
}

export default Counter;