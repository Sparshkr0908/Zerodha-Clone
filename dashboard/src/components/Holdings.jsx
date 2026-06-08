import React from "react";
import { holdings } from "../data/data";

const Holdings = () =>{
    return(
        <>
            <h3 classname="title">Holdings ({holdings.length})</h3>
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

                {holdings.map((stack, index)=>{
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stock.isLoss ? "Loss" : "profit";

                    return (
                        <tr key={index}>
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td>{curValue.toFixed(2)}</td>
                            <td className={profClass}>
                                {(curValue - stock.avg * stock.qty).toFixed(2)}
                            </td>
                            <td className={profClass}>{stock.net}</td>
                            <td className={dayClass}>{stock.day}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
        </>
    )
}