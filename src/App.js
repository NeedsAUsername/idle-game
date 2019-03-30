import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div className="app">
          <h1>Idle Game</h1>
        </div>
      </Router>
    );
  }
}


export default connect()(App);
