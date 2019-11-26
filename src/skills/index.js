
import React from 'react'; 
import './style.css';

class skills extends React.Component {  
  state = {
    readyToAttack: true
  }

  attackEnemy = (event, attack) => {  
    event.preventDefault()
    let hero = this.props.hero
    if (hero.currentMp < attack.mpCost) {
      let error = 'you do not have enough mp for ' + attack.name
      return this.props.calculateAttack(undefined, undefined, error)
    }
    if (this.state.readyToAttack) {
      this.props.calculateAttack(hero, {
        ...attack,
        damageArray: this.calculateDamageArray(attack)
      }) 
    } else {
      return false
    }
    this.setState({ readyToAttack: false })
    setTimeout(() => {
      this.setState({ readyToAttack: true })
    }, this.props.hero.attackSpeed + attack.animationTime) 
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
      damageArray.push(Math.ceil(baseDamage * attack.damageMultiplier))
    }
    return damageArray;
  }

  renderAttackList = () => {
    let hero = this.props.hero
    let heroAttackKeys = Object.keys(hero.attacks)
    return heroAttackKeys.map(attackKey => {
      let attack = hero.attacks[attackKey]; 
      return <div key={attackKey} ><li className="button attack" onClick={(event) => this.attackEnemy(event, attack)}
       style={this.styleAttackButton()}>{`${attack.name} (${attack.mpCost} mp)`}</li></div>
    })
  }

  render () { 
    return (
      <ul className="attacks-list"><h3>Attacks</h3> 
        {this.renderAttackList()}
      </ul>
    )
  }
}

export default skills;