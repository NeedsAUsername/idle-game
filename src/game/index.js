import React from 'react';
import {connect} from 'react-redux'; 
import Hero from '../hero'; 
import Enemy from '../enemy';
import {attack} from '../actions/hero/attack';


class Game extends React.Component { 

  render () { 
    return (
      <div className="game">
        <Hero hero={this.props.hero} attack={this.props.attack} /> 
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

export default connect(mapStateToProps, {attack})(Game);
