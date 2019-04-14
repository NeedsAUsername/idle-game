export function changeEnemy(enemyName) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_ENEMY', 
      payload: enemyName
    })
  }
}