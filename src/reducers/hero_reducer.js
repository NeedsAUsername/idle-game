function heroReducer(state = {
		name: 'Aspiring Hero', 
		totalHp: 100,
		currentHp: 100,  
		totalMp: 100, 
		currentMp: 100, 
		level: 1,  
		exp: 0,
		expToLevelUp: 50,
		gold: 0, 
		attack: 10, 
		autoAttack: 0, 
		attackSpeed: 1000, 
		currentAnimation: 'standing'
}, action) {
	console.log(action) 

	switch(action.type) {
		case 'HERO_ATTACKS': 
			return {
				...state, 
				currentAnimation: 'attacking'
			}

		case 'STOP_HERO_ANIMATION': 
			return {
				...state, 
				currentAnimation: 'standing'
			}

		case 'DEFEATS_ENEMY':  
			let enemy = action.payload;
			return {
				...state, 
				exp: state.exp + enemy.exp, 
				gold: state.gold + enemy.gold
			}

		case 'LEVEL_UP': 
			let excessExp = action.payload;
			return {
				...state, 
				level: state.level + 1, 
				exp: excessExp, 
				expToLevelUp: state.expToLevelUp + 10
			}
		
		default: 
			return state
	}
}


export default(heroReducer)