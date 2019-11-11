export function sendMessage(message) {
  return (dispatch) => {
    dispatch({
      type: 'SEND_MESSAGE', 
      payload: message
    })
  }
}