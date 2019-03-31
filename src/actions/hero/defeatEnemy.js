export function defeatEnemy(enemy) {
  return (dispatch) => {
    dispatch({
      type: 'DEFEATS_ENEMY', 
      payload: enemy
    })
  }
} 