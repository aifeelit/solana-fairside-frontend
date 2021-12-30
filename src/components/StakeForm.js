import React from 'react';

import eth_white from '../assets/imgs/EthereumWHITECIRCLE.svg';
import question from '../assets/imgs/question-circle-regular.svg';
import eth_box from '../assets/imgs/EthereumBalanceBox.svg';
import fsd_box from '../assets/imgs/FSDBalanceBox.svg';

import Popup from '../components/Popup';
import UnstakeOption from '../components/UnstakeOption';
import StakeOption from '../components/StakeOption';

class StakeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isActiveUnstake: false,
            confirm: '',
            notification: false,
            modalShow: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.toggleClassUnstake = this.toggleClassUnstake.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            notification: true,
        });
    }
   
    toggleClass() {
        this.setState(prevState => ({      
            isActive: !prevState.isActive    
        }));
        this.setState(prevState => ({      
            isActiveUnstake: !prevState.isActiveUnstake    
        }));
    }

    toggleClassUnstake() {
        this.setState(prevState => ({      
            isActiveUnstake: !prevState.isActiveUnstake    
        }));
        this.setState(prevState => ({      
            isActive: !prevState.isActive    
        }));
    }
    
    render(){

        return (
            <>
                {this.state.notification ? 
                    <Popup status="true" /> :
                    null
                }

                <div className="row">

                    <div className="col-12 col-lg-6">

                        { this.state.isActive && 
                            <StakeOption />
                        }
                        { this.state.isActiveUnstake && 
                            <UnstakeOption />
                        }

                        <div className="d-flex align-items-start justify-content-center mb-4">
                            <div className="btn__options--wrapper d-flex">
                                <button className={this.state.isActive ? 'btn btn-primary btn__option--stake active': 'btn btn-primary btn__option--stake'} onClick={this.toggleClass}>Stake</button>
                                <button className={this.state.isActiveUnstake ? 'btn btn-primary btn__option--unstake active': 'btn btn-primary btn__option--stake'} onClick={this.toggleClassUnstake}>Unstake</button>
                            </div>
                        </div>



                        <div className="d-flex align-items-center stake--menu justify-content-center mb-4 mb-lg-0">
                            <div className="stake-wrapper text-center">
                                <form id="stakeSubmit" action="/" method="post" onSubmit={this.handleSubmit}>

                                    <div className="row justify-content-center mb-4">
                                        <div className="col-10 col-lg-9 stake__input--wrapper">
                                            <input type="text" className="form-control eth--input" name="stake" value="13.94" id="stake" />
                                            <div className="stake--max"><b>MAX</b></div>
                                            <img src={eth_white} className="stats__ethereum--logo" alt="Ethereum logo" title="Ethereum logo" />
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div class="col-10 col-lg-9">
                                            <button type="submit" className="btn btn-primary btn--stake">Connect Wallet</button>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center stake--text mb-3">
                                        <div className="col-10 col-lg-9">
                                            <p className="float-start mb-0 mt-1">
                                                You will receive: 
                                                <img src={question} className="stats--question ms-2" alt="Question" title="Question" />
                                            </p>
                                            <p className="float-end mb-0 mt-1">~13.94 sFSD</p>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center stake--text mb-3">
                                        <div className="col-10 col-lg-9">
                                            <p className="float-start mb-0">
                                                Voting Power:
                                                <img src={question} className="stats--question ms-2" alt="Question" title="Question" />
                                            </p>
                                            <p className="float-end mb-0">0.041%</p>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center stake--text">
                                        <div className="col-10 col-lg-9">
                                            <p className="float-start mb-0">Transaction Cost:</p>
                                            <p className="float-end mb-0">0.04 ETH</p>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        
                    </div>

                  

                    <div className="col-12 col-lg-6">
                        <div className="row justify-content-center left mb-4">
                            <div className="col-10 col-lg-9">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4 p-0">
                                        <div className="left__box--balance left__box me-0 me-md-3 p-4">
                                            <h5 className="me-2 mb-4">Balance</h5>
                                            <div className="row first--row mb-4">
                                                <div className="col-3 col-md-5 col-lg-6">
                                                    <div className="left__box--logo">
                                                    <img src={fsd_box} className="" alt="Logo white" title="Logo white" />
                                                    </div>
                                                </div>
                                                <div className="col-5 col-lg-6 left__box--amount text-start p-0">
                                                    154.10<br></br>
                                                    FSD
                                                </div>
                                            </div>
                                            <div className="row second--row mb-3">
                                                <div className="col-3 col-md-5 col-lg-6">
                                                    <div className="left__box--logo">
                                                        <img src={eth_box} className="" alt="Logo blue" title="Logo blue" />
                                                    </div>
                                                </div>
                                                <div className="col-5 col-lg-6 left__box--amount text-start p-0">
                                                    154.10<br></br>
                                                    ETH
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-12 col-md-6 mb-4 p-0">
                                        <div className="left__box--metrics left__box p-4">
                                            <h5 className="me-2 mb-4">Metrics</h5>
                                            <div className="left_box--wrapper">
                                                <p className="mb-4">
                                                    TVL<br></br>
                                                    <b>$241,523,053</b>
                                                </p>
                                                <p className="mb-4">
                                                    FSD PRICE<br></br>
                                                    <b>$44.51</b>
                                                </p>
                                                <p>
                                                    VOLUME (24HRS)<br></br>
                                                    <b>$512,215,868.51</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                               </div>

                                <div className="row">
                                    <div className="col-12 left__box mt-0 mt-md-3">
                                        <div className="left__box--staking p-4">
                                            <h5 className="me-2">Staking APR</h5>
                                            <p className="mb-0">19.8%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                {/* <small className="d-flex align-items-start stake--info justify-content-center mb-2 mt-2 mt-md-0">
                    <a href="#" className="info">
                        Learn about the rist of staking
                        <FontAwesomeIcon icon={faArrowRight} className="ms-2"/>
                    </a>
                </small> */}
            
            </>
        );


    }


}

export default StakeForm;
