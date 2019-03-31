import React from 'react';

class Hero extends React.Component {

  render () { 
    let hero = this.props.hero; 
    return (
      <div className="hero">  
        <ul>Hero: {hero.name} </ul>
        <li className="stat">hero level: {hero.level}</li>
        <li className="stat">hero exp: {hero.exp} / {hero.expToLevel}</li>
        <li className="stat">hero hp: {hero.currentHp} / {hero.totalHp} </li>
        <li className="stat">hero mp: {hero.currentMp} / {hero.totalMp} </li>
        <li className="stat">hero attack: {hero.attack}</li>
        <li className="stat">hero auto-attack: {hero.autoAttack}</li>
      </div>
    )
  }
}

export default Hero;
