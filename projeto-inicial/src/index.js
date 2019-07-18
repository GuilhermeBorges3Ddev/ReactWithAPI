import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import ReduxThunk from "redux-thunk"; //He manages the promise return from API

ReactDOM.render(
  <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

/*
Redux was added with some packages:
    npm i redux
    npm i react-redux
    npm i redux-thunk
    npm i redux-form
*/
