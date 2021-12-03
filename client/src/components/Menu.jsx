import React, {useState} from "react";

export default function Menu({player, fight}) {
  const [showShop, setShowShop] = useState(false);

  const menuStyle = {
    border: '1px solid black',
    padding: 2.
  }

  return (
    <div>
      <h3>{player.name}, the {player.playerClass}</h3>
      <div style={{display: 'flex', alignContent: 'space-evenly', gap: 20, alignItems: 'normal'}}>
        <div style={menuStyle}>
          Inventory:
          <br/>
          <ul>
            {Object.keys(player.inventory).map((item, i) => <li key={i}>{item}: {player.inventory[item]}</li>)}
          </ul>
        </div>
        <div style={menuStyle}>
          Level:
          <p>{player.stats.lvl} ({player.exp}exp)</p>
        </div>
        <div style={menuStyle}>
          Win/Loss:
          <p>{player.win}W / {player.loss}L</p>
        </div>
        <div style={menuStyle}>
          {showShop ? <ShopModal player={player}/> : null}
          <button>Shop</button>
          <br/>
          <br/>
          <button onClick={(e) => fight(true)}>Fight</button>
        </div>
      </div>
    </div>
  );
}

//<li key={i}>{item}: {player.inventory[item]}</li>