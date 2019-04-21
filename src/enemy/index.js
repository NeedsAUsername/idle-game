import React from 'react'; 
import './style.css'; 
import Number from '../components/number'; 
import HealthBar from '../components/healthBar';
import Loot from '../components/loot'; 

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

  displayDamageNumbers = () => (
    this.props.enemy.damagesTaken.map((damage, index) => 
      <Number key={index} number={damage}/>
    )
  ) 

  
  render () { 
    
    let enemy = this.props.enemy;  
    return (
      <div className="enemy">
        <div className="empty-space"></div> 
        {this.displayDamageNumbers()} 
        {enemy.currentHp === 0 ? <Loot loot="coin" /> : null}
        <div className={"enemy-sprite " + enemy.currentAnimation}></div> 

        <HealthBar color={this.getHealthBarColor()} percentageHealth={this.getPercentageHealth() + '%'}/>

        <h3>{enemy.name}</h3>
        <li className="stat">Lvl: {enemy.level}</li>
        <li className="stat">Hp: {enemy.currentHp} / {enemy.totalHp} </li>
      </div>
    )
  }
}

export default Enemy;
