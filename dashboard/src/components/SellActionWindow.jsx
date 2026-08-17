import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, price, availableQty }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price || 0);
  const [error, setError] = useState("");
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    setStockPrice(price || 0);
  }, [price]);

  const totalAmount = (stockQuantity * stockPrice).toFixed(2);

  const handleQtyChange = (e) => {
    const qty = Number(e.target.value);
    setStockQuantity(qty);
    if (qty > availableQty) {
      setError(`You only hold ${availableQty} qty`);
    } else {
      setError("");
    }
  };

  const handleSellClick = async () => {
    if (stockQuantity > availableQty) {
      setError(`You only hold ${availableQty} qty`);
      return;
    }
    try {
      await axios.post("http://localhost:5501/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });
      generalContext.closeSellWindow();
    } catch (err) {
      setError(err.response?.data?.message || "Sell failed");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty. (Available: {availableQty})</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max={availableQty}
              onChange={handleQtyChange}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              readOnly
            />
          </fieldset>
        </div>
        {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}
      </div>

      <div className="buttons">
        <span>You will receive ₹{totalAmount}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;