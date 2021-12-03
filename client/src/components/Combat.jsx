import React, {useState, useEffect} from "react";
import Monster from "../monster.js";

export default function Combat({player, fight}) {
  const [monster, setMonster] = useState(new Monster(player.stats.lvl));
  const [monsterHealth, setMonsterHealth] = useState(monster.stats.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(player.stats.maxHealth);
  const [combatEnd, setCombatEnd] = useState(false);
  const [victory, setVictory] = useState(false);


  useEffect(() => {
    if (playerHealth <= 0) {
      document.getElementById('combatLog').innerHTML += 'Defeat!';
      setCombatEnd(true);
    } else if (monsterHealth <= 0) {
      document.getElementById('combatLog').innerHTML += 'Victory!';
      setVictory(true);
      setCombatEnd(true);
    }
  }, [monsterHealth, playerHealth])

  function handlePlayerAttacks() {
    if (!combatEnd) {
      let damage = Math.floor(Math.random() * 10 * player.stats.str);
      setMonsterHealth(monsterHealth - damage);
      document.getElementById('combatLog').innerHTML += `You hit your opponent for ${damage} damage. \n`;
    }
  }

  function handleMonsterAttacks() {
    if (!combatEnd) {
      let damage = Math.floor(Math.random() * 10 * monster.stats.str);
      setPlayerHealth(playerHealth - damage);
      document.getElementById('combatLog').innerHTML += `Your opponent hit you for ${damage} damage. \n`;

    }
  }

  function attack() {
    if (player.stats.speed > monster.stats.speed) {
      handlePlayerAttacks();
      handleMonsterAttacks();
    } else {
      handleMonsterAttacks();
      handlePlayerAttacks();
    }
  }

  function handlePlayerItem() {}

  function handleVictory() {
    player.inventory.gold += monster.goldReward;
    player.exp += monster.expReward;
    player.win += 1;
    fight(false);
  }

  function handleDefeat() {
    player.loss += 1;
    fight(false);
  }

  return (
    <div>
      <h1>Fight!</h1>
      <br/>
      Opponent: {monster.name}, the {monster.type}
      <br/>
      <br/>
      Opponent health: {monsterHealth}/{monster.stats.maxHealth}
      <br/>
      Your health: {playerHealth}/{player.stats.maxHealth}
      <br/>
      <br/>
      <div>
        What will you do?
        <br/>
        <span><button onClick={attack}>Attack</button><button onClick={handlePlayerItem}>Item</button></span>
      </div>
      <br/>
      <br/>
      Action Log:
      <div id="combatLog"></div>
      <br/>
      {
        combatEnd && victory ? (<div>You have gained {monster.expReward}exp and {monster.goldReward} gold. <br/> <button onClick={handleVictory}>Return to Menu</button></div>) : null
      }
      {
        combatEnd && !victory ? (<div>You have been slain. <br/> <button onClick={handleDefeat}>Return to Menu</button></div>) : null
      }

    </div>
  )
}