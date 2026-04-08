import React from "react";

function LeftSection({
  ImageURL,
  ProductName,
  ProductDescription,
  TryDemo,
  LearnMore,
  GooglePlay,
  AppStore,
  showLinks = true,
  customLinkText,
  customLinkHref,
}) {
  return (
    <div className="container mb-3">
      <div className="row p-5" style={{ marginTop: "30px" }}>
        <div className="col-6">
          <img src={ImageURL} style={{ width: "100%" }} alt={ProductName} />
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5 text-left">
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

          {showLinks && (
            <div
              className="mt-4 mb-4"
              style={{ fontFamily: "inter, serif", fontSize: "16px" }}
            >
              {customLinkText && customLinkHref && (
                <a href={customLinkHref} style={{ textDecoration: "none" }}>
                  {customLinkText} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {!customLinkText && (
                <>
                  {TryDemo && (
                    <a href={TryDemo} style={{ textDecoration: "none" }}>
                      Try demo <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  )}
                  {LearnMore && (
                    <a
                      href={LearnMore}
                      style={{ marginLeft: "50px", textDecoration: "none" }}
                    >
                      Learn more <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  )}
                </>
              )}
            </div>
          )}

          <div className="mt-4">
            <img src={GooglePlay} alt="Google Play" />
            <img
              src={AppStore}
              style={{ marginLeft: "20px" }}
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;