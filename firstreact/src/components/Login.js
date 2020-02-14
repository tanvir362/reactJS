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
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
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

    onClickHandler(){
        let usrnm = this.state.username;
        let pass = this.state.password;
        if(/^[A-Za-z0-9]+$/.test(usrnm) && (7<pass.length && pass.length <21)){
            let users = this.state.loggedInUsers;
            users.push(usrnm);
            this.setState({
            loggedInUsers: users
            }, () => console.log(usrnm))
        }
        else{
            alert("Invalid username or password!")
        }
    }

    render(){
        return(
            <div className="login">
                <div className="lgn_left">
                    <h3>Logged In users</h3>
                    <ul className="example">
                        {
                            this.state.loggedInUsers.map(x => <li>{x}</li>)
                        }
                    </ul>
                </div>

                <div className="lgn_right">
                    <h3>User Login</h3>
                    <input className="field" type="text" placeholder="Username" onChange={this.changeUsernameHandler} value={this.state.username} />
                    <input className="field" type="password" placeholder="Password" onChange={this.changePasswordHandler} value={this.state.password} />
                    <button className="btn" onClick={this.onClickHandler}>LOGIN</button>
                </div>

            </div>
        );
    }
}

export default Login;