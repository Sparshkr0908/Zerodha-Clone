import React, { useState, useEffect } from "react";
// import { holdings } from "../data/data";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import "./Holding.css";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5501/allHoldings").then(async (res) => {
      const holdingsFromDB = res.data;

      const holdings = await Promise.all(
        holdingsFromDB.map(async (stock) => {
          try {
            const liveRes = await axios.get(
              `http://localhost:5501/stockData?name=${stock.name}`,
            );

            const rawPrice = liveRes.data.data?.currentPrice?.NSE;
            const livePrice = rawPrice ? Number(rawPrice) : stock.price;
            const dayChangePercent = Number(
              liveRes.data.data?.percentChange ?? 0,
            );
            return { ...stock, price: livePrice, dayChangePercent };
          } catch (err) {
            return { ...stock, dayChangePercent: 0 };
          }
        }),
      );

      setAllHoldings(holdings);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0,
  );
  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + (stock.price || 0) * stock.qty,
    0,
  );
  const totalPL = currentValue - totalInvestment;
  const plPercent =
    totalInvestment > 0
      ? ((totalPL / totalInvestment) * 100).toFixed(2)
      : "0.00";
  const isOverallProfit = totalPL >= 0;

  return (
    <>
      <h3 classname="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. Cost</th>
            <th>LTP</th>
            <th>Cur. value</th>
            <th>P&L</th>
            <th>Net Chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = (stock.price || 0) * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";

            const dayChange = stock.dayChangePercent ?? 0;
            const dayClass = dayChange >= 0 ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price ? stock.price.toFixed(2) : "N/A"}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{dayChange}%</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={isOverallProfit ? "profit" : "loss"}>
            {totalPL >= 0 ? "+" : ""}
            {totalPL.toFixed(2)} ({plPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
