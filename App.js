import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from './app2';
import App3 from './app3';
import App4 from './app4';


class App extends Component {
  render() {
    return (
      <div className="App">
        <App2/>
        <App3/>
        <App4/>
       
      </div>
    );
  }
}

export default App;
