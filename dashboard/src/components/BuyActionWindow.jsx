import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price || 0);
  const [product, setProduct] = useState("CNC"); // default Delivery
  const [error, setError] = useState("");
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    setStockPrice(price || 0);
  }, [price]);

  const totalAmount = (stockQuantity * stockPrice).toFixed(2);

  const handleQtyChange = (e) => {
    setStockQuantity(Number(e.target.value));
  };

  const handleBuyClick = async () => {
    setError("");
    try {
      const { data } = await axios.post("http://localhost:5501/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        product,
      });
      alert(data.message);
      generalContext.closeBuyWindow();
    } catch (err) {
      setError(err.response?.data?.message || "Buy failed");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
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

        <div className="product-type" style={{ marginTop: "10px" }}>
          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              name="product"
              value="CNC"
              checked={product === "CNC"}
              onChange={() => setProduct("CNC")}
            />{" "}
            Delivery
          </label>
          <label>
            <input
              type="radio"
              name="product"
              value="MIS"
              checked={product === "MIS"}
              onChange={() => setProduct("MIS")}
            />{" "}
            Intraday
          </label>
        </div>

        {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}
      </div>

      <div className="buttons">
        <span>Margin required ₹{totalAmount}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;