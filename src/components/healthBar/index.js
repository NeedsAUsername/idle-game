import React from 'react';
import './style.css';
 

function healthBar (props) { 
  let style = {
    height: '100%',
    backgroundColor: props.color, 
    width: props.percentageHealth
  };
  return (
    <div className="health-bar-container">
      <div className="health-bar" style={style}>
      </div> 
    </div>
  )
}

export default healthBar; 
