import React from 'react'; 
import './style.css';

class Hero extends React.Component { 
  state = {
    readyToAttack: true
  }
  attackEnemy = (event, attack) => {  
    event.preventDefault()
    if (this.state.readyToAttack) {
      this.props.attack({
        ...attack,
        damageArray: this.calculateDamageArray(attack)
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
  
  calculateDamageArray = (attack) => {
    let hero = this.props.hero;
    let damageArray = []; 
    for (let i = 0; i < attack.hits; i++) {
      let baseDamage = Math.floor(Math.random() * (hero.maxRange - hero.minRange + 1)) + hero.minRange; 
      damageArray.push(Math.floor(baseDamage * attack.damageMultiplier))
    }
    return damageArray;
  }

  renderAttackList = () => {
    let hero = this.props.hero; 
    let heroAttackKeys = Object.keys(hero.attacks)
    return heroAttackKeys.map(attackKey => {
      let attack = hero.attacks[attackKey]; 
      return <div key={attackKey} ><li className="button attack" onClick={(event) => this.attackEnemy(event, attack)} style={this.styleAttackButton()}>{attack.name}</li></div>
    })
  }
  render () { 
    let hero = this.props.hero; 
    return (
      <div className="hero">  
        <h2>{hero.name} </h2> 
        <div className="hero-sprite-container">
          <div className={hero.currentAnimation}></div>
          <div className={!!hero.currentAttack ? hero.currentAttack.className : null}></div>
        </div>
        <ul className="attacks-list"><h3>Attacks</h3> 
          {this.renderAttackList()}
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
