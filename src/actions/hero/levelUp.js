export function levelUp(excessExp) {
  return (dispatch) => {
    dispatch({
      type: 'LEVEL_UP',
      payload: excessExp
    })
    setTimeout(() => {
      dispatch(stopLevelUpAnimation())
    }, 2000)
  }
}

function stopLevelUpAnimation() {
  return {
    type: 'STOP_LEVEL_UP_ANIMATION'
  }
}