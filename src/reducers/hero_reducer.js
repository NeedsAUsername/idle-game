function heroReducer(state = {
		name: 'Aspiring Hero', 
		totalHp: 100,
		currentHp: 100,  
		totalMp: 100, 
		currentMp: 100, 
		level: 0,  
		exp: 0,
		expToLevel: 50,
		gold: 0, 
    attack: 10, 
		autoAttack: 0
}, action) {
	console.log(action) 

	switch(action.type) {

		case 'DEFEATS_ENEMY':  
			let enemy = action.payload
			return {
				...state, 
				exp: state.exp + enemy.exp, 
				gold: state.gold + enemy.gold
			}
		
		default: 
			return state
	}
}


export default(heroReducer)