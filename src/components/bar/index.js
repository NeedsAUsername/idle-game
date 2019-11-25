import React from 'react';
import './style.css';
 

function bar (props) { 
  let style = {
    height: '100%',
    backgroundColor: props.color, 
    width: props.percentageFull
  };
  return (
    <div className="bar-container">
      <div className="bar" style={style}>
      </div> 
    </div>
  )
}

export default bar; 
