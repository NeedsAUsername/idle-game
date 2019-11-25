function messagesReducer(state = [
  'Welcome to my rpg idle game'
], action) {

  if (state.length > 5) {
    state.shift()
  }
  switch(action.type) {
    case 'SEND_MESSAGE':
      return [...state, action.payload]

    case 'DEFEATS_ENEMY':   
      let enemy = action.payload;
      return [...state, `you defeated ${enemy.name}, and gained ${enemy.exp} exp and ${enemy.mesos} mesos`]
    
    case 'DEFEATS_ENEMY_AND_LEVELS_UP': 
      enemy = action.payload;
      return [...state, `you defeated ${enemy.name}, and gained ${enemy.exp} exp and ${enemy.mesos} mesos`, `you leveled up! 🎉`]
    
    default: 
      return state
  }
}


export default(messagesReducer)