import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';  
import Home from './home';
import Game from './game';

class App extends Component {
  componentDidMount() {
    // todo: store data in local storage with a save button, and grab it on mount
  }

  render() {
    return (
      <Router>
        <div className="app"> 
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={Game} />
        </div>
      </Router>
    );
  }
}


export default connect()(App);
