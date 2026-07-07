import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function Hero() {
  const [cookies] = useCookies(["token"]);

  return (
    <div className="container p-3 mb-5 mt-5">
      <div
        className="row text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "65px",
        }}
      >
        <img
          style={{ width: "60%" }}
          src="media/Image/homeHero.png"
          alt="Hero Image"
          className="mb-4"
        />
        <h1 className="mt-5 fs-3 text-muted">Invest in everything</h1>
        <p className="mb-5 fs-5 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;