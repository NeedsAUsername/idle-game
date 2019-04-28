import React from 'react'; 
import './style.css'; 

class Number extends React.Component {  
  numbersStyle = {
    top: 200 - this.props.position * 40
  }

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
      <div style={this.numbersStyle} className="damage-numbers">
        {this.renderNumbers()} 
      </div>
    )
  }
}

export default Number;