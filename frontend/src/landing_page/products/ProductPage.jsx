import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      {/* Kite */}
      <LeftSection
        ImageURL="/media/Image/kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo="https://zerodha.com/"
        LearnMore="https://zerodha.com" 
        GooglePlay="/media/Image/google-play-badge-light.svg"
        AppStore="/media/Image/appstore-badge-light.svg"
      />

      <RightSection 
      ImageURL="\media\Image\console.png"
      ProductName="Console"
      ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      LearnMore=""
      />

      <LeftSection
        ImageURL="/media/Image/coin.png"
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        customLinkText="Coin"
        customLinkHref="https://coin.com/"     
        GooglePlay="/media/Image/google-play-badge-light.svg"
        AppStore="/media/Image/appstore-badge-light.svg"
      />

      <RightSection
      ImageURL="\media\Image\kiteconnect.png"
      ProductName="Kite Connect API"
      ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      LearnMore=""
      />

      <LeftSection
        ImageURL="/media/Image/varsity.png"
        ProductName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        showLinks={false}
        GooglePlay="/media/Image/google-play-badge-light.svg"
        AppStore="/media/Image/appstore-badge-light.svg"
      />

      <Universe />
    </>
  );
}

export default ProductPage;