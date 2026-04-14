import React from "react";
function RightSection({
  ImageURL,
  ProductName,
  ProductDescription,
  LearnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5" style={{ marginTop: "80px" }}>
          <h1
            style={{
              color: "#424242",
              fontFamily: "inter, serif",
              fontSize: "24px",
            }}
          >
            {ProductName}
          </h1>
          <p
            className="mt-4"
            style={{ color: "#424242", fontFamily: "inter, serif" }}
          >
            {ProductDescription}
          </p>
          <a href={LearnMore} style={{ textDecoration: "none" }}>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7">
          <img src={ImageURL} style={{ width: "90%", marginLeft: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
