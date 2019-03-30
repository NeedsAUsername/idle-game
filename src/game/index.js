import React from 'react';
import {connect} from 'react-redux'; 
import Hero from '../hero'; 
import Enemy from '../enemy';


class Game extends React.Component {

  render () { 
    return (
      <div>
        <Hero hero={this.props.hero} /> 
        <Enemy enemy={this.props.enemy} /> 
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    hero: store.hero, 
    enemy: store.enemy
  }
}

export default connect(mapStateToProps)(Game);
