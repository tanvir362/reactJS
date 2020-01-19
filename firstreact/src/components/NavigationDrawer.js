import React,{Component} from 'react'
import SuggestCountry from './SuggestCountry'
import Login from './Login'
import './Navigation.css'

class NavigationDrawer extends Component{   

    constructor(){
        super();
        this.state = {
            sidenavcls: 'sidenavclose'
        }

        this.togglesidenav = this.togglesidenav.bind(this);
    }

    togglesidenav(){
        this.setState({
            sidenavcls: (this.state.sidenavcls === 'sidenavopen') ? 'sidenavclose' : 'sidenavopen'
        }, () => console.log(this.state.sidenavcls))
    }

    render(){
        return(
            <div>
                <div id="mySidenav" className={this.state.sidenavcls}>
                    <a href="javascript:void(0)" onClick={this.togglesidenav}><img src="http://app.getcultivate.io/api/media/org_logo/D2_6KFUlKI.png" height="60" width="60" /></a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <span className='menubr' onClick={this.togglesidenav}>&#9776;</span>
                <div className='content'>
                    
                    <Login />
                    {/* <SuggestCountry /> */}
                </div>
            </div>
        );
    }
}

export default NavigationDrawer;