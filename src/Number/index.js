import React from 'react'; 
import './style.css'; 

class Number extends React.Component {  
  renderNumbers = () => { 
    let numberString = String(this.props.number);
    let numbersArray = [];   
    for (let i = 0; i < numberString.length; i++) {
      numbersArray.push(numberString[i])
    }
    return numbersArray.map((unit, index) => (
      <div key={index} className={"damage-number damage-" + unit}></div>
    ))
  }
  render() {
    return (
      <div className="damage-numbers">
        {this.renderNumbers()}
      </div>
    )
  }
}

export default Number;