import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInfoCircle, faPlus} from "@fortawesome/free-solid-svg-icons"

import ethereum from '../assets/imgs/EthereumBalanceBox.svg';

import '../assets/scss/membership.scss';

const Membership = () => {
  
  return (
    <section id="membership">
      <div className="main">
        <div className="row main-wrapper ">

          <div className="col-12 mb-3 m-title-wrapper">
            <div className="row">
              <div className="col-12 col-md-6 ps-0">
                <h2 className="mb-1">Sign Up</h2>
                <p>Applyh for membership</p>
              </div>
            </div>
          </div>

          <div id="submit-event" className="m-card-wrapper">
            <div className="main h-100 d-flex justify-content-cent flex-column px-2">
                <div className="row">
                  <div className="col-12 mb-1">
                      <h5>Cover Details</h5>
                  </div>
                </div>

                <div className="row d-flex flex-fill">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                        <div className="m-left-side d-flex flex-column h-100">

                          <div className="m-left-title d-flex mb-4">
                            <img src={ethereum} alt="logo" title="logo" />
                            <h5 className="ms-2 mb-0 d-flex justify-content-center flex-column">Blanket Coverage Membership</h5>
                            <FontAwesomeIcon icon={faInfoCircle} className="ms-2 " />
                          </div>

                          <div className="m-left-title d-flex mb-4">
                            <div className="m-left-block">
                              <p>Renewal Date:</p>
                              <p>11/5/2022</p>
                            </div>
                            <div className="m-left-block">
                              <p>Membership Duration:</p>
                              <p>1 year</p>
                            </div>
                            <div className="m-left-block">
                              <p>Min Coverage:</p>
                              <p>1 ETH</p>
                            </div>
                          </div>

                          <div className="m-left-slider mb-4">
                            <div className="d-flex mb-2">
                              <h5>How much ETH do you want to cover for?</h5>
                              <span className="m-left-max ms-2">MAX</span>
                            </div>
                            <input type="range" min="0" max="100" id="m-eth-range" className="mb-4" />
                            <span className="min">0</span>
                            <span className="max">100</span>
                          </div>

                          <div className="m-left-purchase mb-4">
                            <div className="row">
                              <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <h5 className="mb-3">Select token to purchase cover:</h5>
                                <div className="d-flex">
                                  <button className="m-btn me-3">Fairside (FSD)</button>
                                  <button className="m-btn">Ethereum (ETH)</button>
                                </div>
                              </div>
                              <div className="col-12 col-md-6">
                                <h5 className="mb-3">Amount of Coverage Selected:</h5>
                                <input className="" name="amount" />
                              </div>
                            </div>
                          </div>

                          <div className="m-left-footer">
                            <div className="row h-100">
                              <div className="col-6 col-md-5 d-flex justify-content-end flex-column">
                                <p>Estimated Premium Cost: <span>0.41 ETH</span></p>
                              </div>
                              <div className="col-6 col-md-5 d-flex justify-content-end flex-column">
                                <p>Network Capacity: <span>5,000.25 ETH</span></p>
                              </div>
                              <div className="col-12 col-md-2 d-flex justify-content-end flex-column mt-2 mt-md-0">
                                <button className="events__button">Apply</button>
                              </div>
                            </div>
                          </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column">
                        <div class="m-right-side d-flex flex-column h-100">
                          <div className="m-right-wallet d-flex mb-4">
                            <h5 className="d-flex justify-content-center flex-column mb-0">Designated Wallet:</h5>
                            <div className="row w-100">
                              <div className="col-12">
                                <div className="approved__address">
                                  <p>0x1aD91ee08f21bE3dE0BA2ba6918E714dA6B45836</p>
                                  <FontAwesomeIcon icon={faInfoCircle} className="m-right-icon ms-2 " />
                                </div>
                              </div>
                            </div>
                          </div> 
                          <div className="m-right-wallet d-flex mb-4">
                            <h5 className="d-flex justify-content-center flex-column mb-0">Additional Wallets:</h5>
                            <div className="row m-right-wallet-extra">
                              <div className="col-6">
                                <button>
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                              <div className="col-6">
                                <button>
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                            </div>
                          </div> 
                          <div className="m-right-platforms d-flex mb-4">
                            <h5 className="d-flex justify-content-center flex-column mb-0">Platforms Covered: </h5>
                            <p className="ms-2 m-right-covered-platforms">Binance () Ethereum () Avax () Solana ()</p>
                          </div>
                          <div className="m-right-cover">
                            <div className="row">
                              <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center flex-column"><h5 className="mb-0">Cover Types:</h5></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Flash Loan Exploits</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Rug Pulls</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Phishing Attacks</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Network Crash</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                              <div className="col-6 col-md-4 col-lg-3"><button>Liquidity Drain</button></div>
                            </div>
                          </div>
                          <div className="m-right-terms flex-column justify-content-end mb-4 mb-lg-0 mt-2 mt-lg-0">
                            <a href="#">Read Terms of Service</a>
                          </div>

                        </div>
                    </div>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Membership;
