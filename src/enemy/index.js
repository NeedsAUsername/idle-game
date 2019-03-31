import React from 'react'; 
import './style.css';

class Enemy extends React.Component {

  getPercentageHealth = () => {
    return this.props.enemy.currentHp/this.props.enemy.totalHp * 100
  }  
  getHealthBarColor = () => { 
    if (this.getPercentageHealth() > 60) {
      return 'green'
    } else if (this.getPercentageHealth() > 25) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  getHealthBarStyle = () => {
    return {
      height: '100%',
      width: this.getPercentageHealth() + '%', 
      backgroundColor: this.getHealthBarColor()
    }
  } 

  render () { 
    let enemy = this.props.enemy;  
    let healthBarStyle = this.getHealthBarStyle();
    return (
      <div className="enemy">
        <ul>Enemy: {enemy.name}</ul> 
        <div className="health-bar-container">
          <div className="health-bar" style={healthBarStyle}></div>
        </div>
        <li className="stat">Enemy hp: {enemy.currentHp} / {enemy.totalHp} </li>
        <li className="stat">Enemy autoAttack: {enemy.autoAttack}</li> 
      </div>
    )
  }
}

export default Enemy;
