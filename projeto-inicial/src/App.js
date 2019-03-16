import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eva from './Eva';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Project React.JS mounted using NodeJS!
          </p>
          <Eva></Eva>
        </header>
      </div>
    );
  }
}

export default App;
