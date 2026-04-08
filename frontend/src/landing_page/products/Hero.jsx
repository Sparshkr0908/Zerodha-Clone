import React from "react";
function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div
        className="row mt-5 p-5 text-center"
        style={{ fontStyle: "inter,serif", color: "#424242" }}
      >
        <h1 className="mt-5 fs-2">Zerodha Products</h1>
        <h3 className="fs-5 mt-2 mb-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mb-5" style={{ fontSize: "1.1rem" }}>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
