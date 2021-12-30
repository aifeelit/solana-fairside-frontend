import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle, faBan} from "@fortawesome/free-solid-svg-icons"

class Approved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const approvedArr = [
            {
                "name": "Compound Finance Contract Hijack",
                "submitted": "Submitted September 29th, 2021",
                "claims": "15 ETH",
                "claimsNum": "516",
                "loss": "($29,000 USD at time of loss)",
                "approved": true,
            },
            {
                "name": "Compound Finance Contract Hijack",
                "submitted": "Submitted September 29th, 2021",
                "claims": "15 ETH",
                "claimsNum": "516",
                "loss": "($29,000 USD at time of loss)",
                "approved": false,
            },
        ]

        return (
            <div id="approved-event" className="h-100 col-12">
                <div className="table-responsive events__table--wrapper">
                    <table className="table table-hover table-striped align-middle">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Project</th>
                                <th>Amount Paid</th>
                                <th className="text-center"># of claims</th>
                                <th className="text-center">Make a claim</th>
                                <th className="text-center">CSR Approved</th>
                            </tr>
                        </thead>
                        <tbody>

                            {approvedArr.map((approve, index) => (
                                <tr>
                                    <td></td>
                                    <td className="pe-4">
                                        <p className="mb-0">{approve.name}</p>
                                        <small>{approve.submitted}</small>
                                    </td>
                                    <td className="pe-4">
                                        <p className="mb-0">{approve.claims}</p>
                                        <small>{approve.loss}</small>
                                    </td>
                                    <td className="text-center">{approve.claimsNum}</td>
                                    <td className="text-center text-primary">
                                        {approve.approved ? (
                                            <button class="btn approve__view--btn">Claim</button>
                                        ) : (
                                            <button class="btn approve__view--btn notapproved">Claim</button>
                                        )}
                                    </td>
                                    <td className="text-center text-primary">
                                        {approve.approved ? (
                                            <FontAwesomeIcon icon={faCheckCircle} className="approve--approved" />
                                        ) : (
                                            <FontAwesomeIcon icon={faBan} className="approve--notapproved" />
                                        )}
                                    </td>
                                </tr>
                            ))}

                            
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }
}

export default Approved;
