import React from 'react'; 
import './style.css';

class Hero extends React.Component { 
  state = {
    readyToAttack: true
  }
  attackEnemy = (event) => {  
    event.preventDefault()
    if (this.state.readyToAttack) {
      this.props.attack({
        damage: this.calculateDamage()
      }) 
    } else {
      return false
    }
    this.setState({ readyToAttack: false })
    setTimeout(() => {
      this.setState({ readyToAttack: true })
    }, this.props.hero.attackSpeed) 
  } 

  styleAttackButton = () => {
    if (this.state.readyToAttack && this.props.enemyCurrentHp > 0) {
      return {opacity: 1}
    } else {
      return {opacity: .25}
    }
  }
  
  calculateDamage = () => {
    let hero = this.props.hero;
    return Math.floor(Math.random() * (hero.maxRange - hero.minRange + 1)) + hero.minRange;
  }
  render () { 
    let hero = this.props.hero; 
    return (
      <div className="hero">  
        <h2>{hero.name} </h2> 
        <div className="hero-sprite-container">
          <div className={hero.currentAnimation}></div>
          <div className={hero.currentAnimation === 'attacking' ? 'star subi' : null}></div>
        </div>
        <ul className="attacks-list"><h3>Attacks</h3> 
          <li className="button attack" onClick={this.attackEnemy} style={this.styleAttackButton()}>Basic Attack</li>
        </ul>

        <ul className="stat-list"><h3>Character Stats</h3>
          <li className="stat">Level: {hero.level}</li>
          <li className="stat">Exp: {hero.exp} / {hero.expToLevelUp}</li> 
          <li className="stat">Mesos: {hero.mesos}</li>
          <li className="stat">Hp: {hero.currentHp} / {hero.totalHp} </li>
          <li className="stat">Mp: {hero.currentMp} / {hero.totalMp} </li>
          <li className="stat">Range: {hero.minRange} ~ {hero.maxRange}</li>
          <li className="stat">Auto-attack: {hero.autoAttack}</li> 
          <li className="stat">Attack Speed: {hero.attackSpeed / 1000} second</li>
        </ul>
      </div>
    )
  }
}

export default Hero;
