function heroReducer(state ={
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
      return {
        ...state, 
        currentHp: state.currentHp - payload
      }

    
    default: 
      return state
  }
}


export default(heroReducer)