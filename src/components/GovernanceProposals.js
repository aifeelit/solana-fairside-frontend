import React from 'react';
import TableRow from '../components/TableRow';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBan, faCheckCircle} from "@fortawesome/free-solid-svg-icons"

import '../assets/scss/governance.scss';

const GovernanceProposals = () => {
  
  return (
    <section id="governance-proposals">
        <div className="main">
            <div className="row main-wrapper">
                <div className="col-12 mb-2">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4 mb-md-2 ps-0">
                            <h2 className="mb-md-1 mb-0">Create Proposal</h2>
                        </div>
                        <div className="col-12 col-md-6 d-flex ps-md-2 ps-0 mb-2 mb-md-0 justify-content-center flex-column">
                            <div className="events__buttons d-block d-md-flex justify-content-end">
                                <a href="/governance/submit-proposal" className="events__button">Submit Proposal</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 governance__card mb-4 mb-md-0 p-0">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>All Proposals</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>
                                <div>
                                    <p className="mb-1">Increase Bug Bounty Prize</p>
                                    <div>
                                        <span className="badge__voting badge bg-primary failed me-2">Failed</span>
                                        <small>05 • Executed October 10th, 2021</small>
                                    </div>
                                </div>
                            </td>
                            <td className="governance__progress">
                                <div className="d-flex justify-content-end gp__status">
                                    <FontAwesomeIcon icon={faBan} className="icon me-2 failed__icon" />
                                    <p>Canceled</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className="mb-1">Dyanmic Risk Parameters</p>
                                    <div>
                                        <span className="badge__voting badge bg-primary me-2">In Progress</span>
                                        <small>05 • Executed October 10th, 2021</small>
                                    </div>
                                </div>
                            </td>
                            <td className="governance__progress">
                                <div className="d-flex justify-content-end gp__status">
                                    <FontAwesomeIcon icon={faCheckCircle} className="icon me-2" />
                                    <p>Executed</p>
                                </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

            </div>
        </div>
    </section>
  );
}

export default GovernanceProposals;
