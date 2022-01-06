import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyChart from 'react-apexcharts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

import ethereum from '../assets/imgs/EthereumBalanceBox.svg'
import metamask from '../assets/imgs/Metamask.svg'
import icon_created from '../assets/imgs/Icon_created.png'
import icon_in_progress from '../assets/imgs/Icon_in_progress.png'
import small_panel_1 from '../assets/imgs/sp2.png'
import backGround from '../assets/imgs/sp1.png'

import Small_board from '../components/Small_Board'
import Dash_Graph from '../components/Dash_Graph'

import '../assets/scss/membership.scss'

const Dashboard = () => {
  return (
    <section id='membership'>
      <div className='main'>
        <div className='row main-wrapper '>
          <div className='col-12 mb-3 m-title-wrapper'>
            <div className='row'>
              <div className='col-12 col-md-6 ps-0'>
                <h2 className='mb-1'>Dashboard</h2>
                <p>General</p>
              </div>
            </div>
          </div>

          <div id='submit-event' className='m-card-wrapper'>
            <div className='main h-100 d-flex justify-content-cent flex-column px-4'>
              <div className='row d-flex flex-fill'>
                <div className='col-12 col-md-6 mb-lg-0 border border-2 p-2' style={{ borderRadius: '8px' }}>
                  <div style={{ fontSize: '14px' }}>Total Value Locked</div>
                  <div style={{ fontSize: '16px' }}>
                    <h4>5100 ETH </h4>
                  </div>
                  <div style={{ marginLeft: '-36px' }}>
                    <Dash_Graph></Dash_Graph>
                  </div>
                </div>

                <div
                  className='col-12 col-md-6'
                  style={{ paddingLeft: '30px' }}
                >
                  <div className='row'>
                    <div className='col-6 governance__card'>
                      <div
                        className='px-3 py-3 governance__card mb-4 shadow bg-white'
                        style={{ borderRadius: '8px' }}
                        style={{
                          backgroundImage: `url(${backGround})`,
                          backgroundSize: 'cover'
                        }}
                      >
                        <div className='d-flex'>
                          <div className='px-2' style={{ color: 'white' }}>
                            <h2>4.60 USD</h2>
                            <label style={{ color: 'white' }}>
                              FSD Token Price
                            </label>
                          </div>
                        </div>
                      </div>

                      <Small_board
                        title='Unique Holders'
                        value='4125'
                        src={small_panel_1}
                      />
                      <Small_board
                        title='Wallet Covers'
                        value='1245'
                        src={small_panel_1}
                      />
                      <Small_board
                        title='123'
                        value='abc'
                        src={small_panel_1}
                      />
                    </div>

                    <div className='col-6 governance__card'>
                      <Small_board
                        title='TVL (Ethereum)'
                        value='1215 ETH'
                        src={small_panel_1}
                      />
                      <Small_board
                        title='TVL (USD)'
                        value='$51,513,784'
                        src={small_panel_1}
                      />
                      <Small_board
                        title='Total Coverage'
                        value='10000 ETH'
                        src={small_panel_1}
                      />
                      <Small_board
                        title='Capatil Efficiency'
                        value='1000%'
                        src={small_panel_1}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='row d-flex flex-fill py-3'>
                <div
                  className='col-12 col-md-6  mb-4 mb-lg-0 shadow bg-white px-4 pb-4'
                  style={{ borderRadius: '8px' }}
                >
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <Small_board
                        title='Fshare'
                        value='4000 (ETH)'
                        src={small_panel_1}
                        state='1'
                      />
                    </div>
                    <div className='col-12 col-md-6'>
                      <Small_board
                        title='Fshare Ratio'
                        value='15%'
                        src={small_panel_1}
                        state='1'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div>What is Fshare?</div>
                    <label>
                      The Capital Pool has a floating floor known as the FSHARE.
                      It measures the minimum capital requirement of the pool
                      and is a large component of token price and withdraw
                      conditions.{' '}
                    </label>
                  </div>
                </div>
                <div
                  className='col-12 col-md-6  mb-4 mb-lg-0 shadow bg-white px-4 pb-4'
                  style={{
                    borderRadius: '8px',
                    marginLeft: '10px',
                    marginRight: '-40px'
                  }}
                >
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <Small_board
                        title='Capatil Pool Size'
                        value='4000 (ETH)'
                        src={small_panel_1}
                        state='1'
                      />
                    </div>
                    <div className='col-12 col-md-6'>
                      <Small_board
                        title='Capital Pool Efficiency'
                        value='100%'
                        src={small_panel_1}
                        state='1'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div>What is Capital Efficiency?</div>
                    <label>
                      Project pools are capital inefficient which require a
                      fully collateralized position in order to offer cover.
                      Otherwise, the likelihood of insolvency is high. Offering
                      cover at a 1 to 1 ratio represents a high correlation
                      between assets and risk.
                    </label>
                  </div>
                </div>
              </div>

              <div className='d-flex'>
                <div style={{ marginRight: '16px' }}>
                  <Link
                    to='/dash/members'
                    className='btn governance__button'
                    style={{ width: '100px' }}
                  >
                    Members
                  </Link>
                </div>
                <div style={{ marginRight: '16px' }}>
                  <Link
                    to='/dash/stakers'
                    className='btn governance__button'
                    style={{ width: '100px' }}
                  >
                    Stakers
                  </Link>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <Link
                    to='/dash/governance'
                    className='btn governance__button'
                    style={{ width: '100px' }}
                  >
                    Governance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
