import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle, faChevronRight} from "@fortawesome/free-solid-svg-icons"

class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          singleView: false,
          name: '',
          number: '',
          submited: '',
        }
    }

    singleView(vote) {
        this.setState({      
            singleView: true,
            name: vote.name,
            number: vote.number,
            submited: vote.submited
        });
    }

    render() {

        const votesArr = [
            {
              "number": "143",
              "name": "Compound Finance Contract Hijack",
              "submited": "Submitted September 29th, 2021",
              "time": "15:40",
              "status": "In Progres",
              "description": "Unusual activity has been reported regarding the distribution of COMP following the execution of Proposal 062. But a new bug contained in the upgraded Comptroller Contract has mistakenly allowed some users to claim as much as about 168,000 COMP tokens already, worth around $50 million."
            },
        ]

        if(this.state.singleView){

            return (
                <div id="single-vote-event" className="h-100 col-12">
                    <div className="main">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>{this.state.number + ". " + this.state.name}</h2>
                                <small>{this.state.submited} <span className="address">0x1aD91...5836</span></small>
                            </div>
                            <div className="col-12 col-md-6 mt-3">
                                <div className="description">
                                    <div className="description--details">
                                        <h5>Details</h5>
                                        <small><strong>Affected Address:</strong> 0xdAC17F958D2ee523a2206206994597C13D831ec7</small><br />
                                        <small><strong>Asset Lost:</strong> 20 ETH ($30,140 USD at time of loss) <strong>Coverage:</strong> 10 ETH ($15,140 USD at time of loss)</small>
                                        <p className="mt-2">Unusual activity has been reported regarding the distribution of COMP following the execution of 
                                        Proposal 062. But a new bug contained in the upgraded Comptroller Contract has mistakenly 
                                        allowed some users to claim as much as about 168,000 COMP tokens already, worth around $50 
                                        million.</p>
                                    </div>
                                    <div className="description--requirements mt-3">
                                        <h5>Requirements</h5>
                                        <p className="mt-2">Unusual activity has been reported regarding the distribution of COMP following the execution of 
                                        Proposal 062. But a new bug contained in the upgraded Comptroller Contract has mistakenly 
                                        allowed some users to claim as much as about 168,000 COMP tokens already, worth around $50 
                                        million.</p>
                                    </div>
                                    <div className="description--assessment mt-3">
                                        <h5>Assessment</h5>
                                        <p className="mt-2">Unusual activity has been reported regarding the distribution of COMP following the execution of View All
                                        Proposal 062. But a new bug contained in the upgraded Comptroller Contract has mistakenly 
                                        allowed some users to claim as much as about 168,000 COMP tokens already, worth around $50 million.</p>
                                        <p className="mt-2">Unusual activity has been reported regarding the distribution of COMP following the execution of 
                                        Proposal 062. But a new bug contained in the upgraded Comptroller Contract has mistakenly 
                                        allowed some users to claim as much as about 168,000 COMP tokens already, worth around $50 
                                        million.</p>
                                        <p className="mt-2">Unusual activity has been reported regarding the distribution of COMP following the execution of 
                                        Proposal 062. But a new bug contained in the upgraded Comptroller Contract has mistakenly 
                                        allowed some users to claim as much as about 168,000 COMP tokens already, worth around $50 
                                        million.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-3">
                                <div className="info">

                                    <div className="info--for mb-4">
                                        <div className="info--for__bar">
                                            <table className="table align-middle">
                                                <tbody>
                                                    <tr className="info--intro">
                                                        <td>For</td>
                                                        <td className="text-end">513,784</td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                            <div class="progress for mt-2">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            {/* <div className="bar">
                                            </div> */}
                                        </div>
                                        <table className="table align-middle">
                                            <tbody>
                                                <tr>
                                                    <td>151 Addresses</td>
                                                    <td className="text-end">Votes</td>
                                                </tr>
                                                <tr>
                                                    <td>0x1aD91...5836</td>
                                                    <td className="text-end">135,514.421</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="col-12 text-center info--view">
                                            View All
                                        </div>
                                    </div>

                                    <div className="info--against">
                                        <div className="info--for__bar">
                                            <table className="table align-middle">
                                                <tbody>
                                                    <tr className="info--intro">
                                                        <td>Against</td>
                                                        <td className="text-end">24,518</td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                            <div class="progress against mt-2">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            {/* <div className="bar">

                                            </div> */}
                                        </div>
                                        <table className="table align-middle">
                                            <tbody>
                                                <tr>
                                                    <td>21 Addresses</td>
                                                    <td className="text-end">Votes</td>
                                                </tr>
                                                <tr>
                                                    <td>0x1aD91...5836</td>
                                                    <td className="text-end">65,124.01</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="col-12 text-center info--view">
                                            View All
                                        </div>
                                    </div>


                                    <div className="row info--bottom">
                                        <div className="col-6 mt-3">
                                            <h5>Vote</h5>
                                            <div className="info--bottom__first">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                For Proposal
                                                            </label>
                                                            </div>
                                                            <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label class="form-check-label" for="flexRadioDefault2">
                                                                Against Proposal
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 d-flex justify-content-center flex-column">
                                                        <FontAwesomeIcon icon={faChevronRight} className="info--arrow" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 mt-3">
                                            <h5>History</h5>
                                            <div className="info--bottom__second">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td>
                                                            <p className="mb-0">Created</p>
                                                            <small>September 29th, 2021</small>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>
                                                            <p className="mb-0">Created</p>
                                                            <small>September 29th, 2021</small>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>
                                                            <p className="mb-0">Created</p>
                                                            <small>September 29th, 2021</small>
                                                            </td>
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
            );

        }else{
            return (
                <div id="vote-event" className="h-100 col-12">
                    <div className="table-responsive events__table--wrapper">
                        <table className="table table-hover table-striped align-middle">
                            <thead>
                            <tr>
                                <th></th>
                                <th>All Events</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Remaining Time</th>
                            </tr>
                            </thead>
                            <tbody>

                                {votesArr.map((vote, index) => (
                                    <tr>
                                        <td></td>
                                        <td className="pe-4">
                                            <p className="fs-9 mb-0">
                                                <span>{vote.number}.</span>
                                                {vote.name}
                                                <span className="badge__progress badge bg-primary ms-1 me-1">{vote.status}</span>
                                                <small>{vote.submited}</small>
                                            </p>
                                            <p className="lh-18">{vote.description}</p>
                                        </td>
                                        <td className="text-center text-primary"><button class="btn vote__view--btn" onClick={this.singleView.bind(this, vote)}>View</button></td>
                                        <td className="text-center text-primary">{vote.time}</td>
                                    </tr>
                                ))}

                                
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}

export default Vote;
