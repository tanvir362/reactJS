import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            Message: 'Welcome visitor!',
            btntxt: 'Subscribe'
        }
    }
    changeMessage(){
        this.setState(
            {
                Message: 'Thanks for Subscribe',
                btntxt: 'Unsubscribe'
            }
        )
        console.log(this.state.Message);
    }
    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}>{this.state.btntxt}</button>
            </div>
        );
    }
}

export default Message;