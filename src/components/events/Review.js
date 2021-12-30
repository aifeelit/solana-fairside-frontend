import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

const Review = () => {

    return (
        <div className="h-100 col-12">
            <div className="table-responsive events__table--wrapper">
                <table className="table table-hover table-striped align-middle">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Project</th>
                        <th className="text-center">Action</th>
                        <th className="text-center">Claim</th>
                        <th className="text-center">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>
                        <p className="mb-0">Compound Finance Contract Hijack</p>
                        <small>Submitted September 29th, 2021</small>
                        </td>
                        <td className="text-center text-primary">View</td>
                        <td className="text-center text-primary">Claimable</td>
                        <td className="text-center events__progress">
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-2" />
                            <p>Approved Event</p>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <p className="mb-0">Compound Finance Contract Hijack</p>
                        <small>Submitted September 29th, 2021</small>
                        </td>
                        <td className="text-center text-primary">View</td>
                        <td className="text-center text-primary">Claimable</td>
                        <td className="text-center events__progress">
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-2" />
                            <p>Approved Event</p>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Review;
