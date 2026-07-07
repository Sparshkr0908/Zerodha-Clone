import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function OpenAccount() {
  const [cookies] = useCookies(["token"]);

  return (
    <div className="container p-3 mb-5 mt-5">
      <div
        className="row text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="mt-5 p-3 fs-4 text-muted">Open a Zerodha account</h1>
        <p className="mb-4 text-muted" style={{ fontSize: "18px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        {!cookies.token && (
          <Link to="/signup" className="mt-3 p-2 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
            Sign up for free
          </Link>
        )}
      </div>
    </div>
  );
}

export default OpenAccount;