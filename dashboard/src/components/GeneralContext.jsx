import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, price, availableQty) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [sellStockUID, setSellStockUID] = useState("");
  const [sellStockPrice, setSellStockPrice] = useState(0);
  const [sellAvailableQty, setSellAvailableQty] = useState(0);

  const handleOpenBuyWindow = (uid, price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const handleOpenSellWindow = (uid, price, availableQty) => {
    setIsSellWindowOpen(true);
    setSellStockUID(uid);
    setSellStockPrice(price);
    setSellAvailableQty(availableQty);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSellStockUID("");
    setSellStockPrice(0);
    setSellAvailableQty(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />
      )}
      {isSellWindowOpen && (
        <SellActionWindow
          uid={sellStockUID}
          price={sellStockPrice}
          availableQty={sellAvailableQty}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;