import React from 'react';
import {connect} from 'react-redux';  
import './style.css';
import Hero from '../hero'; 
import Enemy from '../enemy';  
import enemies from '../database/enemies';
import Skills from '../skills';
import Equips from '../equips';
import MessageBox from '../messageBox'; 
import {recoverMp} from '../actions/hero/recoverMp';
import {attack} from '../actions/hero/attack';
import {levelUp} from '../actions/hero/levelUp'; 
import {changeEnemy} from '../actions/enemy/change';
import {changeStar} from '../actions/hero/changeStar';
import {sendMessage} from '../actions/messageBox/sendMessage';


class Game extends React.Component { 
  state = {
    menus: ['attacks', 'equips'],
    currentMenu: 'attacks'
  }

  calculateAttack = (hero, attack, err) => {
    if (err) {
      return this.props.sendMessage(err);
    }
    let enemy = this.props.enemy; 
    if (enemy.currentHp > 0) {
      this.props.attack(attack, enemy, hero);
    }
  }

  renderEnemiesList = () => (
    Object.keys(enemies).map(enemyKey => 
      <button key={enemyKey} onClick={() => this.props.changeEnemy(enemyKey)}>{enemies[enemyKey].name}</button>
    )
  )

  renderMenu = () => {
    if (this.state.currentMenu === 'attacks') {
      return <Skills hero={this.props.hero} enemyCurrentHp={this.props.enemy.currentHp} calculateAttack={this.calculateAttack} />
    } else if (this.state.currentMenu === 'equips') {
      return <Equips currentStar={this.props.hero.attacks.basicAttack.className} changeStar={this.props.changeStar} />
    }
  }

  toggleMenu = (menu) => {
    this.setState({
      ...this.state, 
      currentMenu: menu
    })
  }

  renderMenuToggles = () => {
    return this.state.menus.map(menu => <button onClick={(event) => this.toggleMenu(menu)}>{menu}</button>)
  }
  render () { 
    return (
      <main className="game">
        <Hero hero={this.props.hero} recoverMp={this.props.recoverMp} /> 
        <Enemy enemy={this.props.enemy} changeEnemy={this.props.changeEnemy} />  
        <div className="enemies-list"> 
          <h4>Choose Monster</h4>
          {this.renderEnemiesList()}
        </div>
        <div className="menu">
          {this.renderMenuToggles()}
          {this.renderMenu()}
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

export default connect(mapStateToProps, {recoverMp, attack, levelUp, changeEnemy, changeStar, sendMessage})(Game);
