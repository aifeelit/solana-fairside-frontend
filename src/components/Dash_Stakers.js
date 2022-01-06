import React from 'react'
import { Link } from 'react-router-dom'

import small_panel_1 from '../assets/imgs/sp2.png'

import '../assets/scss/membership.scss'
import '../assets/scss/governance.scss'

import Small_Board_staker from './Small_Board_staker'

const Dash_Stakers = () => {
  return (
    <section id='membership'>
      <div className='main'>
        <div className='row main-wrapper '>
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
                <div className='col-12 col-md-6  mb-4 mb-lg-0'>
                  <h6>Staking Overview</h6>
                  <label>
                    Network Staking is a diversified staking model where
                    contributors stake the entire network, not a specific
                    project or pool. This allows the contributors to decouple
                    their risk from any specific project. This low correlation
                    of risk drives the network's capital efficiency.
                  </label>
                  {/* <div className="row d-flex flex-fill p-4"> */}
                  <div
                    className='mb-4 border border-2 p-4 mt-3'
                    style={{ borderRadius: '8px' }}
                  >
                    <div className='d-flex'>
                      <div style={{ marginRight: '50px' }}>
                        <h4>$145,515.86</h4>
                        <div style={{ fontSize: '12px' }}>
                          Total Staking Value
                        </div>
                      </div>
                      <img
                        src='/dashboard-draft/static/media/FSDBalanceBox.729fbc18.svg'
                        height='60px'
                      ></img>
                      <div style={{ marginRight: '50px', marginLeft: '20px' }}>
                        <div style={{ fontSize: '12px' }}>Staked ETH:</div>
                        <label>1451.51</label>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px' }}>USD Value:</div>
                        <label>$145,515.86</label>
                      </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                      <div style={{ fontSize: '12px' }}>
                        Conviction Score: 0.51%
                      </div>
                      <div class='progress mt-2'>
                        <div
                          class='progress-bar'
                          role='progressbar'
                          width='80%'
                          aria-valuenow='25'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div class='col-12 col-md-6 '>
                      <div
                        class='col-12 left__box mt-0 shadow-sm bg-white'
                        style={{ borderRadius: '10px' }}
                      >
                        <div class='left__box--staking p-2'>
                          <div
                            style={{ fontSize: '12px', marginBottom: '20px' }}
                          >
                            Staking APR
                          </div>
                          <h4>19.8%</h4>
                        </div>
                      </div>
                    </div>
                    <div class='col-12 col-md-6  '>
                      <div
                        class='col-12 left__box mt-0 shadow-sm bg-white'
                        style={{ borderRadius: '10px' }}
                      >
                        <div class='left__box--staking p-2'>
                          <div
                            style={{ fontSize: '12px', marginBottom: '20px' }}
                          >
                            Smart Staking APR
                          </div>
                          <h4>19.8%+40%</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* </div> */}
                </div>

                <div className='col-12 col-md-6  mb-4 mb-lg-0'>
                  <h6>Rewards Pool</h6>
                  <label>
                    Project returns are diluted as new stakeholders enter the
                    pool. The returns are generated from cover purchased only in
                    that pool and shared among a large group of stakeholders.{' '}
                  </label>
                  <div
                    className='py-3 px-5 mt-3 shadow'
                    style={{ borderRadius: '8px' }}
                  >
                    <div className='governance__button--wrapper d-flex justify-content-center mb-2'>
                      <Link
                        to='/governance/submit-proposal'
                        className='btn governance__button'
                      >
                        Claim All
                      </Link>
                    </div>
                    <div className='row'>
                      <div className='col-12 col-md-6'>
                        <Small_Board_staker
                          src={small_panel_1}
                          title='Tribute'
                          value='235'
                        ></Small_Board_staker>
                      </div>
                      <div className='col-12 col-md-6'>
                        <Small_Board_staker
                          src={small_panel_1}
                          title='Staking'
                          value='186.61'
                        ></Small_Board_staker>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-12 col-md-6'>
                        <Small_Board_staker
                          src={small_panel_1}
                          title='Governance'
                          value='61.5'
                        ></Small_Board_staker>
                      </div>
                      <div className='col-12 col-md-6'>
                        <Small_Board_staker
                          src={small_panel_1}
                          title='Voting'
                          value='98.51'
                        ></Small_Board_staker>
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

export default Dash_Stakers;
