const attacks = {
  basicAttack: {
    name: 'Basic Attack', 
    className: 'star subi', 
    requiredLevel: 1, 
    damageMultiplier: 1, 
    hits: 1, 
    animationTime: 500
  },
  quadThrow: {
    name: 'Quad Throw',
    className: 'quad-throw', 
    requiredLevel: 2, 
    damageMultiplier: .5, 
    hits: 4, 
    animationTime: 1000
  }, 
  grimReaper: {
    name: 'Grim Reaper',
    className: 'grim-reaper', 
    requiredLevel: 5, 
    damageMultiplier: .4, 
    hits: 6, 
    animationTime: 1200
  }
}

export default attacks;