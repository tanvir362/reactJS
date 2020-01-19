import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

import NavigationDrawer from './components/NavigationDrawer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <Greet name='Bruce' heroname='Batman'>This is props children</Greet>
        <Greet name='Clark' heroname='Superman'>
          <button>Action</button>
        </Greet>
        <Welcome name='Bruce' heroname='Batman'>This is children</Welcome>
        <Welcome name='Clark' heroname='Supperman'/>
        <Hello />
        */}
        {/*<Message />*/}
        {/* <Counter /> */}
        <NavigationDrawer />

      </div>
    );
  }
}

export default App;
