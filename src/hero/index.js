import React from 'react';

class Hero extends React.Component {

  render () { 
    let hero = this.props.hero; 
    return (
      <div class="hero">
        hero hp: {hero.hp} 
        hero mp: {hero.mp} 
      </div>
    )
  }
}

export default connect (Hero);
