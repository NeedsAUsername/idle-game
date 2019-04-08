function heroReducer(state = {
  name: 'Shroom', 
  animations: {
    walking: 'shroom-walking', 
    hurt: 'shroom-hurt', 
    dying: 'shroom-dying'
  }, 
  currentAnimation: 'shroom-walking',
  damagesTaken: [], 
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
        damagesTaken: [...state.damagesTaken, attack.damage]
      }

    case 'DEFEATS_ENEMY': 
      return {
        ...state, 
        currentHp: state.totalHp, 
        currentAnimation: state.animations.dying
      }
    case 'DEFEATS_ENEMY_AND_LEVELS_UP': {
      return {
        ...state, 
        currentHp: state.totalHp,  // change to 0 after making a spawn new enemy action
        currentAnimation: state.animations.dying
      }
    } 

    case 'STOP_ENEMY_ANIMATION': 
      if (state.damagesTaken.length > 100) {
        state.damagesTaken = []; // keeps the array from becoming too big
      }
      return {
        ...state, 
        currentAnimation: state.animations.walking
      }
    
    default: 
      return state
  }
}


export default(heroReducer)