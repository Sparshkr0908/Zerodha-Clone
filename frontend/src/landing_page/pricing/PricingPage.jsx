import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Equity from "./Equity";
import Charger from "./Charges";
function PricingPage() {
  return (
    <>
      <Hero />
      <Equity />
      <Charger />
      <Brokerage />
    </>
  );
}

export default PricingPage;
