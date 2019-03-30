import React from 'react';

class Enemy extends React.Component {

  render () { 
    let enemy = this.props.enemy; 
    return (
      <div class="enemy">
        Enemy hp: {enemy.hp} 
        Enemy autoAttack: {enemy.autoAttack} 
      </div>
    )
  }
}

export default Enemy;
