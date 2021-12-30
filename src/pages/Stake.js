import React from 'react';
import StakeForm from '../components/StakeForm';

import ethereum from '../assets/imgs/EthereumLogoBig.svg';
import mint from '../assets/imgs/StakingMintArrows.svg';
import info from '../assets/imgs/ExclamationCircle.svg';
import '../assets/scss/stake.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


class Stake extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        form: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      this.setState({
          form: true
      });
  }

  render() {

    if (this.state.form) {
      return <StakeForm />

    }else{
      return (
        <>
          <div className="d-flex align-items-start justify-content-center stake--header mt-4 mt-md-0">
            <div className="stake__header--wrapper">
              <h5 className="me-2 mb-4">How would you like to stake?</h5>
            </div>
          </div>

          <div className="d-flex align-items-center stake--menu justify-content-center">
            <div className="stake-wrapper">
              <div className="d-flex align-items-center row justify-content-around">
                <div className="col-12 col-md-5 mt-3 mt-md-0"> 
                  <div className="stake--link" onClick={this.handleClick}>
                    <div className="card--stake deposit text-center float-md-end float-none">
                      <div className="d-flex align-items-center img--wrapper">
                          <img src={ethereum} alt="Deposit" title="Deposit" />
                      </div>
                      <div className="d-flex align-items-start card__info">
                          <p>
                            Deposit <span>ETH</span> or
                            <br></br>
                            any <span>ERC-20</span>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-5 mt-4 mt-md-0"> 
                  <div className="stake--link" onClick={this.handleClick}>
                    <div className="card--stake withdraw text-center float-md-start float-none">
                        <div className="d-flex align-items-center img--wrapper">
                            <img src={mint} alt="Withdraw" title="Withdraw" />
                        </div>
                        <div className="d-flex align-items-start card__info">
                            <p>
                              Burn to <span>Withdraw</span>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <small className="d-flex align-items-end stake--info justify-content-center mb-3 mt-2 mt-md-0">
            <a href="#" className="info">
              Learn about the risk of staking
              <img src={info} className="ms-2" alt="Info" title="Info" />
            </a>
          </small>
        </>
      );

    }
  }


}

export default Stake;
