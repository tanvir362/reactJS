import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            req: 'Subscribe please',
            tnq: 'Thanks for subscribe',
            sb: 'Subscribe',
            unsb: 'Unsubscribe'
        }
    }

    chngmsg(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return(
            <div>
                <h1>{(this.state.count%2 == 0)? this.state.req : this.state.tnq}</h1>
                <button onClick={() => this.chngmsg()}>{(this.state.count%2 == 0)? this.state.sb : this.state.unsb}</button>
            </div>
        );
    }
}

export default Message;