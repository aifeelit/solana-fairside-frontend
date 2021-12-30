import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons"

const TableRow = () => {
  
  return (
    <tr>
        <td>
            <div>
                <p className="mb-1">Compound Finance Contract Hijack</p>
                <div>
                    <span className="badge__voting badge bg-primary me-2">Voting</span>
                    <small>143 - Submitted September 29th, 2021</small>
                </div>
            </div>
        </td>
        <td className="governance__progress">
            <div className="d-flex justify-content-end">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                <p>In Progress</p>
            </div>
        </td>
    </tr>
  );
}

export default TableRow;
