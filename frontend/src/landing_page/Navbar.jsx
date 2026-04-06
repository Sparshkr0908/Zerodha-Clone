import React from "react";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"white",position: "fixed", top: 0, left: 0, right: 0, zIndex: 1050}}>
        <div class="container p-2">
          <a class="navbar-brand" href="#">
            <img src="public/media/image/logo.svg" alt="logo" style={{width:"25%"}}/>
          </a>
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
                <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"inter", color:"#666"}}>
                  signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{fontFamily:"inter", color:"#666"}}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{fontFamily:"inter", color:"#666"}}>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{fontFamily:"inter", color:"#666"}}>
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{fontFamily:"inter", color:"#666"}}>
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                   <i class="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
