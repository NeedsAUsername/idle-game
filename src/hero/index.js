import React from 'react'; 
import './style.css';
import Bar from '../components/bar';

class Hero extends React.Component { 
  componentDidMount() {
    this.interval = setInterval(this.recoverMp, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  recoverMp = () => {
    let hero = this.props.hero;
    if (hero.totalMp > hero.currentMp) {
      this.props.recoverMp(hero.mpRecovery);
    }
  }
  getPercentageHp= () => {
    return this.props.hero.currentHp/this.props.hero.totalHp * 100
  }
  getPercentageMp = () => {
    return this.props.hero.currentMp/this.props.hero.totalMp * 100
  }
  getPercentageExp = () => {
    return this.props.hero.exp/this.props.hero.expToLevelUp * 100
  }

  render () { 
    let hero = this.props.hero; 
    return (
      <div className="hero">  
        <h2>Maple Idle</h2> 
        <div className="hero-sprite-container">
          <div className={hero.currentAnimation}></div>
          <div className={!!hero.currentAttack ? hero.currentAttack.className : null}></div>
        </div>
        <ul className="resource-list">
        <li className="stat">Hp: {hero.currentHp} / {hero.totalHp} </li>
        <Bar color="orange" percentageFull={this.getPercentageHp() + '%'} />
        <li className="stat">Mp: {hero.currentMp} / {hero.totalMp} </li>
        <Bar color="blue" percentageFull={this.getPercentageMp() + '%'}/>
        <li className="stat">Exp: {hero.exp} / {hero.expToLevelUp}</li> 
        <Bar color="grey" percentageFull={this.getPercentageExp() + '%'}/>
        </ul>

        <ul className="stat-list"><h3>Character Stats</h3>
          <li className="stat">Level: {hero.level}</li>
          <li className="stat">Mesos: {hero.mesos}</li>
          <li className="stat">Range: {hero.minRange} ~ {hero.maxRange}</li>
          {/* <li className="stat">Auto-attack: {hero.autoAttack}</li>  */}
          <li className="stat">Attack Speed: {hero.attackSpeed / 1000} second</li>
        </ul>
      </div>
    )
  }
}

export default Hero;
