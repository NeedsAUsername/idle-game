// attack: {
//  damage: 10, 
//  poision: {
//    tickDamage: 1 
//    ticks: 5
// }, etc.}

export function attack(attack) {
  return (dispatch) => {
    dispatch({
      type: 'HERO_ATTACKS', 
      payload: attack
    }) 
    setTimeout(function() {
      dispatch({
        type: 'STOP_ENEMY_ANIMATION',
      }) 
      dispatch({
        type: 'STOP_HERO_ANIMATION'
      })
    }, 500)
  }
} 