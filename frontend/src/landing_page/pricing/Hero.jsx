import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-3 mb-5">
        <div className="text-center mt-5 p-5 mb-5" style={{ color: "#424242" }}>
          <h2 className="fs-3">Charges</h2>
          <p className="fs-4 mt-3">List of all charges and taxes</p>
        </div>
        <div className="col-4 text-center">
          <img
            src="public\media\Image\pricing-eq.svg"
            style={{ width: "80%" }}
          />
          <h2 className="fs-3 mt-3 mb-4" style={{ color: "#424242" }}>
            Free equity delivery
          </h2>
          <p style={{ color: "#424242" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="public\media\Image\other-trades.svg"
            style={{ width: "80%" }}
          />
          <h2 className="fs-3 mt-3 mb-4" style={{ color: "#424242" }}>
            Intraday and F&O trades
          </h2>
          <p style={{ color: "#424242" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="public\media\Image\pricing0.svg" style={{ width: "80%" }} />
          <h2 className="fs-3 mt-3 mb-4" style={{ color: "#424242" }}>
            Free direct MF
          </h2>
          <p style={{ color: "#424242" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
