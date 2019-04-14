import React from 'react';
import {connect} from 'react-redux';  
import './style.css';
import Hero from '../hero'; 
import Enemy from '../enemy';  
import enemies from '../database/enemies';
import MessageBox from '../messageBox'; 
import {attack} from '../actions/hero/attack';
import {levelUp} from '../actions/hero/levelUp'; 
import {changeEnemy} from '../actions/enemy/change';


class Game extends React.Component { 

  calculateAttack = (attack) => { 
    let hero = this.props.hero; 
    let enemy = this.props.enemy; 
    if (enemy.currentHp > 0) {
      this.props.attack(attack, enemy, hero);
    }
  }

  renderEnemiesList = () => (
    Object.keys(enemies).map(enemyName => 
      <button onClick={() => this.props.changeEnemy(enemyName)}>{enemyName}</button>
    )
  )

  render () { 
    return (
      <main className="game">
        <Hero hero={this.props.hero} attack={this.calculateAttack} /> 
        <Enemy enemy={this.props.enemy} changeEnemy={this.props.changeEnemy} />  
        <div className="enemies-list"> 
          <h4>Choose Monster</h4>
          {this.renderEnemiesList()}
        </div>
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

export default connect(mapStateToProps, {attack, levelUp, changeEnemy})(Game);
