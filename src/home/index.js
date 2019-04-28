import React from 'react';

class Home extends React.Component {

  render () {
    return (
      <div>
        <h1 className="title">Welcome to Idle Maple</h1>  
        <a href='/game' className="link">Play</a>
        <p>Check out the Github source code <a href="https://github.com/NeedsAUsername/idle-game">here</a></p> 
        <p>Characters from Maplestory</p> 
        <ul>Dev version 4.00 4/28/2019</ul>
          <li>Adds multiple attacks for the hero, which required structural changes to the way damage and attack speed is calculated, 
            and how the damage numbers are output</li> 
          <li>Uses flex-end property to keep all monsters rooted to the same bottom starting position</li>
        <ul>Dev version 3.10 4/21/2019</ul> 
          <li>Adds meso loot animation depending on amount dropped</li> 
          <li>Refactors health-bar into its own component, and stores small components in a components folder</li>
        <ul>Dev version 3.00 4/14/2019</ul> 
          <li>Adds multiple monsters, with a list to choose which monster to battle</li> 
          <li>Uses state for attack speed system instead of button disable</li>
          <li>Performance boost by deleting damage number elements on monster respawn and monster change</li>
          <li>Uses CSS grid for desktop and mobile layout</li>
        <ul>Dev version 2.20 4/7/2019</ul> 
          <li>Adds CSS animations for character, attacking, and damage numbers</li> 
          <li>Styles the layout for desktop and mobile view</li> 
          <li>Adjusts damage and exp system</li>
        <ul>Dev version 2.10 4/2/2019</ul>  
          <li>Adds CSS animations for enemy sprite walking/taking damage/dying</li> 
          <li>Designs state management system for animations and hero attack speed</li>
        <ul>Dev version 2.00 3/31/2019</ul> 
          <li>Creates basic gameplay functionality</li>
          <li>Hero is able to attack and defeat the enemy, gain exp/gold, and level up</li>
        <ul>Dev version 1.00 3/30/2019</ul> 
          <li>Sets up React/Redux template</li> 
          <li>Creates game, user, and enemy components</li>
      </div>
    )
  }
}

export default Home;