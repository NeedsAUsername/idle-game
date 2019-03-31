function heroReducer(state = {
  name: 'Weak Slime',
  totalHp: 100,
  currentHp: 100,  
  autoAttack: 1, 
  exp: 10, 
  gold: 5
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
        currentHp: hpAfterDamage
      }

    case 'DEFEATS_ENEMY': 
      return {
        ...state, 
        currentHp: state.totalHp
      }
    
    default: 
      return state
  }
}


export default(heroReducer)