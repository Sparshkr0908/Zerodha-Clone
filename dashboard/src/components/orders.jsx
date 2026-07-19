import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5501/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return allOrders.length === 0 ? (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">Get started</Link>
      </div>
    </div>
  ) : (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.prices}</td>
              <td>{order.mode}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;