import React, { Component } from 'react';
import './App.css';
import Eva from './Eva';

class App extends Component {

  //Constructor was build to manipulate the state of the father component
  constructor(){
    super(props)
    this.state = {
      name: "Eva.js component"
    }
    this.changeState = this.changeState.bind(this)
  }

  //Modifying the state
  changeState(){
    this.setState({
      name: "Eva.js is the main component, state CHANGED"
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.name}
        </div>
        <div>
          <button onClick={this.changeState}>Mudar estado</button>
        </div>
        {/*
        ----> This comment can be removed to use simple props without state 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Project React.JS mounted using NodeJS!
          </p>
          <Eva></Eva>
        </header>
        */}
      </div>
    );
  }
}

export default App;
