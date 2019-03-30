import React from 'react';

class Enemy extends React.Component {

  render () { 
    let enemy = this.props.enemy; 
    return (
      <div class="enemy">
        Enemy hp: {enemy.hp} 
        Enemy mp: {enemy.mp} 
      </div>
    )
  }
}

export default connect (Enemy);
