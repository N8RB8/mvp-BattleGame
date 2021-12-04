class Character {
  constructor(name, playerClass) {
    this.name = name;
    this.playerClass = playerClass;
    this.stats = {
      lvl: 1,
      maxHealth: 100,
    };
    this.exp = 0;
    this.inventory = {
      gold: 100,
    };
    this.win = 0;
    this.loss = 0;
    this.expToLvl = Math.pow(10 * this.stats.lvl, 2);
    if (playerClass === 'Barbarian') {
      this.stats.str = 5;
      this.stats.speed = 3;
    } else if (playerClass === 'Rogue') {
      this.stats.str = 3;
      this.stats.speed = 5;
    } else {
      this.stats.str = 4;
      this.stats.speed = 4;
    }
  }
}

export default Character;
