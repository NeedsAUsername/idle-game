function heroReducer(state = {
  name: 'Shroom', 
  animations: {
    walking: 'shroom-walking', 
    hurt: 'shroom-hurt', 
    dying: 'shroom-dying'
  }, 
  currentAnimation: 'shroom-walking',
  lastDamageTaken: 0, 
  totalHp: 20,
  currentHp: 20,  
  autoAttack: 1, 
  exp: 10, 
  mesos: 5
}, action) {
console.log(action) 

  switch(action.type) { 
    case 'ENEMY_TAKES_DAMAGE':  
      let attack = action.payload;
      let hpAfterDamage = state.currentHp - attack.damage;
      if (hpAfterDamage < 0) {
        hpAfterDamage = 0;
      }
      return {
        ...state, 
        currentHp: hpAfterDamage, 
        currentAnimation: state.animations.hurt, 
        
      }

    case 'DEFEATS_ENEMY': 
      return {
        ...state, 
        currentHp: state.totalHp, 
        currentAnimation: state.animations.dying
      }

    case 'STOP_ENEMY_ANIMATION': 
      return {
        ...state, 
        currentAnimation: state.animations.walking
      }
    
    default: 
      return state
  }
}


export default(heroReducer)