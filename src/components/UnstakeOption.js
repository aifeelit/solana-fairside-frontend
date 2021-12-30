import React from 'react';

import eth_white from '../assets/imgs/EthereumWHITECIRCLE.svg';
import question from '../assets/imgs/question-circle-regular.svg';

class UnstakeOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isActiveUnstake: false,
            confirm: '',
            notification: false,
            modalShow: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            notification: true,
        });
    }

    render(){

        return (
            <div className="d-flex align-items-start justify-content-center stake--header mt-4 mt-md-0">
                <div className="stake__header--wrapper mb-2">
                    <h5 className="h5--form me-2">Unstake ETH</h5>
                </div>
                <p className="mb-3">
                    Unstake ETH and receive FSD while staking
                </p>
            </div>
        );

    }
}

export default UnstakeOption;
