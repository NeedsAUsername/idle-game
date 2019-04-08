// attack: {
//  damage: 10, 
//  poision: {
//    tickDamage: 1 
//    ticks: 5
// }, etc.}

export function attack(attack, enemy) {
  return (dispatch) => { 
    dispatch({
      type: 'HERO_ATTACKS'
    }) 
    setTimeout(function() { 
      dispatch({
        type: 'ENEMY_TAKES_DAMAGE', 
        payload: attack
      }) 
      if (enemy.currentHp <= attack.damage) {
        dispatch({
          type: 'DEFEATS_ENEMY', 
          payload: enemy
        })
      } 
      dispatch({
        type: 'STOP_HERO_ANIMATION'
      })
      setTimeout(function() {
        dispatch({
          type: 'STOP_ENEMY_ANIMATION',
        }) 
      }, 500)
    }, 500)
  }
} 