export function defeatEnemy(enemy) {
  return (dispatch) => {
    dispatch({
      type: 'DEFEATS_ENEMY', 
      payload: enemy
    }) 
    setTimeout(function() {
      dispatch({
        type: 'STOP_ENEMY_ANIMATION'
      })
    }, 1000)
  }
} 