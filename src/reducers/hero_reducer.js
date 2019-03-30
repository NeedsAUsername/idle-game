function heroReducer(state ={
    hp: 100, 
    mp: 100, 
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