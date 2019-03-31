import React from 'react';
import {connect} from 'react-redux';  
import './style.css';
import Hero from '../hero'; 
import Enemy from '../enemy'; 
import MessageBox from '../messageBox';
import {attack} from '../actions/hero/attack';
import {defeatEnemy} from '../actions/hero/defeatEnemy';


class Game extends React.Component { 

  calculateAttack = (attack) => {
    if (this.props.enemy.currentHp <= attack.damage) {
      this.props.defeatEnemy(this.props.enemy)
    } else {
      this.props.attack(attack) 
    }
  }

  render () { 
    return (
      <main className="game">
        <Hero hero={this.props.hero} attack={this.calculateAttack} /> 
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

export default connect(mapStateToProps, {attack, defeatEnemy})(Game);
