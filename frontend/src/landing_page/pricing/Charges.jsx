import React from "react";

function Charger() {
  return (
    <div className="container mt-5 p-3">
      <div className="row mt-5">
        <h1
          className="fs-4 mb-4"
          style={{ color: "#424242", fontFamily: "inter, serif" }}
        >
          Charges for account opening
        </h1>

        <div
          className="table-responsive mb-5"
          style={{
            color: "#424242",
            fontFamily: "inter, serif",
            fontSize: ".875rem",
          }}
        >
          <table className="table border text-left align-middle">
            <thead>
              <tr>
                <td className="p-3">Type of account</td>
                <td className="p-3">Charges</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Online account</td>
                <td className="p-2">
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>
              <tr>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  Offline account
                </td>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>
              <tr>
                <td className="p-2">NRI account (offline only)</td>
                <td className="p-2">₹ 500</td>
              </tr>
              <tr>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  ₹ 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*Demat AMC (Annual Maintenance Charge)*/}
      <div className="row mt-5">
        <h1
          className="fs-4 mb-4"
          style={{ color: "#424242", fontFamily: "inter, serif" }}
        >
          Demat AMC (Annual Maintenance Charge)
        </h1>

        <div
          className="table-responsive"
          style={{
            color: "#424242",
            fontFamily: "inter, serif",
            fontSize: ".875rem",
            padding: "12px,16px",
          }}
        >
          <table className="table border text-left align-middle">
            <thead>
              <tr>
                <td className="p-3">Value of holdings</td>
                <td className="p-3">AMC</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Up to ₹4 lakh</td>
                <td className="p-2">
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>
              <tr>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  ₹4 lakh - ₹10 lakh
                </td>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  ₹ 100 per year, charged quarterly*
                </td>
              </tr>
              <tr>
                <td className="p-2">Above ₹10 lakh</td>
                <td className="p-2">₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px", fontStyle: "inter, serif" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="" style={{ textDecoration: "none" }}>
            click here
          </a>
          .
        </p>
      </div>

      {/*Charges for optional value added services*/}
      <div className="row mt-5 ">
        <h1
          className="fs-4 mb-4 mt-5"
          style={{ color: "#424242", fontFamily: "inter, serif" }}
        >
          Charges for optional value added services
        </h1>

        <div
          className="table-responsive"
          style={{
            color: "#424242",
            fontFamily: "inter, serif",
            fontSize: ".875rem",
            padding: "12px,16px",
          }}
        >
          <table className="table border text-left align-middle">
            <thead>
              <tr>
                <td className="p-3">Service</td>
                <td className="p-3">Billing Frquency</td>
                <td className="p-3">Charges</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Tickertape</td>
                <td className="p-2">Monthly / Annual</td>
                <td className="p-2">Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  Smallcase
                </td>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  Per transaction
                </td>
                <td className="p-2" style={{ background: "rgb(245,245,245)" }}>
                  Buy & Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr>
                <td className="p-2">Kite Connect</td>
                <td className="p-2">Monthly</td>
                <td className="p-2">Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charger;
