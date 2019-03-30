import React from 'react';

class Home extends React.Component {

  render () {
    return (
      <div>
        <h1 className="title">Welcome to Idle Game</h1> 
        <ul>Dev version 1.00 3/30/2019</ul> 
          <li>Sets up React/Redux template</li> 
          <li>Creates game, user, and enemy components</li>
      </div>
    )
  }
}

export default Home;