import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5501/allPositions").then(async (res) => {
      const positionsFromDB = res.data;

      const positions = await Promise.all(
        positionsFromDB.map(async (stock) => {
          try {
            const liveRes = await axios.get(
              `http://localhost:5501/stockData?name=${stock.name}`
            );
            const rawPrice = liveRes.data.data?.currentPrice?.NSE;
            const livePrice = rawPrice ? Number(rawPrice) : stock.price;
            return { ...stock, price: livePrice };
          } catch (err) {
            return stock;
          }
        })
      );

      setAllPositions(positions);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = (stock.price || 0) * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price ? stock.price.toFixed(2) : "N/A"}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;