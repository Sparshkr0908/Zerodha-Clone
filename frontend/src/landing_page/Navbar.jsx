import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"white",position: "fixed", top: 0, left: 0, right: 0, zIndex: 1050}}>
        <div class="container p-2">
          < Link class="navbar-brand" to="/">
            <img src="public/media/image/logo.svg" alt="logo" style={{width:"25%"}}/>
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
                <Link class="nav-link active" aria-current="page" to="/signup" style={{fontFamily:"inter", color:"#666"}}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about" style={{fontFamily:"inter", color:"#666"}}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products" style={{fontFamily:"inter", color:"#666"}}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing" style={{fontFamily:"inter", color:"#666"}}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support" style={{fontFamily:"inter", color:"#666"}}>
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" href="#">
                   <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
