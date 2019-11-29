const skills = {
  basicAttack: {
    name: 'Basic Attack', 
    className: 'star subi', 
    requiredLevel: 1, 
    damageMultiplier: 1, 
    hits: 1, 
    animationTime: 500,
    mpCost: 0,
  },
  quadThrow: {
    name: 'Quad Throw',
    className: 'quad-throw', 
    requiredLevel: 2, 
    damageMultiplier: .5, 
    hits: 4, 
    animationTime: 950,
    mpCost: 10,
  }, 
  grimReaper: {
    name: 'Grim Reaper',
    className: 'grim-reaper', 
    requiredLevel: 5, 
    damageMultiplier: .4, 
    hits: 5, 
    animationTime: 2000,
    mpCost: 10,
  }, 
  burningBreaker: {
    name: 'Burning Breaker', 
    className: 'burning-breaker', 
    requiredLevel: 10, 
    damageMultiplier: .3, 
    hits: 5, 
    animationTime: 1400,
    mpCost: 10,
  }, 
  demonLordSecretScroll: {
    name: "Demon Lord's Secret Scroll", 
    className: 'demon-lord-secret-scroll', 
    requiredLevel: 15, 
    damageMultiplier: 4, 
    hits: 1, 
    animationTime: 1200,
    mpCost: 10,
  },
  slash: {
    name: 'Slash',
    className: 'slash',
    requiredLevel: 20,
    damageMultiplier: .7,
    hits: 4,
    animationTime: 1000,
    mpCost: 10
  },
  lightBeam: {
    name: 'Light Beam',
    className: 'light-beam',
    requiredLevel: 20,
    damageMultiplier: 3,
    hits: 1,
    animationTime: 1500,
    mpCost: 10
  },
  slice: {
    name: 'Slice',
    className: 'slice',
    requiredLevel: 20,
    damageMultiplier: 3,
    hits: 1,
    animationTime: 800,
    mpCost: 10
  },
  summonDragon: {
    name: 'Summon Dragon',
    className: 'summon-dragon',
    requiredLevel: 20,
    damageMultiplier: 2,
    hits: 2,
    animationTime: 1500,
    mpCost: 10
  },
  zap: {
    name: 'zap',
    className: 'zap',
    requiredLevel: 20,
    damageMultiplier: 4,
    hits: 1,
    animationTime: 1000,
    mpCost: 10
  },
  darkArrows: {
    name: 'Dark Arrows',
    className: 'dark-arrows',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 3,
    animationTime: 600,
    mpCost: 10
  },
  darkEye: {
    name: 'Dark Eye',
    className: 'dark-eye',
    requiredLevel: 20,
    damageMultiplier: 2,
    hits: 2,
    animationTime: 1200,
    mpCost: 10
  },
  judgementHamer: {
    name: 'Judgement Hammer',
    className: 'judgement-hammer',
    requiredLevel: 20,
    damageMultiplier: 5,
    hits: 1,
    animationTime: 2200,
    mpCost: 10
  },
  hail: {
    name: 'Hail',
    className: 'hail',
    requiredLevel: 20,
    damageMultiplier: .5,
    hits: 6,
    animationTime: 1300,
    mpCost: 10
  },
  iceHammer: {
    name: 'Ice Hammer',
    className: 'ice-hammer',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 2,
    animationTime: 600,
    mpCost: 10
  },
  dragonDive: {
    name: 'Dragon Dive',
    className: 'dragon-dive',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 4,
    animationTime: 1100,
    mpCost: 10
  },
  poisonMagic: {
    name: 'Poision Magic',
    className: 'poision-magic',
    requiredLevel: 20,
    damageMultiplier: .5,
    hits: 4,
    animationTime: 1500,
    mpCost: 10
  },
  flamingAxe: {
    name: 'Flaming Axe',
    className: 'flaming-axe',
    requiredLevel: 20,
    damageMultiplier: .6,
    hits: 3,
    animationTime: 700,
    mpCost: 10
  },
  bearSmash: {
    name: 'Bear Smash',
    className: 'bear-smash',
    requiredLevel: 20,
    damageMultiplier: .6,
    hits: 3,
    animationTime: 700,
    mpCost: 10
  },
  shadowStrike: {
    name: 'Shadow Strike',
    className: 'shadow-strike',
    requiredLevel: 20,
    damageMultiplier: 2,
    hits: 2,
    animationTime: 700,
    mpCost: 10
  },
  summonDarkSpirit: {
    name: 'Summon Dark Spirit',
    className: 'summon-dark-spirit',
    requiredLevel: 20,
    damageMultiplier: 2,
    hits: 5,
    animationTime: 3000,
    mpCost: 10
  },
  monsoon: {
    name: 'Monsoon',
    className: 'monsoon',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 5,
    animationTime: 2800,
    mpCost: 10
  },
  lightningBolt: {
    name: 'Lightning Bolt',
    className: 'lightning-bolt',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 2,
    animationTime: 800,
    mpCost: 10
  },
  summonDamien: {
    name: 'Summon Damien',
    className: 'summon-damien',
    requiredLevel: 20,
    damageMultiplier: .75,
    hits: 3,
    animationTime: 600,
    mpCost: 10,
  },
  bearSpin: {
    name: 'Bear Spin',
    className: 'bear-spin',
    requiredLevel: 20,
    damageMultiplier: .75,
    hits: 3,
    animationTime: 1000,
    mpCost: 10
  },
  flamingHammer: {
    name: 'Flaming Hammer',
    className: 'flaming-hammer',
    requiredLevel: 20,
    damageMultiplier: 1.5,
    hits: 2,
    animationTime: 700,
    mpCost: 10
  },
  hyperBeam: {
    name: 'Hyper Beam',
    className: 'hyper-beam',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 4,
    animationTime: 1300,
    mpCost: 10
  },
  flameWhirl: {
    name: 'Flame Whirl',
    className: 'flame-whirl',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 4,
    animationTime: 900,
    mpCost: 10
  },
  flameSpirit: {
    name: 'Flame Spirit',
    className: 'flame-spirit',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 4,
    animationTime: 2800,
    mpCost: 10
  },
  comboStrike: {
    name: 'Combo Strike',
    className: 'combo-strike',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 5,
    animationTime: 3000,
    mpCost: 10
  },
  iceStrike: {
    name: 'Ice Strike',
    className: 'ice-strike',
    requiredLevel: 20,
    damageMultiplier: 1.5,
    hits: 2,
    animationTime: 1000,
    mpCost: 10
  },
  rageUprising: {
    name: 'Rage Uprising',
    className: 'rage-uprising',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 3,
    animationTime: 2500,
    mpCost: 10
  },
  summonZakum: {
    name: 'Summon Zakum',
    className: 'summon-zakum',
    requiredLevel: 20,
    damageMultiplier: .8,
    hits: 4,
    animationTime: 2500,
    mpCost: 10
  },
  summonDarkMage: {
    name: 'Summon Dark Mage',
    className: 'summon-dark-mage',
    requiredLevel: 20,
    damageMultiplier: 1,
    hits: 4,
    animationTime: 3000,
    mpCost: 10
  },
  summonHilla: {
    name: 'Summon Hilla',
    className: 'summon-hilla',
    requiredLevel: 20,
    damageMultiplier: 2.5,
    hits: 1,
    animationTime: 3000,
    mpCost: 10
  },
  shadowStrike2: {
    name: 'Shadow Strike 2',
    className: 'shadow-strike-2',
    requiredLevel: 20,
    damageMultiplier: .75,
    hits: 5,
    animationTime: 2500,
    mpCost: 20
  }
}

export default skills;