import React from 'react';

class Hero extends React.Component {

  render () { 
    let hero = this.props.hero; 
    return (
      <div class="hero">
        hero hp: {hero.hp} 
        hero mp: {hero.mp}  
        hero attack: {hero.attack} 
        hero auto-attack: {hero.autoAttack}
      </div>
    )
  }
}

export default Hero;
