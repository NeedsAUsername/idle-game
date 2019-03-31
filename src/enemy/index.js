import React from 'react'; 
import './style.css';

class Enemy extends React.Component {

  getPercentageHealth = () => {
    return this.props.enemy.currentHp/this.props.enemy.totalHp * 100
  } 

  getHealthBarStyle = () => {
    return {
      height: '100%',
      width: this.getPercentageHealth() + '%', 
      backgroundColor: 'black'
    }
  }

  render () { 
    let enemy = this.props.enemy;  
    let healthBarStyle = this.getHealthBarStyle();
    return (
      <div className="enemy">
        <ul>Enemy: {enemy.name}</ul> 
        <div class="health-bar-container">
          <div class="health-bar" style={healthBarStyle}></div>
        </div>
        <li className="stat">Enemy hp: {enemy.currentHp} / {enemy.totalHp} </li>
        <li className="stat">Enemy autoAttack: {enemy.autoAttack}</li> 
      </div>
    )
  }
}

export default Enemy;
