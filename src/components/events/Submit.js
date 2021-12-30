import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons"

const Submit = () => {
 
    return (
        <div id="submit-event">
            <div className="main h-100 d-flex justify-content-cent flex-column">
                <div className="submit__info--wrapper">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div class="">
                                <label for="transactionID" class="form-label">Transaction ID</label>
                                <input type="text" id="transactionID" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div class="">
                                <label for="amountLost" class="form-label">Amount lost</label>
                                <input type="text" id="amountLost" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div class="">
                                <label for="dateOfEvent" class="form-label">Date of event</label>
                                <input type="text" id="dateOfEvent" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div class="">
                                <label for="exploiterAddress" class="form-label">Exploiter Address</label>
                                <input type="text" id="exploiterAddress" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row px-3 d-flex flex-fill">
                    <div className="col-12 col-md-8">
                        <div class="form-floating h-100">
                            <textarea class="form-control" placeholder="Provide context and additional info here" id="additionalContext"></textarea>
                            <label for="additionalContext">Provide context and additional info here...</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column">
                        <div className="approved__address">
                            <p>0x1aD91ee08f21bE3dE0BA2ba6918E714dA6B45836</p>
                        </div>
                        <div className="approved__upload d-flex justify-content-center mt-3">
                            <div className="approved__upload--inner d-flex justify-content-center flex-column">
                                <FontAwesomeIcon icon={faCloudUploadAlt} className="approved__upload--icon" />
                                <button className="btn mt-3">Browse Files</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row px-3 mt-0 d-flex align-items-end last">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="events__button">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Submit;
