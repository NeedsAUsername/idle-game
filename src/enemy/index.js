import React from 'react'; 
import './style.css'; 
import Number from '../components/number'; 
import Bar from '../components/bar';
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
    this.props.enemy.damagesTaken.map((damageArray) => {
      return damageArray.map((damage, index) => <Number position={index} key={index} number={damage}/>)
    })
  ) 

  calculateLootDrop = () => { 
    let mesosDropped = this.props.enemy.mesos; 
    if (mesosDropped < 50) {
      return 'coin' 
    } else if (mesosDropped < 100) {
      return 'gold-coin'
    } else if (mesosDropped < 1000) {
      return 'meso-bills'
    } else {
      return 'meso-bag'
    }
  }
  
  render () { 
    let enemy = this.props.enemy;
    return (
      <div className="enemy">
        {this.displayDamageNumbers()}
        <div className="enemy-sprite-container">
          <div className={"enemy-sprite " + enemy.currentAnimation}></div> 
          {enemy.currentHp === 0 ? <Loot loot={this.calculateLootDrop()} /> : null}
        </div>
        <Bar color={this.getHealthBarColor()} percentageFull={this.getPercentageHealth() + '%'}/>

        <h3>{enemy.name}</h3>
        <li className="stat">Lvl: {enemy.level}</li>
        <li className="stat">Hp: {enemy.currentHp} / {enemy.totalHp} </li>
      </div>
    )
  }
}

export default Enemy;
