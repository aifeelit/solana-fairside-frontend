import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faBan } from '@fortawesome/free-solid-svg-icons'

class Dash_Governance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const approvedArr = [
      {
        name: 'Compound Finance Contract Hijack',
        submitted: 'Submitted September 29th, 2021',
        claims: '15 ETH',
        claimsNum: '516',
        loss: '($29,000 USD at time of loss)',
        approved: true
      },
      {
        name: 'Aave Contract Flash Loan Exploit',
        submitted: 'Submitted September 29th, 2021',
        claims: '15 ETH',
        claimsNum: '516',
        loss: '($29,000 USD at time of loss)',
        approved: false
      }
    ]

    return (
      <section id='membership'>
        <div className='main'>
          <div className='row main-wrapper'>
            <div className='col-12 mb-3 m-title-wrapper'>
              <div className='row'>
                <div className='col-12 col-md-6 ps-0'>
                  <h2 className='mb-1'>Dashboard</h2>
                  <p>Stakers</p>
                </div>
              </div>
            </div>
            <div id='submit-event' className='m-card-wrapper'>
              <div className='main h-100 d-flex justify-content-cent flex-column px-2'>
                <div className='row d-flex flex-fill'>
                  <div className='d-flex justify-content-between px-3 align-items-center'>
                    <label>Action Required</label>
                    <div>
                      <Link
                        to='/governance/submit-proposal'
                        className='btn governance__button'
                      >
                        3 Unviewed Task
                      </Link>
                      </div>
                  </div>
                  <div id='events' className='px-3 py-1'>
                    <div id='approved-event' className='col-12 mb-3'>
                      <div className='table-responsive events__table--wrapper'>
                        <table className='table table-hover table-striped align-middle'>
                          <thead>
                            <tr>
                              {/* <th></th> */}
                              <td colSpan={6}>
                                <div style={{ fontSize: '14px' }}>
                                  Voting Required: 3
                                </div>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {approvedArr.map((approve, index) => (
                              <tr>
                                <td></td>
                                <td className='pe-4'>
                                  <p className='mb-0'>{approve.name}</p>
                                  <small>{approve.submitted}</small>
                                </td>
                                <td className='pe-4'>
                                  <p className='mb-0'>{approve.claims}</p>
                                  <small>{approve.loss}</small>
                                </td>
                                <td className='text-center'>
                                  {approve.claimsNum}
                                </td>
                                <td className='text-center text-primary'>
                                  {approve.approved ? (
                                    <button class='btn approve__view--btn'>
                                      Vote
                                    </button>
                                  ) : (
                                    <button class='btn approve__view--btn notapproved'>
                                      Vote
                                    </button>
                                  )}
                                </td>
                                <td className='text-center text-primary'>
                                  {approve.approved ? (
                                    <FontAwesomeIcon
                                      icon={faCheckCircle}
                                      className='approve--approved'
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faBan}
                                      className='approve--notapproved'
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id='approved-event' className='h-100 col-12'>
                      <div className='table-responsive events__table--wrapper'>
                        <table className='table table-hover table-striped align-middle'>
                          <thead>
                            <tr>
                              <th></th>
                              <td>
                                <div style={{ fontSize: '14px' }}>
                                  Claims Available: 5
                                </div>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {approvedArr.map((approve, index) => (
                              <tr>
                                <td></td>
                                <td className='pe-4'>
                                  <p className='mb-0'>{approve.name}</p>
                                  <small>{approve.submitted}</small>
                                </td>
                                <td className='pe-4'>
                                  <p className='mb-0'>{approve.claims}</p>
                                  <small>{approve.loss}</small>
                                </td>
                                <td className='text-center'>
                                  {approve.claimsNum}
                                </td>
                                <td className='text-center text-primary'>
                                  {approve.approved ? (
                                    <button class='btn approve__view--btn'>
                                      Claim
                                    </button>
                                  ) : (
                                    <button class='btn approve__view--btn notapproved'>
                                      Claim
                                    </button>
                                  )}
                                </td>
                                <td className='text-center text-primary'>
                                  {approve.approved ? (
                                    <FontAwesomeIcon
                                      icon={faCheckCircle}
                                      className='approve--approved'
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faBan}
                                      className='approve--notapproved'
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
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
      </section>
    )
  }
}

export default Dash_Governance
