import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';  
import Game from './game';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div className="app">
        <Route exact path='/game' component={Game} />
        </div>
      </Router>
    );
  }
}


export default connect()(App);
