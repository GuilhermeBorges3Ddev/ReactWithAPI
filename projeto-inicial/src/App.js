import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Eva from './Eva';
//This component contains a name and an email of two users, distructured by map()
import List from './List';
//Components to do a route-map
import { Link, Route} from 'react-router-dom'
import routesConfig from './routesConfig';

class App extends Component {

  //Constructor was build to manipulate the state of the father component
  constructor(props){
    super(props)
    this.state = {
      name: "Eva.js component",
      email: "eva.official@gmail.com"
    }
    //These two methods give a state-change into two buttons component
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    //This other method are used to change the 'value' of each form section 
    this.changeInput = this.changeInput.bind(this)
  }

  //Modifying the state on event 'onClick()'
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

//Email and name change dinamically when an digit action is active
  changeInput(event){
    let target = event.target
    let index = target.name
    this.setState({
      [index]:target.value
    })
  }

  render() {
    return (
    <div className="Routering">
      <div className="App">

      {/* Configurating the route*/}
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Project React.JS mounted using NodeJS!
          </p>
          <Eva></Eva>
          <div>
            <form>
              <label>Name:
                <input 
                  type="text" 
                  name="name"
                  value={this.state.name}
                  onChange={this.changeInput}
                ></input>
              </label>
              <label>Email:
                <input 
                  type="email" 
                  name="email"
                  value={this.state.email}
                  onChange={this.changeInput}
                ></input>  
              </label>
            </form>
            {this.state.name} - {this.state.email}
          </div>
          <div>
            <button onClick={this.changeState}>Change state</button>
            <button onClick={this.resetState}>Reset state</button>
          </div>
          <div>
            <List />
          </div>
        </header>
       
      </div>
      {routesConfig.map((value, key) => {
        return <Route
          key={key}
          path={value.path}
          component={value.component}
          exact={value.exact} 
        ></Route>
      })}
    </div>  
    );
  }
}

export default App;
