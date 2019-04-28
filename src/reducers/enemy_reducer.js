import enemies from '../database/enemies'; 

function heroReducer(state = enemies.snail, action) {
console.log(action) 

  switch(action.type) { 
    case 'ENEMY_TAKES_DAMAGE':  
      let {attackArray, totalDamage} = action.payload;
      let hpAfterDamage = state.currentHp - totalDamage; 
      if (hpAfterDamage < 0) {
        hpAfterDamage = 0;
      } 
      return {
        ...state, 
        currentHp: hpAfterDamage, 
        currentAnimation: state.animations.hurt, 
        damagesTaken: [...state.damagesTaken, ...attackArray]
      }

    case 'DEFEATS_ENEMY': 
      return {
        ...state, 
        currentHp: 0, 
        currentAnimation: state.animations.dying
      }
    case 'DEFEATS_ENEMY_AND_LEVELS_UP': {
      return {
        ...state, 
        currentHp: 0, 
        currentAnimation: state.animations.dying
      }
    } 

    case 'RESPAWN_ENEMY': {
      return {
        ...state,  
        currentHp: state.totalHp, 
        currentAnimation: state.animations.walking, 
        damagesTaken: []
      }
    }

    case 'CHANGE_ENEMY': {
      let enemyName = action.payload;  
      return enemies[enemyName];
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