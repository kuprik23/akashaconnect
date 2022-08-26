import React, { useEffect } from "react";
import swapimg from "../../assets/possibility.png";
import etherLogo from "../../assets/etherLogo.svg";
import "./SwapCard.css";
import Navbar from "../navbar/Navbar";
import { Footer } from "../../containers";
function SwapCard() {
  return (
    <div>
      <Navbar />
      <section className="swapcard ">
        <div className="container">
          <div className="swapcard-content">
            <div className="row">
              <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
                <div class="card" style={{ width: "18rem;" }}>
                  <div class="card-body">
                    <h5 class="card-title">Swap</h5>

                    <div className="input-curr  ">
                      <input
                        type="number"
                        inputMode="decimal"
                        placeholder="0.0"
                      />

                      <button className="btn-currency">
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={etherLogo} alt="" className="img-fluid" />
                          <p>ETH</p>
                        </div>
                      </button>
                    </div>
                    <div className="input-curr  mt-5 ">
                      <input
                        type="number"
                        inputMode="decimal"
                        placeholder="0.0"
                      />
                      <button className="btncard-token">ETH </button>
                    </div>
                    <button className="buy-btn mt-5">BUY</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-12 mt-lg-0 mt-5 pt-lg-0 pt-5"></div>
              <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
                <img src={swapimg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SwapCard;
