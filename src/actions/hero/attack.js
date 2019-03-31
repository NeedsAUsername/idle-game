export function attack(damage) {
  dispatch({
    type: 'ENEMY_TAKES_DAMAGE', 
    payload: damage
  })
}