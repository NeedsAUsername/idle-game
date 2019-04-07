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
        <div className={"enemy-sprite " + enemy.currentAnimation}></div> 
        <div className="damage-numbers">{enemy.lastDamageTaken}</div>
        <div className="health-bar-container">
          <div className="health-bar" style={healthBarStyle}></div> 
        </div>
        <h3>{enemy.name}</h3>
        <li className="stat">Hp: {enemy.currentHp} / {enemy.totalHp} </li>
      </div>
    )
  }
}

export default Enemy;
