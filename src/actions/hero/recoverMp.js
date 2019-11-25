export function recoverMp(mp) {
  return (dispatch) => {
    dispatch({
      type: 'RECOVER_MP',
      payload: mp,
    })
  }
}