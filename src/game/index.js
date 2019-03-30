import React from 'react';
import {connect} from 'react-redux';

class Game extends React.Component {

  render () {
    return (
      <div>
        <h1 className="title">Idle Game</h1>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    hero: {}, 
    enemy: {}
  }
}

export default connect(mapStateToProps)(Game);
