import React, {useState, useEffect} from "react";
import Monster from "../classes/monster.js";

export default function Combat({player, fight}) {
  const [monster, setMonster] = useState(new Monster(player.stats.lvl));
  const [monsterHealth, setMonsterHealth] = useState(monster.stats.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(player.stats.maxHealth);
  const [combatEnd, setCombatEnd] = useState(false);
  const [victory, setVictory] = useState(false);
  const [combatLog, setCombatLog] = useState([]);
  let calcPlayerHealth = playerHealth;
  let calcMonsterHealth = monsterHealth;
  let roundLog = [];

  useEffect(() => {
    if (monsterHealth <= 0) {
      setCombatLog([...combatLog, 'Victory!']);
      setVictory(true);
      setCombatEnd(true);
    } else if (playerHealth <= 0) {
      setCombatLog([...combatLog, 'Defeat!']);
      setCombatEnd(true);
    }
  }, [monsterHealth, playerHealth])

  function updateCombatLog() {
    setCombatLog([...combatLog, ...roundLog]);
  }

  function handlePlayerAttacks() {
    if (!combatEnd && calcPlayerHealth > 0) {
      let damage = Math.floor(Math.random() * 10 * player.stats.str);
      setMonsterHealth(calcMonsterHealth - damage);
      calcMonsterHealth -= damage;
      roundLog.push(`You hit your opponent for ${damage} damage.`);
      updateCombatLog();
    }
  }

  function handleMonsterAttacks() {
    if (!combatEnd & calcMonsterHealth > 0) {
      let damage = Math.floor(Math.random() * 10 * monster.stats.str);
      setPlayerHealth(calcPlayerHealth - damage);
      calcPlayerHealth -= damage;
      roundLog.push(`Your opponent hit you for ${damage} damage.`);
      updateCombatLog();
    }
  }

  function attack() {
    if (player.stats.speed > monster.stats.speed || player.stats.speed === monster.stats.speed) {
      handlePlayerAttacks();
      handleMonsterAttacks();
    } else {
      handleMonsterAttacks();
      handlePlayerAttacks();
    }
  }

  function handlePlayerItem() {
    if (player.inventory.potion && !combatEnd) {
      player.inventory.potion -= 1;
      calcPlayerHealth = player.stats.maxHealth;
      setPlayerHealth(player.stats.maxHealth);
      roundLog.push('You used a potion. You feel healthy.')
      updateCombatLog();
      handleMonsterAttacks();
    } else {
      alert('You don\'t have a usable item!');
    }
  }

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
      <div id="combatLog">
        {combatLog.length ? combatLog.map(entry => (<p>{entry}</p>)) : null}
      </div>
      <br/>
      {
        combatEnd && victory ? (<div>You have gained {monster.expReward}exp and {monster.goldReward} gold. <br/> <button onClick={handleVictory}>Return to Menu</button></div>) : null
      }
      {
        combatEnd && !victory ? (<div>You have been slain. <br/> <button onClick={handleDefeat}>Return to Menu</button></div>) : null
      }
      <br/>
      <br/>
    </div>
  )
}