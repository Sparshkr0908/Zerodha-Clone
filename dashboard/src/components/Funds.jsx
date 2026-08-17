import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Funds.css";

const Funds = () => {
  const [wallet, setWallet] = useState({ balance: 0, transactions: [] });
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("UPI");
  const [processing, setProcessing] = useState(false);

  const fetchWallet = () => {
    axios.get("http://localhost:5501/wallet").then((res) => {
      setWallet(res.data.wallet);
    });
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  const handleAddMoney = async () => {
    if (!amount || Number(amount) <= 0) return;
    setProcessing(true);

    // Simulate payment gateway processing delay
    setTimeout(async () => {
      try {
        const { data } = await axios.post("http://localhost:5501/addFunds", {
          amount: Number(amount),
          method: selectedMethod,
        });
        setWallet(data.wallet);
        setShowAddMoney(false);
        setAmount("");
        setProcessing(false);
        alert(`✅ ₹${amount} added successfully via ${selectedMethod}`);
      } catch (err) {
        setProcessing(false);
        alert("Payment failed. Try again.");
      }
    }, 1500); // fake "processing" feel like real payment gateways
  };

  return (
    <div className="funds-container">
      <div className="funds-header">
        <h2>Funds</h2>
      </div>

      <div className="balance-card">
        <p className="label">Available Balance</p>
        <h1>₹{wallet.balance?.toFixed(2)}</h1>
        <button className="btn-add-funds" onClick={() => setShowAddMoney(true)}>
          + Add Funds
        </button>
      </div>

      <div className="transactions-section">
        <h3>Recent Transactions</h3>
        {wallet.transactions?.length === 0 ? (
          <p className="no-txn">No transactions yet</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {wallet.transactions?.map((txn, idx) => (
                <tr key={idx}>
                  <td>{new Date(txn.date).toLocaleString()}</td>
                  <td>{txn.reason}</td>
                  <td className={txn.type === "CREDIT" ? "credit" : "debit"}>{txn.type}</td>
                  <td className={txn.type === "CREDIT" ? "credit" : "debit"}>
                    {txn.type === "CREDIT" ? "+" : "-"}₹{txn.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Simulated Payment Modal */}
      {showAddMoney && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <div className="modal-header">
              <h3>Add Money</h3>
              <button onClick={() => setShowAddMoney(false)}>✕</button>
            </div>

            {!processing ? (
              <>
                <div className="amount-input">
                  <label>Enter Amount</label>
                  <input
                    type="number"
                    placeholder="₹ 0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="quick-amounts">
                    {[500, 1000, 5000, 10000].map((amt) => (
                      <button key={amt} onClick={() => setAmount(amt)}>
                        +₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="payment-methods">
                  <label>Select Payment Method</label>
                  {["UPI", "Net Banking", "Debit Card", "Google Pay", "PhonePe"].map((method) => (
                    <div
                      key={method}
                      className={`method-option ${selectedMethod === method ? "selected" : ""}`}
                      onClick={() => setSelectedMethod(method)}
                    >
                      {method}
                    </div>
                  ))}
                </div>

                <button
                  className="btn-proceed"
                  onClick={handleAddMoney}
                  disabled={!amount || Number(amount) <= 0}
                >
                  Proceed to Pay ₹{amount || 0}
                </button>
                <p className="powered-by">🔒 Secured by RazorPay (Simulated)</p>
              </>
            ) : (
              <div className="processing-state">
                <div className="spinner"></div>
                <p>Processing payment via {selectedMethod}...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;