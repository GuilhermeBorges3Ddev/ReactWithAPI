import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Eva from './Eva';

class App extends Component {

  //Constructor was build to manipulate the state of the father component
  constructor(props){
    super(props)
    this.state = {
      name: "Eva.js component"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  //Modifying the state
  changeState(){
    this.setState({
      name: "Eva.js is the main component, state CHANGED"
    })
  }

  resetState(){
    this.setState({
      name: "Eva.js component"
    })
  }

  render() {
    return (
      <div className="App">
       
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Project React.JS mounted using NodeJS!
          </p>
          <Eva></Eva>
          <div>
            {this.state.name}
          </div>
          <div>
            <button onClick={this.changeState}>Change state</button>
            <button onClick={this.resetState}>Reset state</button>
          </div>
        </header>
       
      </div>
    );
  }
}

export default App;
