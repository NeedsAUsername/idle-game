const enemies = {
  snail: {
    name: 'Snail', 
    animations: {
      walking: 'snail-walking', 
      hurt: 'snail-hurt', 
      dying: 'snail-dying'
    }, 
    currentAnimation: 'snail-walking', 
    damagesTaken: [], 
    level: 1,
    totalHp: 8, 
    currentHp: 8, 
    autoAttack: 1, 
    exp: 3, 
    mesos: 5
  }, 
  shroom: {
    name: 'Shroom', 
    animations: {
      walking: 'shroom-walking', 
      hurt: 'shroom-hurt', 
      dying: 'shroom-dying'
    }, 
    currentAnimation: 'shroom-walking', 
    damagesTaken: [], 
    level: 2, 
    totalHp: 20,
    currentHp: 20,  
    autoAttack: 1, 
    exp: 5, 
    mesos: 10
  }, 
  redSnail: {
    name: 'Red Snail', 
    animations: {
      walking: 'red-snail-walking', 
      hurt: 'red-snail-hurt', 
      dying: 'red-snail-dying'
    }, 
    currentAnimation: 'red-snail-walking', 
    damagesTaken: [], 
    level: 5, 
    totalHp: 45, 
    currentHp: 45, 
    autoAttack: 1, 
    exp: 8, 
    mesos: 15
  }, 
  axeStump: {
    name: 'Axe Stump', 
    animations: {
      walking: 'axe-stump-walking', 
      hurt: 'axe-stump-hurt', 
      dying: 'axe-stump-dying'
    }, 
    currentAnimation: 'axe-stump-walking', 
    damagesTaken: [], 
    level: 17, 
    totalHp: 300, 
    currentHp: 300, 
    autoAttack: 1, 
    exp: 30, 
    mesos: 40
  }
} 

export default enemies 