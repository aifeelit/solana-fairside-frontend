import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/membership.scss';
import '../assets/scss/governance.scss';

import Dash_SemiCircle from './Dash_SemiCircle';
import Dash_Graph from './Dash_Graph';

const Dash_Members = () => {

    return (
        <section id="membership">
            <div className="main">
                <div className="row main-wrapper ">

                    <div className="col-12 mb-3 m-title-wrapper">
                        <div className="row">
                            <div className="col-12 col-md-6 ps-0">
                                <h2 className="mb-1">Dashboard</h2>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>

                    <div id="submit-event" className="m-card-wrapper">
                        <div className="main h-100 d-flex justify-content-cent flex-column px-2">
                            <div className="row d-flex flex-fill">
                                <div className="col-12 col-md-6  mb-4 mb-lg-0 border border-2 p-2" style={{ borderRadius: '8px' }}>
                                    <h6>Total Value Locked</h6>
                                    <h4>5100 ETH </h4>
                                    <Dash_Graph/>
                                </div>
                                <div className="col-12 col-md-3 mb-4 border border-2 p-4" style={{ borderRadius: '8px' }}>
                                    <div align='center'>
                                        Remaining Coverage:
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Dash_SemiCircle></Dash_SemiCircle>
                                    </div>

                                    <div className='d-flex justify-content-between mt-2'>
                                        Remaining:
                                        <label>34/100 ETH</label>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        ETH Value:
                                        <label>$89,452.51</label>
                                    </div>
                                    <div>
                                        <div className='d-flex justify-content-between mt-2'>
                                            Expiry:
                                            <label>11/5/22</label>
                                        </div>
                                    </div>
                                    <div className="governance__button--wrapper d-flex justify-content-center mt-2">
                                        <Link to="/governance/submit-proposal" className="btn governance__button">Top Up</Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 mb-4" style={{ borderRadius: '8px' }}>
                                    <div className='d-flex'>
                                        <img src="/dashboard-draft/static/media/FSDBalanceBox.729fbc18.svg" height='200px'></img>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        Remaining:
                                        <label>34/100 ETH</label>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        ETH Value:
                                        <label>$89,452.51</label>
                                    </div>
                                    <div>
                                        <div className='d-flex justify-content-between mt-2'>
                                            Expiry:
                                            <label>11/5/22</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Dash_Members;
