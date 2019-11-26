export function changeStar(star) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_STAR',
      payload: star
    })
  }
}