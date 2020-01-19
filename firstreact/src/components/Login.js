import React, {Component} from 'react'
import './Login.css'

class Login extends Component{

    constructor(){
        super();
        this.state = {
            loggedInUsers: [],
            username: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this)
        this.changePasswordHandler = this.changePasswordHandler.bind(this)
    }
    changeUsernameHandler(event){
        this.setState({
            username: event.target.value
        })

    }

    changePasswordHandler(event){
        this.setState({
            password: event.target.value
        })
    }

    render(){
        return(
            <div className="login">
                <div className="lgn_left">
                    <h3>Logged In users</h3>
                    <ul className="example">
                        {

                        }
                    </ul>
                </div>

                <div className="lgn_right">
                    <input className="field" type="text" placeholder="Username" onChange={this.changeUsernameHandler} value={this.state.username} />
                    <input className="field" type="password" placeholder="Password" onChange={this.changePasswordHandler} value={this.state.password} />
                    <input className="btn" type="submit" value="LOGIN" />
                </div>

            </div>
        );
    }
}

export default Login;