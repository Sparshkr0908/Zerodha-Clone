import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 text-center" style={{ color: "#424242" }}>
        <p className="mb-5 fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h1 className="mb-4 mt-5" style={{ fontSize: "1.6rem" }}>
          The Zerodha Universe
        </h1>
        <p style={{ fontSize: "1.025rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row text-center">
          <div className="col-4 p-5">
            <img
              src="public\media\Image\zerodhaFundhouse.png"
              style={{ width: "60%" }}
            />
            <p
              className="text-small text-muted"
              style={{ fontSize: "13px",padding:"18px" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="public\media\Image\sensibullLogo.svg"
              style={{ width: "60%" }}
            />
            <p
              className="text-small text-muted"
              style={{ fontSize: "13px",padding:"20px" }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="public\media\Image\tijori.svg" style={{ width: "40%" }} />
            <p
              className="text-small text-muted"
              style={{ fontSize: "13px",padding:"16px" }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-4 p-5">
            <img
              src="public\media\Image\streakLogo.png"
              style={{ width: "60%" }}
            />
            <p
              className="text-small text-muted"
              style={{ fontSize: "13px", padding:"25px"}}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="public\media\Image\smallcaseLogo.png"
              style={{ width: "70%" }}
            />
            <p
              className="text-small text-muted"
              style={{ fontSize: "13px" ,padding:"25px"}}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="public\media\Image\dittoLogo.png"
              style={{ width: "40%" }}
            />
            <p
              className="text-small text-muted"
              style={{ fontSize: "13px" ,padding:"28px"}}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <button
          className="btn btn-primary fs-5 text-center"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
