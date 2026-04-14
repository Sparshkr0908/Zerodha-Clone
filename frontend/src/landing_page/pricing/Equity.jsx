import React, { useState } from "react";

const Equity = () => {
  const [activeTab, setActiveTab] = useState("equity");

  const pricingData = {
    equity: {
      title: "Equity",
      columns: [
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        {
          label: "Brokerage",
          values: [
            "Zero Brokerage",
            "0.03% or Rs. 20/executed order whichever is lower",
            "0.03% or Rs. 20/executed order whichever is lower",
            "Flat Rs. 20 per executed order",
          ],
        },
        {
          label: "STT/CTT",
          values: [
            "0.1% on buy & sell",
            "0.025% on the sell side",
            "0.05% on the sell side",
            "• 0.15% of the intrinsic value on options that are bought and exercised<br>• 0.15% on sell side (on premium)",
          ],
        },
        {
          label: "Transaction charges",
          values: [
            "NSE: 0.00307%<br>BSE: 0.00375%",
            "NSE: 0.00307%<br>BSE: 0.00375%",
            "NSE: 0.00183%<br>BSE: 0",
            "NSE: 0.03553% (on premium)<br>BSE: 0.0325% (on premium)",
          ],
        },
        {
          label: "GST",
          values: Array(4).fill(
            "18% on (brokerage + SEBI charges + transaction charges)",
          ),
        },
        {
          label: "SEBI charges",
          values: Array(4).fill("₹10 / crore"),
        },
        {
          label: "Stamp charges",
          values: [
            "0.015% or ₹1500 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
            "0.002% or ₹200 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
          ],
        },
      ],
    },

    currency: {
      title: "Currency",
      columns: ["Currency futures", "Currency options"],
      rows: [
        {
          label: "Brokerage",
          values: [
            "0.03% or ₹20/executed order whichever is lower",
            "₹20/executed order",
          ],
        },
        {
          label: "STT/CTT",
          values: ["No STT", "No STT"],
        },
        {
          label: "Transaction charges",
          values: [
            "NSE: 0.00035%<br>BSE: 0.00045%",
            "NSE: 0.0311%<br>BSE: 0.001%",
          ],
        },
        {
          label: "GST",
          values: Array(2).fill(
            "18% on (brokerage + SEBI charges + transaction charges)",
          ),
        },
        {
          label: "SEBI charges",
          values: Array(2).fill("₹10 / crore"),
        },
        {
          label: "Stamp charges",
          values: Array(2).fill("0.0001% or ₹10 / crore on buy side"),
        },
      ],
    },

    commodity: {
      title: "Commodity",
      columns: ["Commodity futures", "Commodity options"],
      rows: [
        {
          label: "Brokerage",
          values: [
            "0.03% or Rs. 20/executed order whichever is lower",
            "₹20/executed order",
          ],
        },
        {
          label: "STT/CTT",
          values: ["0.01% on sell side (Non-Agri)", "0.05% on sell side"],
        },
        {
          label: "Transaction charges",
          values: [
            "MCX: 0.0021%<br>NSE: 0.0001%",
            "MCX: 0.0418%<br>NSE: 0.001%",
          ],
        },
        {
          label: "GST",
          values: Array(2).fill(
            "18% on (brokerage + SEBI charges + transaction charges)",
          ),
        },
        {
          label: "SEBI charges",
          values: ["Agri: ₹1 / crore<br>Non-agri: ₹10 / crore", "₹10 / crore"],
        },
        {
          label: "Stamp charges",
          values: [
            "0.002% or ₹200 / crore on buy side",
            "0.003% or ₹300 / crore on buy side",
          ],
        },
      ],
    },
  };

  const current = pricingData[activeTab];

  return (
    <div className="container p-3" style={{ fontFamily: "inter, serif" }}>
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4" id="pricingTabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
            style={{ fontSize: "24px", fontStyle: "inter" }}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
            style={{ fontSize: "24px", fontStyle: "inter" }}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
            style={{ fontSize: "24px", fontStyle: "inter" }}
          >
            Commodity
          </button>
        </li>
      </ul>

      <div>
        <table className="border table align-middle">
          <thead>
            <tr>
              <th
                className="text-start p-4 align-center"
                style={{ width: "180px" }}
              ></th>
              {current.columns.map((col, index) => (
                <th key={index} className="text-start">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {current.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="fw-bold text-start">{row.label}</td>
                {row.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className="text-start"
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4">
        <p className="fs-5 mt-3" style={{ fontFamily: "inter, serif" }}>
          {" "}
          <a href="" style={{ textDecoration: "none" }}>
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>
      </div>
    </div>
  );
};

export default Equity;
