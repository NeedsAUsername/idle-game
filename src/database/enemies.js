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
  }
} 

export default enemies 