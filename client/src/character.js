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

  levelUp() {
    this.stats.lvl += 1;
    this.stats.str += 1;
    this.stats.speed += 1;
    this.stats.maxHealth += 50;
    this.stats.currHealth = this.stats.maxHealth;
    alert(
      `Congratulations! You just leveled up! \n You are now level ${this.stats.lvl}`
    );
  }
}

export default Character;
