import React, {useState} from "react";

export default function CreateCharacter({initCharacter}) {
  let [name, setName] = useState('');
  let [playerClass, setPlayerClass] = useState('');

  function showDescription (e) {
    if (e.target.value === 'Barbarian') {
      document.getElementById('classDescription').innerHTML = "Strength: 5 \n Speed: 3"
    } else if (e.target.value === 'Rogue') {
      document.getElementById('classDescription').innerHTML = "Strength: 3 \n Speed: 5"
    } else {
      document.getElementById('classDescription').innerHTML = "Strength: 4 \n Speed: 4"
    }
  }

  function hideDescription() {
    document.getElementById('classDescription').innerHTML = '';
  }

  return (
    <div>
      Create your character:
      <form>
        <label>Name:</label>
        <br/>
        <input type="text" placeholder="Ex.: 'Thor'" onChange={e => setName(e.target.value)}/>
        <br/>
        <label>Set your starting class:</label>
        <br/>
        <div onChange={e => setPlayerClass(e.target.value)}>
          <input type="radio" value="Barbarian" name="playerClass" onMouseOver={showDescription} onMouseLeave={hideDescription}/> Barbarian
          <input type="radio" value="Rogue" name="playerClass" onMouseOver={showDescription} onMouseLeave={hideDescription}/> Rogue
          <input type="radio" value="Gladiator" name="playerClass" onMouseOver={showDescription} onMouseLeave={hideDescription}/> Gladiator
        </div>
        <br/>
        <button onClick={(e) => {
          e.preventDefault();
          initCharacter(name, playerClass);
          }}>Create</button>
      </form>
      <div id="classDescription"></div>
    </div>
  )
};