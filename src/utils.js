export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const symbols = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)]
  }
  return color
}

export const soundsLinks = [
  'https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg',
  'https://rpg.hamsterrepublic.com/wiki-images/7/72/Metal_Hit.ogg',
  'https://rpg.hamsterrepublic.com/wiki-images/d/db/Crush8-Bit.ogg',
  'https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/missile.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/extralife.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg',
  'http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg'
]
