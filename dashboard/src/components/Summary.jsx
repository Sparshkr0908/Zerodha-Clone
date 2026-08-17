import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";

const Summary = () => {

  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [indices, setIndices] = useState(null);

  useEffect(() => {

    const fetchDashboardData = async () => {

      try {

        // Holdings
        const holdingsResponse = await axios.get(
          "http://localhost:5501/allHoldings"
        );

        setHoldings(holdingsResponse.data);

        // Positions
        const positionsResponse = await axios.get(
          "http://localhost:5501/allPositions"
        );

        setPositions(positionsResponse.data);

        // Watchlist
        const watchlistResponse = await axios.get(
          "http://localhost:5501/watchlistData"
        );

        const data = watchlistResponse.data?.data || [];

        const formattedWatchlist = data.slice(0, 5).map((stock) => ({
          name: stock.company,
          price: Number(stock.price) || 0,
          percent: Number(stock.percent_change) || 0,
        }));

        setWatchlist(formattedWatchlist);

        // Indices
        try {

          const indicesResponse = await axios.get(
            "http://localhost:5501/indicesData"
          );

          setIndices(indicesResponse.data?.data || null);

        } catch (error) {

          console.log("Indices data unavailable");
          setIndices(null);

        }

      } catch (error) {

        console.error("Dashboard data fetch error:", error);

      }

    };

    fetchDashboardData();

  }, []);


  // -----------------------------
  // Portfolio Calculations
  // -----------------------------

  const holdingsValue = holdings.reduce((sum, stock) => {

    const price = Number(stock.price) || Number(stock.avg) || 0;
    const qty = Number(stock.qty) || 0;

    return sum + price * qty;

  }, 0);


  const positionsValue = positions.reduce((sum, stock) => {

    const price = Number(stock.price) || Number(stock.avg) || 0;
    const qty = Number(stock.qty) || 0;

    return sum + price * qty;

  }, 0);


  const totalPortfolioValue =
    holdingsValue + positionsValue;


  const holdingsInvestment = holdings.reduce((sum, stock) => {

    const avg = Number(stock.avg) || 0;
    const qty = Number(stock.qty) || 0;

    return sum + avg * qty;

  }, 0);


  const positionsInvestment = positions.reduce((sum, stock) => {

    const avg = Number(stock.avg) || 0;
    const qty = Number(stock.qty) || 0;

    return sum + avg * qty;

  }, 0);


  const totalInvestment =
    holdingsInvestment + positionsInvestment;


  const todaysPL =
    totalPortfolioValue - totalInvestment;


  const isProfit = todaysPL >= 0;


  return (

    <div className="summary-dashboard">

      <h2 className="dashboard-title">
        Dashboard
      </h2>


      {/* =========================
          SUMMARY CARDS
      ========================== */}

      <div className="summary-cards">

        <div className="summary-card">

          <p className="label">
            Total Portfolio Value
          </p>

          <h2>
            ₹{totalPortfolioValue.toFixed(2)}
          </h2>

        </div>


        <div className="summary-card">

          <p className="label">
            Today's P&L
          </p>

          <h2 className={isProfit ? "profit" : "loss"}>

            {isProfit ? "+" : "-"}
            ₹{Math.abs(todaysPL).toFixed(2)}

          </h2>

        </div>

      </div>


      {/* =========================
          QUICK LINKS
      ========================== */}

      <div className="quick-links">

        <Link
          to="/holdings"
          className="quick-link"
        >
          Holdings
        </Link>

        <Link
          to="/positions"
          className="quick-link"
        >
          Positions
        </Link>

        <Link
          to="/orders"
          className="quick-link"
        >
          Orders
        </Link>

        <Link
          to="/funds"
          className="quick-link"
        >
          Funds
        </Link>

      </div>


      {/* =========================
          DASHBOARD GRID
      ========================== */}

      <div className="dashboard-grid">


        {/* WATCHLIST */}

        <div className="dashboard-box">

          <div className="box-header">

            <h4>
              Watchlist
            </h4>

            <span>
              Top 5
            </span>

          </div>


          {watchlist.length > 0 ? (

            watchlist.map((stock, index) => (

              <div
                key={index}
                className="mini-watchlist-item"
              >

                <span>
                  {stock.name}
                </span>

                <span
                  className={
                    stock.percent < 0
                      ? "loss"
                      : "profit"
                  }
                >

                  ₹{stock.price.toFixed(2)}

                  {" "}

                  (
                  {stock.percent > 0 ? "+" : ""}
                  {stock.percent.toFixed(2)}%
                  )

                </span>

              </div>

            ))

          ) : (

            <p className="no-data">
              No watchlist data available
            </p>

          )}


          <Link
            to="/"
            className="see-all"
          >
            See all →
          </Link>

        </div>


        {/* =========================
            MARKET INDICES
        ========================== */}

        <div className="dashboard-box">

          <div className="box-header">

            <h4>
              Market Indices
            </h4>

          </div>


          {indices ? (

            <>

              <div className="index-row">

                <span>
                  NIFTY 50
                </span>

                <span>
                  {indices.nifty50?.NSE ?? "N/A"}
                </span>

              </div>


              <div className="index-row">

                <span>
                  SENSEX
                </span>

                <span>
                  {indices.sensex?.BSE ?? "N/A"}
                </span>

              </div>

            </>

          ) : (

            <p className="no-data">
              Indices data unavailable
            </p>

          )}

        </div>


      </div>

    </div>

  );

};

export default Summary;