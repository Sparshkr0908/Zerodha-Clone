import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row">
        <h3
          className="text-center fs-4 mb-5"
          style={{ color: "#424242", fontFamily: "inter" }}
        >
          People
        </h3>
        <div className="col-6 mt-4 text-center">
          <img
            src="public/media/image/nithinKamath.jpg"
            style={{ borderRadius: "100%", height: "295px"}}
          />
          <h4
            className="mt-4 fs-5"
            style={{ fontFamily: "inter", color: "#424242" }}
          >
            Nithin Kamath
          </h4>
          <h5
            className="mt-4"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            Founder, CEO
          </h5>
        </div>
        <div
          className="col-6 mt-5"
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "#42424",
            fontFamily: "inter",
          }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div
        className="row p-3 mb-5 text-center"
        style={{ marginTop: "90px", marginLeft: "10px" }}
      >
        <div className="col-4 ">
          <img
            src="public\media\Image\Nikhil Kamath2.png"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4
            className="mt-4"
            style={{
              fontFamily: "inter",
              color: "#424242",
              fontSize: "1.125rem",
            }}
          >
            Nithin Kamath
          </h4>
          <h5
            className="mt-2"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            Co-founder & CFO
          </h5>
        </div>
        <div className="col-4">
          <img
            src="public\media\Image\DrKailashNadh.png"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4
            className="mt-4"
            style={{
              fontFamily: "inter",
              color: "#424242",
              fontSize: "1.125rem",
            }}
          >
            Dr. Kailash Nadh
          </h4>
          <h5
            className="mt-2"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            CTO
          </h5>
        </div>
        <div className="col-4">
          <img
            src="public\media\Image\Venu Madhav.png"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4
            className="mt-4"
            style={{
              fontFamily: "inter",
              color: "#424242",
              fontSize: "1.125rem",
            }}
          >
            Venu Madhav
          </h4>
          <h5
            className="mt-2"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            COO
          </h5>
        </div>
      </div>
      <div
        className="row p-3 text-center"
        style={{ marginTop: "90px", marginLeft: "10px", marginBottom: "80px" }}
      >
        <div className="col-4 ">
          <img
            src="public\media\Image\SeemaPatil.png"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4
            className="mt-4"
            style={{
              fontFamily: "inter",
              color: "#424242",
              fontSize: "1.125rem",
            }}
          >
            Seema Patil
          </h4>
          <h5
            className="mt-2"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            Director
          </h5>
        </div>
        <div className="col-4">
          <img
            src="public\media\Image\Karthik Rangappa.png"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4
            className="mt-4"
            style={{
              fontFamily: "inter",
              color: "#424242",
              fontSize: "1.125rem",
            }}
          >
            Karthik Rangappa
          </h4>
          <h5
            className="mt-2"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            Chief of Education
          </h5>
        </div>
        <div className="col-4">
          <img
            src="public\media\Image\Austin Prakesh.png"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4
            className="mt-4"
            style={{
              fontFamily: "inter",
              color: "#424242",
              fontSize: "1.125rem",
            }}
          >
            Austin Prakesh
          </h4>
          <h5
            className="mt-2"
            style={{ fontFamily: "inter", fontSize: ".9rem", color: "#666" }}
          >
            Director Strategy
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Team;
