
import React from 'react'; 
import './style.css';
import equips from '../database/equips';

class Equips extends React.Component {  
  changeStar = (event, star) => {
    event.preventDefault();
    this.props.changeStar(star);
  }
  renderStarsList = () => {
    const starKeys = Object.keys(equips.stars);
    return starKeys.map(key => {
      let star = equips.stars[key];
      let starDetails = `${star.name}, Cost: ${star.cost} mesos`
      if (this.props.currentStar === star.className) {
        starDetails += ' (Current)'
      }
      return <div key={key} ><li className="button" onClick={(event) => this.changeStar(event, star)}>{starDetails}</li></div>
    })
  }

  changeStar = (event, star) => {
    event.preventDefault()
    this.props.changeStar(star)
  }
  render () { 
    return (
      <ul className="equipment"><h3>Equipment</h3>
        {this.renderStarsList()}
      </ul>
    )
  }
}

export default Equips;