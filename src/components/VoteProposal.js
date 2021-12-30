import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle, faPlus } from "@fortawesome/free-solid-svg-icons"

import ethereum from '../assets/imgs/EthereumBalanceBox.svg';
import metamask from '../assets/imgs/Metamask.svg';
import icon_created from '../assets/imgs/Icon_created.png';

import '../assets/scss/membership.scss';

const VoteProposal = () => {

    return (
        <section id="membership">
            <div className="main">
                <div className="row main-wrapper ">

                    <div className="col-12 mb-3 m-title-wrapper">
                        <div className="row">
                            <div className="col-12 col-md-6 ps-0">
                                <h2 className="mb-1">Governance Proposal</h2>
                                <p>Vote on Proposal</p>
                            </div>
                        </div>
                    </div>

                    <div id="submit-event" className="m-card-wrapper">
                        <div className="main h-100 d-flex justify-content-cent flex-column px-2">
                            <div className="row">
                                <div className="col-12 mb-1" align='center'>
                                    <h2>351. Airdrop for all FSD Holders</h2>
                                    <h8>Submitted September 29th, 2021</h8>
                                    <img className="Metamask" width='20px' height='20px' src={metamask} margin='100px' alt="Metamask" title="Metamask" />
                                    <h10>0x1aD91...5836</h10>
                                </div>
                            </div>

                            <div className="row d-flex flex-fill">
                                <div className="col-12 col-md-6  mb-4 mb-lg-0">
                                    <h6>Details</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Proposer: 0xdAC17F958D2ee523a2206206994597C13D831ec7</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                    <h6>Summary</h6>
                                    <div class="divider bg-secondary" style={{ height: 1 }}></div>
                                    <label>Prevent insecure code from being merged into Compound through the governance process, and
                                        ensure that any remaining risks of proposals under consideration are well known before a vote.
                                        Compound desires services that eliminate and illuminate these risks</label>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className='row'>
                                        <div className="col-12 governance__card mt-4 p-0 shadow p-0 mb-5 bg-white" style={{ 'borderRadius': '10px' }}>
                                            <div className="table-responsive">
                                                <table className="table table-hover governance__leaderboard">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="10">
                                                                <div className='mx-2 '>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <h2>For</h2>
                                                                        <h2>513,784</h2>
                                                                    </div>
                                                                    <div class="progress mt-2">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        <tr className="governance__leaderboard--header">
                                                            <th></th>
                                                            <th>151 Addresses</th>
                                                            <th>Votes</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center px-1">1</td>
                                                            <td>0x1aD91...5836</td>
                                                            <td>135,514.421</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="governance__card--view text-center d-flex flex-column my-2">
                                                <a href="/governance/proposals">View All</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-12 governance__card mt-4 p-0 shadow p-0 mb-5 bg-white" style={{ 'borderRadius': '10px' }}>
                                            <div className="table-responsive">
                                                <table className="table table-hover governance__leaderboard">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="10">
                                                                <div className='mx-2 '>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <h2>Against</h2>
                                                                        <h2>24,518</h2>
                                                                    </div>
                                                                    <div class="progress mt-2">
                                                                        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        <tr className="governance__leaderboard--header">
                                                            <th></th>
                                                            <th>151 Addresses</th>
                                                            <th>Votes</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center px-1">1</td>
                                                            <td>0x1aD91...5836</td>
                                                            <td>135,514.421</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="governance__card--view text-center d-flex flex-column my-2">
                                                <a href="/governance/proposals">View All</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-6'>
                                            <h2>Vote</h2>
                                        </div>
                                        <div className='col-6'>
                                            <h2>History</h2>
                                            <div className="col-12 governance__card mt-4 p-0 shadow p-0 mb-5 bg-white" style={{ 'borderRadius': '10px' }}>
                                                <div className="table-responsive">
                                                    <table className="table table-hover governance__leaderboard">
                                                        <tbody>
                                                            <tr>
                                                                <img width='20px' height='20px' src={icon_created} />
                                                                <td>0x1aD91...5836</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0x1aD91...5836</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0x1aD91...5836</td>
                                                            </tr>
                                                            <tr>
                                                                <td>0x1aD91...5836</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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

export default VoteProposal;
