import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            style={{ width: "80%" }}
            src="public/media/image/education.svg"
          />
        </div>
        <div className="col-6">
          <h2 className="mb-4 fs-4">Free and open market education</h2>
          <p style={{ fontSize: "18px" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "18px" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5" style={{ fontSize: "18px" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "18px" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
