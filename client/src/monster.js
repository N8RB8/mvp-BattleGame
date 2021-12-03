const monsterTypes = [
  'Bear',
  'Wolf',
  'Mindflayer',
  'Gorgon',
  'Centaur',
  'Mermaid',
  'Minotaur',
  'Sentient Rock',
  'Blinky Dancer',
  'Balrog',
];
const monsterNames = [
  'Billee',
  'Anudruak',
  'Hnipo',
  'Frulogf',
  'Zacooff',
  'Aros',
  'Kaoyro',
  'Satig',
  'Putin',
  'Byron',
  'Bing-bong',
  "Szih'mlir",
];

class Monster {
  constructor(lvl) {
    this.lvl = lvl;
    this.type = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];
    this.name = monsterNames[Math.floor(Math.random() * monsterNames.length)];
    this.stats = {
      maxHealth: this.calcHealth(this.lvl),
      str: this.calcStats(this.lvl),
      speed: this.calcStats(this.lvl),
    };
    this.expReward = this.calcExp(this.lvl);
    this.goldReward = Math.floor(Math.random() * (this.lvl * 50));
  }

  calcHealth(lvl) {
    let minimum = 100;
    let modifier = Math.floor(Math.random() * (lvl * 3) + lvl);
    console.log('mod', modifier);
    let maximum = minimum * modifier;
    console.log('max', maximum);
    let health = Math.floor(Math.random() * (maximum - minimum));
    console.log(health);
    return health >= minimum ? health : minimum;
  }

  calcExp(lvl) {
    let minimum = 10;
    return Math.floor(Math.random() * (lvl * 10) + minimum);
  }
  calcStats(lvl) {
    let minimum = 2;
    return Math.floor(Math.random() * (lvl * 5) + minimum);
  }
}

export default Monster;
