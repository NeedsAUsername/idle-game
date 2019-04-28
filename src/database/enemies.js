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
  octopus: {
    name: 'Octopus', 
    animations: {
      walking: 'octopus-walking', 
      hurt: 'octopus-hurt', 
      dying: 'octopus-dying'
    }, 
    currentAnimation: 'octopus-walking', 
    damagesTaken: [], 
    level: 12, 
    totalHp: 200, 
    currentHp: 200, 
    autoAttack: 1, 
    exp: 24, 
    mesos: 30
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
  }, 
  kingSlime: {
    name: 'King Slime', 
    animations: {
      walking: 'king-slime-walking', 
      hurt: 'king-slime-hurt', 
      dying: 'king-slime-dying'
    }, 
    currentAnimation: 'king-slime-walking', 
    damagesTaken: [], 
    level: 40, 
    totalHp: 8000, 
    currentHp: 8000,
    autoAttack: 1, 
    exp: 800, 
    mesos: 500
  }, 
  stoneGolem: {
    name: 'Stone Golem', 
    animations: {
      walking: 'stone-golem-walking', 
      hurt: 'stone-golem-hurt', 
      dying: 'stone-golem-dying'
    }, 
    currentAnimation: 'stone-golem-walking', 
    damagesTaken: [], 
    level: 55, 
    totalHp: 4000, 
    currentHp: 4000, 
    autoAttack: 1, 
    exp: 170, 
    mesos: 300
  }, 
  redDrake: {
    name: 'Red Drake', 
    animations: {
      walking: 'red-drake-walking', 
      hurt: 'red-drake-hurt', 
      dying: 'red-drake-dying'
    }, 
    currentAnimation: 'red-drake-walking', 
    damagesTaken: [], 
    level: 60, 
    totalHp: 6000, 
    currentHp: 6000, 
    autoAttack: 1, 
    exp: 220, 
    mesos: 350
  }
} 

export default enemies 