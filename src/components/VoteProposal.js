import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCheckCircle, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../assets/scss/membership.scss'

class VoteProposal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      singleView: true,
      name: 'Airdrop for all FSD Holders',
      number: '351',
      submited: 'Submitted September 29th, 2021'
    }
  }
  render () {
    return (
      <section id='membership'>
        <div className='main'>
          <div className='row main-wrapper '>
            <div className='col-12 mb-3 m-title-wrapper'>
              <div className='row'>
                <div className='col-12 col-md-6 ps-0'>
                  <h2 className='mb-1'>Governance Proposal</h2>
                  <p>Vote on Proposal</p>
                </div>
              </div>
            </div>

            <div id='single-vote-event' className='h-100 col-12'>
              <div className='main'>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <h2>{this.state.number + '. ' + this.state.name}</h2>
                    <small>
                      {this.state.submited}{' '}
                      <span className='address'>0x1aD91...5836</span>
                    </small>
                  </div>
                  <div className='col-12 col-md-6 mt-3'>
                    <div className='description'>
                      <div className='description--details'>
                        <h5>Details</h5>
                        <small>
                          <strong>Proposer:</strong>{' '}
                          0xdAC17F958D2ee523a2206206994597C13D831ec7
                        </small>
                        <br />
                      </div>
                      <div className='description--requirements mt-3'>
                        <h5>Summary</h5>
                        <p className='mt-2'>
                          Prevent insecure code from being merged into Compound
                          through the governance process, and ensure that any
                          remaining risks of proposals under consideration are
                          well known before a vote. Compound desires services
                          that eliminate and illuminate these risks
                        </p>
                      </div>
                      <div className='description--requirements mt-3'>
                        <h5>Summary</h5>
                        <p className='mt-2'>
                          Prevent insecure code from being merged into Compound
                          through the governance process, and ensure that any
                          remaining risks of proposals under consideration are
                          well known before a vote. Compound desires services
                          that eliminate and illuminate these risks
                        </p>
                      </div>
                      <div className='description--requirements mt-3'>
                        <h5>Summary</h5>
                        <p className='mt-2'>
                          Prevent insecure code from being merged into Compound
                          through the governance process, and ensure that any
                          remaining risks of proposals under consideration are
                          well known before a vote. Compound desires services
                          that eliminate and illuminate these risks
                        </p>
                      </div>
                      <div className='description--requirements mt-3'>
                        <h5>Summary</h5>
                        <p className='mt-2'>
                          Prevent insecure code from being merged into Compound
                          through the governance process, and ensure that any
                          remaining risks of proposals under consideration are
                          well known before a vote. Compound desires services
                          that eliminate and illuminate these risks
                        </p>
                      </div>
                      <div className='description--requirements mt-3'>
                        <h5>Summary</h5>
                        <p className='mt-2'>
                          Prevent insecure code from being merged into Compound
                          through the governance process, and ensure that any
                          remaining risks of proposals under consideration are
                          well known before a vote. Compound desires services
                          that eliminate and illuminate these risks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 mt-3'>
                    <div className='info'>
                      <div className='info--for mb-4'>
                        <div className='info--for__bar'>
                          <table className='table align-middle'>
                            <tbody>
                              <tr className='info--intro'>
                                <td>For</td>
                                <td className='text-end'>513,784</td>
                              </tr>
                            </tbody>
                          </table>
                          <div class='progress for mt-2'>
                            <div
                              class='progress-bar'
                              role='progressbar'
                              aria-valuenow='25'
                              aria-valuemin='0'
                              aria-valuemax='100'
                            ></div>
                          </div>
                          {/* <div className="bar">
                                            </div> */}
                        </div>
                        <table className='table align-middle'>
                          <tbody>
                            <tr>
                              <td>151 Addresses</td>
                              <td className='text-end'>Votes</td>
                            </tr>
                            <tr>
                              <td>0x1aD91...5836</td>
                              <td className='text-end'>135,514.421</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='col-12 text-center info--view'>
                          View All
                        </div>
                      </div>

                      <div className='info--against'>
                        <div className='info--for__bar'>
                          <table className='table align-middle'>
                            <tbody>
                              <tr className='info--intro'>
                                <td>Against</td>
                                <td className='text-end'>24,518</td>
                              </tr>
                            </tbody>
                          </table>
                          <div class='progress against mt-2'>
                            <div
                              class='progress-bar'
                              role='progressbar'
                              aria-valuenow='25'
                              aria-valuemin='0'
                              aria-valuemax='100'
                            ></div>
                          </div>
                          {/* <div className="bar">

                                            </div> */}
                        </div>
                        <table className='table align-middle'>
                          <tbody>
                            <tr>
                              <td>21 Addresses</td>
                              <td className='text-end'>Votes</td>
                            </tr>
                            <tr>
                              <td>0x1aD91...5836</td>
                              <td className='text-end'>65,124.01</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='col-12 text-center info--view'>
                          View All
                        </div>
                      </div>

                      <div className='row info--bottom'>
                        <div className='col-6 mt-3'>
                          <h5>Vote</h5>
                          <div className='info--bottom__first'>
                            <div className='row'>
                              <div className='col-8'>
                                <div class='form-check'>
                                  <input
                                    class='form-check-input'
                                    type='radio'
                                    name='flexRadioDefault'
                                    id='flexRadioDefault1'
                                    checked
                                  />
                                  <label
                                    class='form-check-label'
                                    for='flexRadioDefault1'
                                  >
                                    For Proposal
                                  </label>
                                </div>
                                <div class='form-check'>
                                  <input
                                    class='form-check-input'
                                    type='radio'
                                    name='flexRadioDefault'
                                    id='flexRadioDefault2'
                                  />
                                  <label
                                    class='form-check-label'
                                    for='flexRadioDefault2'
                                  >
                                    Against Proposal
                                  </label>
                                </div>
                              </div>
                              <div className='col-4 d-flex justify-content-center flex-column'>
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className='info--arrow'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-6 mt-3'>
                          <h5>History</h5>
                          <div className='info--bottom__second'>
                            <div className='table-responsive'>
                              <table className='table'>
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td>
                                      <p className='mb-0'>Created</p>
                                      <small>September 29th, 2021</small>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      <p className='mb-0'>Created</p>
                                      <small>September 29th, 2021</small>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      <p className='mb-0'>Created</p>
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
          </div>
        </div>
      </section>
    )
  }
}
export default VoteProposal
