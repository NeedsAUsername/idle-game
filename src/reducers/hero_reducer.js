function heroReducer(state ={
		name: 'Aspiring Hero', 
    hp: 100, 
		mp: 100,
		level: 0,  
		exp: 0,
		expToLevel: 50,
		gold: 0, 
    attack: 10, 
		autoAttack: 0
}, action) {
	console.log(action) 

	switch(action.type) {
		
		default: 
			return state
	}
}


export default(heroReducer)