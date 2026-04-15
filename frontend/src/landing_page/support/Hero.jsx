import React from "react";

function Hero() {
  return (
    <div className="mb-5">
      <div className="row mt-5 p-5 bg-body-tertiary" style={{fontFamily:"inter, serif",color:"#424242"}}>
        <div className="mt-2 d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-1" >Support Portal</h2>
        <button className="btn btn-primary">My tickets</button>
      </div>

      {/* SEARCH BAR */}
      <div className="d-flex align-items-center border rounded px-3 py-2 bg-white">
        <i className="fa-solid fa-magnifying-glass me-2"></i>
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
      </div>
      

    </div>
  );
}

export default Hero;