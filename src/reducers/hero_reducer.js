import attacks from '../database/attacks.js';

function heroReducer(state = {
		name: 'Beginner Rogue', 
		totalHp: 100,
		currentHp: 100,
		totalMp: 100, 
    currentMp: 100,
    mpRecovery: 1,
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

	switch(action.type) {
    case 'RECOVER_MP': 
      let mpRecovered = action.payload
      if (state.currentMp + mpRecovered > state.totalMp) {
        mpRecovered = state.totalMp - state.currentMp
      }
      return {
        ...state,
        currentMp: state.currentMp + mpRecovered
      }

		case 'HERO_ATTACKS': 
			let attack = action.payload 
			return {
        ...state, 
        currentMp: state.currentMp - attack.mpCost, 
				currentAnimation: 'attacking', 
				currentAttack: attack
			}

		case 'STOP_HERO_ANIMATION': 
			return {
				...state, 
				currentAnimation: 'standing', 
				currentAttack: ''
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
      let newTotalHp = state.totalHp + 10
      let newTotalMp = state.totalMp + 5
			return {
				...state, 
				level: state.level + 1, 
				totalHp: newTotalHp, 
        totalMp: newTotalMp, 
        currentHp: newTotalHp,
        currentMp: newTotalMp,
				attack: state.attack + 1, 
				minRange: state.minRange + 1, 
				maxRange: state.maxRange + 1,
				exp: 0,
        expToLevelUp: state.expToLevelUp + 10,
        leveledUp: true,
      }

    case 'CHANGE_STAR':
      let newAttacks = {...state.attacks};
      newAttacks.basicAttack.className = 'star ' + action.payload;
      return {
        ...state,
        attacks: newAttacks
      }
      
    case 'STOP_LEVEL_UP_ANIMATION':
      return {
        ...state,
        leveledUp: false,
      }
		
		default: 
			return state
	}
}


export default(heroReducer)