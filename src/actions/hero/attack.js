// attack: {
//  damage: 10, 
//  poision: {
//    tickDamage: 1 
//    ticks: 5
// }, etc.}

export function attack(attack, enemy, hero) {
  return (dispatch) => { 
    dispatch({
      type: 'HERO_ATTACKS'
    }) 
    setTimeout(function() { 
      let totalDamage = attack.damageArray.reduce((acc, dmg) => acc + dmg);
      dispatch(enemyTakesDamage(attack.damageArray, totalDamage)) 
      if (enemy.currentHp <= totalDamage) { 
        if ((hero.exp + enemy.exp) >= hero.expToLevelUp) { 
          dispatch(defeatsEnemyAndLevelsUp(enemy))
        } else {
          dispatch(defeatsEnemy(enemy))
        } 
        setTimeout(() => dispatch(respawnEnemy()), 1000) 
      }
      else {
        setTimeout(() => dispatch(stopEnemyAnimation()), 500)
      }  

      dispatch(stopHeroAnimation())
    }, 500) 
  }
}  

function enemyTakesDamage(attackArray, totalDamage) {
  return {
    type: 'ENEMY_TAKES_DAMAGE', 
    payload: {attackArray, totalDamage}
  }
}
function defeatsEnemy(enemy) {
  return {
    type: 'DEFEATS_ENEMY', 
    payload: enemy
  }
}
function defeatsEnemyAndLevelsUp(enemy) {
  return {
    type: 'DEFEATS_ENEMY_AND_LEVELS_UP', 
    payload: enemy
  }
}
function respawnEnemy() {
  return {
    type: 'RESPAWN_ENEMY'
  }
}
function stopEnemyAnimation() { 
  return {
    type: 'STOP_ENEMY_ANIMATION'
  }
}
function stopHeroAnimation() {
  return {
    type: 'STOP_HERO_ANIMATION'
  }
}