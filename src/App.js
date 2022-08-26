import React, { useEffect, useState } from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  Team,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";
import useEagerConnect from "./hooks/useEagerConnect";
import MintAc from "./containers/mint/MintAc";
import MintDCL1 from "./containers/mint/MintDCL1";
import MintDCL2 from "./containers/mint/MintDCL2";
import MintDCL3 from "./containers/mint/MintDCL3";
import MintDCL4 from "./containers/mint/MintDCL4";
import MintOg from "./containers/mint/MintOg";
import GetCurrMintAmount from "./hooks/dataFetcher/getCurrMints";
import PreSaleActive from "./hooks/dataFetcher/preSaleIsActive";
import SaleActive from "./hooks/dataFetcher/saleIsActive";
import { toast } from "react-toastify";
import { useWeb3React } from "@web3-react/core";
import SwapCard from "./components/swapCard/SwapCard";
function App() {
  const { account } = useWeb3React();
  const [acPriceState, setAcPriceState] = useState(0);
  const [preSale, setPreSale] = useState();
  const [sale, setSale] = useState();
  const { curMintAmount } = GetCurrMintAmount();
  const { preSaleActiv } = PreSaleActive();
  const { saleActiv } = SaleActive();
  const getcurrMINtAmoounts = async () => {
    try {
      const mintLimit = await curMintAmount();
      // const wethAcPrice
      setAcPriceState(mintLimit);
      // toast.success(`Your AC price is ${acPriceRes}`);
      console.log("success of the mint limit", mintLimit);
    } catch (error) {
      console.log("error of the mint limit", error.message);
      // toast.error('error of the mint limit',error.message);
    }
  };
  const getPreSaleIsActive = async () => {
    try {
      const presaleActive = await preSaleActiv();
      // const wethAcPrice
      setPreSale(presaleActive);
      // toast.success(`Your AC price is ${acPriceRes}`);
      console.log("success of the mint limit", presaleActive);
    } catch (error) {
      console.log("error of the mint limit", error.message);
      // toast.error('error of the mint limit',error.message);
    }
  };
  const getSaleIsActive = async () => {
    try {
      const saleActive = await saleActiv();
      // const wethAcPrice
      setSale(saleActive);
      // toast.success(`Your AC price is ${acPriceRes}`);
      console.log("success of the mint limit", saleActive);
    } catch (error) {
      console.log("error of the mint limit", error.message);
      // toast.error('error of the mint limit',error.message);
    }
  };
  console.log("jojomojo", acPriceState[0]);
  useEffect(() => {
    getcurrMINtAmoounts();
    getPreSaleIsActive();
    getSaleIsActive();
  }, [account]);
  useEagerConnect();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="gradient__bg">
              <Navbar />
              <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Team />
            <Blog />
            <Footer />
          </Route>
          <Route path="/mint">
            <div className="gradient__bg">
              <Navbar />
              <MintAc
                mintLimit={acPriceState[0]}
                preSale={preSale}
                sale={sale}
              />
              <MintDCL1
                mintLimit={acPriceState[1]}
                preSale={preSale}
                sale={sale}
              />
              <MintDCL2
                mintLimit={acPriceState[2]}
                preSale={preSale}
                sale={sale}
              />
              <MintDCL3
                mintLimit={acPriceState[3]}
                preSale={preSale}
                sale={sale}
              />
              <MintDCL4
                mintLimit={acPriceState[4]}
                preSale={preSale}
                sale={sale}
              />
              <MintOg />
              <Footer />
            </div>
          </Route>

          <Route path="/swapcard">
            <SwapCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
