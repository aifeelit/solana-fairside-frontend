import React, { Component } from 'react'
import '../assets/scss/governance.scss'

const Small_Board_staker = props => {
  return (
    <div>
      <div
        className='governance__card border border-2 p-2'
        style={{ borderRadius: '10px' }}
      >
        <div className='d-flex justify-items-center' align='center'>
          <img src={props.src} height={40}></img>
          <div className='px-2'>
            {props.title}
            <h4>{props.value}</h4>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-2'>
          <div id='vote-event' style={{ width: '100px' }}>
            <button class='btn vote__view--btn'>Claim All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Small_Board_staker
