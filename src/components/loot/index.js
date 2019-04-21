import React from 'react'; 
import './style.css';

function loot(props) {
  return (
    <div className={"loot " + props.loot}></div>
  )
}

export default loot;