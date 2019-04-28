import attacks from '../database/attacks.js';

function heroReducer(state = {
		name: 'Theif 1st Class: Rogue', 
		totalHp: 100,
		currentHp: 100,  
		totalMp: 100, 
		currentMp: 100, 
		level: 1,  
		exp: 0,
		expToLevelUp: 10,
		mesos: 0, 
		attack: 3, 
		minRange: 1, 
		maxRange: 5,
		autoAttack: 0, 
		attackSpeed: 1000, 
		currentAnimation: 'standing', 
		currentAttack: '',
		attacks: attacks
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
			let newExp = state.exp + enemy.exp; 
			return {
				...state, 
				exp: newExp,
				mesos: state.mesos + enemy.mesos
			}

		case 'DEFEATS_ENEMY_AND_LEVELS_UP': 
			return {
				...state, 
				level: state.level + 1, 
				hp: state.hp + 10, 
				mp: state.map + 5, 
				attack: state.attack + 1, 
				minRange: state.minRange + 1, 
				maxRange: state.maxRange + 1,
				exp: 0,
				expToLevelUp: state.expToLevelUp + 10
			}
		
		default: 
			return state
	}
}


export default(heroReducer)