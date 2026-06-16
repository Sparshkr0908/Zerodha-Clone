import React, {useState, useEffect} from "react";
// import { holdings } from "../data/data";
import axios from "axios";


const Holdings = () =>{

    const [allholdings, setAllHoldings] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:5501/allHoldings").then((res)=>{
            setAllHoldings(res.data);
        });
    }, []);

    return(
        <>
            <h3 classname="title">Holdings ({allholdings.length})</h3>
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

                {allholdings.map((stock, index)=>{
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stock.isLoss ? "loss" : "profit";

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
    );
};

export default Holdings;