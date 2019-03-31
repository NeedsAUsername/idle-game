import React from 'react';
import {connect} from 'react-redux';  
import './style.css';
import Hero from '../hero'; 
import Enemy from '../enemy'; 
import MessageBox from '../messageBox';
import {attack} from '../actions/hero/attack';


class Game extends React.Component { 

  render () { 
    return (
      <main className="game">
        <Hero hero={this.props.hero} attack={this.props.attack} /> 
        <Enemy enemy={this.props.enemy} />  
        <MessageBox messages={this.props.messages} />
      </main>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    hero: store.hero, 
    enemy: store.enemy, 
    messages: store.messages
  }
}

export default connect(mapStateToProps, {attack})(Game);
