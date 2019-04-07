function messagesReducer(state = [
  'Welcome to my rpg idle game'
], action) {
console.log(action) 

  switch(action.type) {
    case 'DEFEATS_ENEMY':  
      let enemy = action.payload;
      state.push(`you defeated ${enemy.name}, and gained ${enemy.exp} exp and ${enemy.mesos} mesos`)
      return state
    
    case 'LEVEL_UP': 
      state.push('You have leveled up!') 
      return state
    
    default: 
      return state
  }
}


export default(messagesReducer)