import React from 'react';
import {connect} from 'react-redux';  
import './style.css';
import Hero from '../hero'; 
import Enemy from '../enemy'; 
import MessageBox from '../messageBox';
import {attack} from '../actions/hero/attack';
import {levelUp} from '../actions/hero/levelUp';


class Game extends React.Component { 

  calculateAttack = (attack) => { 
    let hero = this.props.hero; 
    let enemy = this.props.enemy;
    this.props.attack(attack, enemy)
    if ((hero.expToLevelUp - hero.exp) <= enemy.exp) {
      this.props.levelUp(hero.exp + enemy.exp - hero.expToLevelUp);
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

export default connect(mapStateToProps, {attack, levelUp})(Game);
