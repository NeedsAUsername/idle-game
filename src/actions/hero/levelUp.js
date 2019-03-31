export function levelUp(excessExp) {
  return (dispatch) => {
    dispatch({
      type: 'LEVEL_UP',
      payload: excessExp
    })
  }
}