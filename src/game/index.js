import React from 'react';
import {connect} from 'react-redux';

class Game extends React.Component {

  render () { 
    let hero = this.props.hero; 
    let enemy = this.props.enemy;
    return (
      <div>
        <h1 className="title">Idle Game</h1> 
        <div class="hero">
          hero hp: {hero.hp} 
          hero mp: {hero.mp} 
        </div> 
        <div class="enemy">
          enemy hp: {enemy.hp}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    hero: store.hero, 
    enemy: store.enemy
  }
}

export default connect(mapStateToProps)(Game);
