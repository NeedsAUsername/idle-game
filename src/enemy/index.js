import React from 'react';

class Enemy extends React.Component {

  render () { 
    let enemy = this.props.enemy; 
    return (
      <div className="enemy">
        <ul>Enemy: {enemy.name}</ul>
        <li className="stat">Enemy hp: {enemy.hp}</li>
        <li className="stat">Enemy autoAttack: {enemy.autoAttack}</li>
      </div>
    )
  }
}

export default Enemy;
