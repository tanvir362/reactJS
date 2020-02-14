import React,{Component} from 'react'
import './DropDown.css'

class DropDown extends Component{

    constructor(){
        super();
        this.state = {
            color: 'red',
            styl: {
                background: 'red'
            }
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    async onChangeHandler(event){
        console.log(event.target.value)
        await this.setState({
            color: event.target.value,
            styl: {
                background: event.target.value
            }
        });
        console.log(this.state.color)
    }

    render(){
        return(
            <div>
                <select className='dropdown-field' value={this.state.color} onChange={this.onChangeHandler} style={this.state.styl}>
                    <option value='red'>Red</option>
                    <option value='green'>Green</option>
                    <option value='blue'>Blue</option>
                    <option value='yellow'>Yellow</option>
                </select>
            </div>
        );
    }
}

export default DropDown;