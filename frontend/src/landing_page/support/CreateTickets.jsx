import React from "react";
function CreateTickets() {
  return (
    <div className="mx-5">
      <div className="row" style={{ fontFamily: "inter,serif" }}>
        <div className="col-9 mb-5">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="mt-3 p-3 border accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <div className="d-flex align-items-center gap-3">
                    <i class="fa-solid fa-circle-plus"></i> Account Opening
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Resident individual
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Minor
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Non Resident Indian (NRI)
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Company, Partnership, HUF and LLP
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Glossary
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <div className="d-flex align-items-center gap-3">
                    <i class="fa-solid fa-user"></i> Your Zerodha Account
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Your Profile
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Account modification
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Client Master Report (CMR) and Depository Participant
                        (DP)
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Nomination
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Transfer and conversion of securities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <div className="d-flex align-items-center gap-3">
                    <i class="fa-brands fa-accusoft"></i>Kite
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        IPO
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Trading FAQs
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Margin Trading Facility (MTF) and Margins
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Charts and orders
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Alerts and Nudges
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        General
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  <div className="d-flex align-items-center gap-3">
                    <i class="fa-solid fa-indian-rupee-sign"></i>Funds
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Add money
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Withdraw money
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Add bank accounts
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        eMandates
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  <div className="d-flex align-items-center gap-3">
                    {" "}
                    <i class="fa-brands fa-xbox"></i>Console
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Portfolio
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Corporate actions
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Funds statement
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Reports
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Profile
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Segments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 border accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSix"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSix"
                >
                  <div className="d-flex align-items-center gap-3">
                    {" "}
                    <i class="fa-solid fa-coins"></i>Coin
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSix"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Mutual funds
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        National Pension Scheme (NPS)
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Fixed Deposit (FD)
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Features on Coin
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        Payments and Orders
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="" style={{ textDecoration: "none" }}>
                        General
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 p-2 mt-2">
          <div className="d-flex">
            <div
              className=""
              style={{ width: "15px", backgroundColor: "orange" }}
            ></div>
            <div
              className="p-3"
              style={{ backgroundColor: "#fcf0f3", fontFamily: "inter, serif" }}
            >
              <ul>
                <li className=" mt-4 mb-3">
                  <a href="">MCX option contract expiry – April 2026</a>
                </li>
                <li className="mb-4">
                  <a href="">Electricity contract expiry - April 2026</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mt-4 table-responsive text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div style={{ width: "100%", border: "1px solid #eee" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      className="p-3"
                      style={{
                        backgroundColor: "#f9f9f9",
                        textAlign: "left",
                        fontWeight: "500",
                        fontSize: "1.1rem",
                        borderBottom: "1px solid #eee",
                        color: "#444",
                      }}
                    >
                      Quick links
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "1. Track account opening",
                    "2. Track segment activation",
                    "3. Intraday margins",
                    "4. Kite user manual",
                    "5. Learn how to create a ticket",
                  ].map((text, index) => (
                    <tr key={index}>
                      <td
                        className="p-3"
                        style={{ borderBottom: "1px solid #eee" }}
                      >
                        <a
                          href="#"
                          style={{ textDecoration: "none", color: "#007bff" }}
                        >
                          {text}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTickets;
