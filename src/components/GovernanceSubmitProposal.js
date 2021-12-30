import React from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"

import '../assets/scss/governance.scss';

const GovernanceSubmitProposal = () => {
  
  return (
    <section id="governance-proposal">
        <div className="main">
            <div className="row main-wrapper">

                <div className="col-12 mb-2">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4 mb-md-2">
                            <h2 className="mb-1">Create Proposal</h2>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column">
                            <div className="events__buttons d-block d-md-flex justify-content-end">
                                <Link to="/governance/submit-proposal" className="events__button">Submit Proposal</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="governance__card">
                        <div className="gp-header">
                            <h2>Proposal Description</h2>
                        </div>
                        <div className="row governance__remaining gp-remaining">
                                <div className="col-12">
                                    <form className="gp-form">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="form-group mb-4">
                                                    <label for="gp-title" className="form-label">Title</label>
                                                    <input id="gp-title" name="gp-title" className="form-control" placeholder="Provide context and additional info here..." />
                                                </div>
                                                <div className="form-group">
                                                    <label for="gp-overview" className="form-label">Overview</label>
                                                    <textarea className="form-control" id="gp-overview" rows="7" placeholder="Why should people vote on your proposal?"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-5 gp-right-col">
                                                <div className="form-group gp-action mb-4">
                                                    <label for="gp-action" className="form-label">Action</label>
                                                    <input id="gp-action" name="gp-action" className="form-control" placeholder="Add Action" />
                                                    <FontAwesomeIcon icon={faPlus} className="gp-plus" />
                                                </div>
                                                <button type="submit" className="events__button">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

export default GovernanceSubmitProposal;
