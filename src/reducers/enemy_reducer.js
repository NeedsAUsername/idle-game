function heroReducer(state ={
  name: 'Weak Slime',
  hp: 100, 
  autoAttack: 1, 
  exp: 10, 
  gold: 5
}, action) {
console.log(action) 

  switch(action.type) {
    
    default: 
      return state
  }
}


export default(heroReducer)