import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies] = useCookies(["token"]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const menuRef = useRef(null);

  // Outside click pe menu band karne ke liye
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMegaMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom "
      style={{
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1050,
      }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="public/media/image/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <ul class="navbar-nav">
              <li class="nav-item">
                {!cookies.token && (
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signup"
                    style={{ fontFamily: "inter", color: "#666" }}
                  >
                    Signup
                  </Link>
                )}
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/about"
                  style={{ fontFamily: "inter", color: "#666" }}
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/products"
                  style={{ fontFamily: "inter", color: "#666" }}
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/pricing"
                  style={{ fontFamily: "inter", color: "#666" }}
                >
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/support"
                  style={{ fontFamily: "inter", color: "#666" }}
                >
                  Support
                </Link>
              </li>

              {/* ---- Bars icon + mega menu wrapper ---- */}
              <li class="nav-item position-relative" ref={menuRef}>
                <button
                  type="button"
                  class="nav-link active border-0 bg-transparent"
                  onClick={() => setShowMegaMenu((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                >
                  <i class="fa-solid fa-bars"></i>
                </button>

                {showMegaMenu && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      width: "700px",
                      maxWidth: "90vw",
                      backgroundColor: "white",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      borderRadius: "4px",
                      zIndex: 1060,
                      overflow: "hidden",
                    }}
                  >
                    {/* Top row: 4 product icons */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "24px 16px",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <MenuIcon
                        icon="/public/media/image/kite-logo.svg"
                        title="Kite"
                        subtitle="Trading platform"
                        href={import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174"}
                      />
                      <MenuIcon icon="/public/media/image/console.svg" title="Console" subtitle="Backoffice" />
                      <MenuIcon icon="/public/media/image/kite-connect.svg" title="Kite Connect" subtitle="Trading APIs" />
                      <MenuIcon icon="/public/media/image/coin.svg" title="Coin" subtitle="Mutual funds" />
                    </div>

                    {/* Bottom row: 3 columns */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px 32px",
                        backgroundColor: "#fafafa",
                        gap: "24px",
                      }}
                    >
                      <MenuColumn
                        title="Utilities"
                        items={["Calculators", "Brokerage calculator", "Margin calculator", "SIP calculator"]}
                      />
                      <MenuColumn
                        title="Updates"
                        items={["Z-Connect blog", "Circulars / Bulletin", "IPOs", "Markets"]}
                      />
                      <MenuColumn
                        title="Education"
                        items={[
                          { icon: "/public/media/image/varsity (1).png", label: "Varsity" },
                          { icon: "/public/media/image/tqna.png", label: "Trading Q&A" },
                        ]}
                      />
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon({ icon, title, subtitle, href }) {
  const content = (
    <>
      <img src={icon} alt={title} style={{ width: "28px", height: "28px" }} />
      <div style={{ fontWeight: 600, fontSize: "15px", marginTop: "8px", color: "#333" }}>
        {title}
      </div>
      <div style={{ fontSize: "12px", color: "#999" }}>{subtitle}</div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center", cursor: "pointer", textDecoration: "none" }}
      >
        {content}
      </a>
    );
  }

  return <div style={{ textAlign: "center", cursor: "pointer" }}>{content}</div>;
}

function MenuColumn({ title, items }) {
  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: "18px", marginBottom: "10px", color: "#333" }}>
        {title}
      </div>
      {items.map((item, idx) => {
        const isImageItem = typeof item === "object";
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "16px",
              color: "#666",
              marginBottom: "8px",
              marginRight:"50px",
              cursor: "pointer",
            }}
          >
            {isImageItem && (
              <img src={item.icon} alt={item.label} style={{ width: "28px", height: "28px" }} />
            )}
            <span>{isImageItem ? item.label : item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
