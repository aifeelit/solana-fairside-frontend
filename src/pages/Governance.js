import React from 'react';
import {Link} from 'react-router-dom';

import TableRow from '../components/TableRow';

import '../assets/scss/governance.scss';
import metamask from '../assets/imgs/Metamask.svg';
import fairside_thumbnail from '../assets/imgs/Fairside_Thumbnail.svg';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight, faChevronRight} from "@fortawesome/free-solid-svg-icons"

class Governance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedComponent : false,
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  selectedComponent(selectedComp) {
    this.setState({      
      selectedComponent: selectedComp,
    });
  }
  
  render() {
    return (
      <section id="governance">

        <h2 className="mb-3">Governance Overview</h2>
        <div className="main">
          <div className="row main-wrapper">
            <div className="col-12 col-md-6">
              <div className="row me-md-1">

                <div className="col-12 col-md-7 pe-0 ps-0 pe-md-2 mb-4">
                  <div className="governance__card remaining">
                    <div className="row governance__remaining">
                      <div className="col-10">
                        <p>5,312,425</p>
                        <small>FSD Remaining</small>
                        <div class="progress mt-2">
                          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div className="governance__remaining--bar mt-2"></div> */}
                      </div>
                      <div className="col-2 d-flex justify-content-center flex-column">
                        <FontAwesomeIcon icon={faChevronRight} className="governance__remaining--arrow" color="red"/>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-md-5 ps-0 pe-0 ps-md-1 mb-4">
                  <div className="governance__card remaining">
                    <div className="row governance__remaining">
                      <div className="col-6">
                        <p>524,156</p>
                        <small>Votes Delegated</small>
                      </div>
                      <div className="col-6">
                        <p>1634</p>
                        <small>Votes Delegated</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 governance__card mb-4 mb-md-0 p-0">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th colspan="2">Recent Events</th>
                        </tr>
                      </thead>
                      <tbody>
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                      </tbody>
                    </table>
                  </div>
                  <div className="governance__card--view text-center my-4">
                    View All Events
                  </div>
                </div>

              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="row ms-md-1 h-100">
                <div className="governance__card d-flex flex-column p-0">
                  <div className="table-responsive governance__card--table d-flex flex-column">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th colSpan="2">Recent Proposals</th>
                        </tr>
                      </thead>
                      <tbody>
                        <TableRow />
                        <TableRow />
                        <TableRow />
                      </tbody>
                    </table>
                  </div>
                  <div className="governance__card--view text-center d-flex flex-column my-4">
                    <a href="/governance/proposals">View All Proposals</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 governance__card mt-4 p-0">
              <div className="table-responsive">
                <table className="table table-hover governance__leaderboard">
                  <thead>
                    <tr>
                      <th classN></th>
                      <th colspan="4">Conviction Score Leaderboard</th>
                    </tr>
                    <tr className="governance__leaderboard--header">
                      <th></th>
                      <th>Rank</th>
                      <th>Votes</th>
                      <th>Vote Weight</th>
                      <th>Conviction Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center px-1">1</td>
                      <td>
                        <img className="Metamask" width='20px' height='20px' src={metamask} margin='100px' alt="Metamask" title="Metamask" />
                        Fairside Staker
                      </td>
                      <td>542,412.03</td>
                      <td>14.2%</td>
                      <td>80+</td>
                    </tr>
                    <tr>
                      <td className="text-center px-1">2</td>
                      <td>
                        <img className="Metamask" width='20px' height='20px' src={metamask} margin='100px' alt="Metamask" title="Metamask" />
                        Fairside Staker
                      </td>
                      <td>542,412.03</td>
                      <td>14.2%</td>
                      <td>80+</td>
                    </tr>
                    <tr>
                      <td className="text-center px-1">3</td>
                      <td>
                        <img className="Metamask" width='20px' height='20px' src={metamask} margin='100px' alt="Metamask" title="Metamask" />
                        Fairside Staker
                      </td>
                      <td>542,412.03</td>
                      <td>14.2%</td>
                      <td>80+</td>
                    </tr>
                    <tr>
                      <td className="text-center px-1">4</td>
                      <td>
                        <img className="Metamask" width='20px' height='20px' src={metamask} margin='100px' alt="Metamask" title="Metamask" />
                        Fairside Staker
                      </td>
                      <td>542,412.03</td>
                      <td>14.2%</td>
                      <td>80+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-12 governance__bottom mt-4 p-0">
              <div className="row">
                <div className="col-12 col-md-7">
                  <div className="governance__card h-100">

                    <div className="row">
                      <div className="col-4">
                          <img src={fairside_thumbnail} width='110%' height = '100%' style={{'borderBottomLeftRadius':'7px', 'borderTopLeftRadius':'7px'}} alt="Deposit" title="Deposit" />
                      </div>
                      <div className="col-8">
                        <div className="governance__proposal governance__bottom--first">
                          <h2 className="mb-3">Fairside Governance</h2>
                          <p>
                            Fairside is managed by a decentralized community of COMP token-holders 
                            and their delegates, who propose and vote on upgrades to the protocol. 
                            COMP token-holders and their delegates, who propose and vote on upgrades 
                            to the protocol.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="col-12 col-md-5 mt-4 mt-md-0">
                  <div className="governance__card governance__proposal remaining">
                    <h2 className="mb-3">Submit Governance Proposal</h2>
                    <p>
                      Submitting your proposal requires a fee and valid proof for 
                      reason of submission. Your proposal may be rejected upon 
                      request if it has been deemed too out of line.
                    </p>
                    <div className="governance__button--wrapper d-flex justify-content-end mt-4">
                      <Link to="/governance/submit-proposal" className="btn governance__button">Submit Proposal</Link>
                      <Link to="/governance/vote-proposal" className="btn governance__button">Vote Proposal</Link>
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
}

export default Governance;
