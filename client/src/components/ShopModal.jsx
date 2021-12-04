import React, {useState} from "react";

export default function ShopModal({player, hideShop}) {
  let potion = {
    price: 50
  };
  let [stock, setStock] = useState(5);

  function handlePurchase() {
    if (stock) {
      player.inventory.gold -= potion.price;
      if (!player.inventory.potion) {
        player.inventory.potion = 1;
      } else {
        player.inventory.potion += 1;
      }
      setStock(stock - 1);
    } else {
      document.getElementById('stockAlert').innerHTML = 'Item is out of stock, come back later.';
    }
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => hideShop(false)}> X </button>
        </div>
        <div className="title">
          The shopkeeper asks: "What're ya buying?"
          <br/>
          <br/>
        </div>
        <div>
          <div>
            You have: {player.inventory.gold} gold
          </div>
          <br/>
          <br/>
          <div>
            <table className="modalTable">
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Purchase</th>
              </tr>
              <tr>
                <td>Potion</td>
                <td>{stock}</td>
                <td>{potion.price} gold</td>
                <td><button onClick={handlePurchase}>Purchase</button></td>
              </tr>
            </table>
            <div id="stockAlert"></div>
          </div>
        </div>
      </div>
    </div>
  );
}