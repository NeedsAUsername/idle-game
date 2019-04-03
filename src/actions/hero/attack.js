// attack: {
//  damage: 10, 
//  poision: {
//    tickDamage: 1 
//    ticks: 5
// }, etc.}

export function attack(attack) {
  return (dispatch) => {
    dispatch({
      type: 'ENEMY_TAKES_DAMAGE', 
      payload: attack
    }) 
    setTimeout(function() {
      dispatch({
        type: 'STOP_ENEMY_ANIMATION',
      })
    }, 500)
  }
} 