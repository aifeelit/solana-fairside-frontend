import React from 'react';
import TableRow from '../components/TableRow';

import Submit from '../components/events/Submit';
import Review from '../components/events/Review';
import Approved from '../components/events/Approved';
import Vote from '../components/events/Vote';

import '../assets/scss/events.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle, faChevronRight} from "@fortawesome/free-solid-svg-icons"

class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEvent : 'Review',
      review: 'active',
      vote: '',
      approved: '',
      submit: '', 
      pageTitle: 'Events',
      pageDescription: 'Assess claims and monitor claim status'
    }
  }

  selectedEvent(selectedEvt) {
    this.setState({      
      selectedEvent: selectedEvt,
    });
    if(selectedEvt === 'Review'){
      this.setState({      
        review: 'active',
        vote: '',
        approved: '',
        submit: '',
        pageTitle: 'Events',
        pageDescription: 'Assess claims and monitor claim status' 
      });
    }else if(selectedEvt === 'Vote'){
      this.setState({      
        review: '',
        vote: 'active',
        approved: '',
        submit: '', 
        pageTitle: 'Vote',
        pageDescription: 'Vote on events to decide the outcome'
      });
    }else if(selectedEvt === 'Approved'){
      this.setState({      
        review: '',
        vote: '',
        approved: 'active',
        submit: '', 
        pageTitle: 'Approved Events',
        pageDescription: 'Claim approved submissions'
      });
    }else if(selectedEvt === 'Submit'){
      this.setState({      
        review: '',
        vote: '',
        approved: '',
        submit: 'active',
        pageTitle: 'Submit Event',
        pageDescription: 'Provide details regarding event'
      });
    }
  }
  
  render() {
    return (
      <section id="events">
        <div className="main">
          <div className="row main-wrapper">

            <div className="col-12 mb-4">
              <div className="row">
                <div className="col-12 col-md-6 mb-4 mb-md-2">
                  <h2 className="mb-1">{this.state.pageTitle}</h2>
                  <p>{this.state.pageDescription}</p>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center flex-column">
                  <div className="events__buttons d-block d-md-flex justify-content-end">
                    <button className={"events__button " + this.state.review} onClick={this.selectedEvent.bind(this, 'Review')}>Review Events</button>
                    <button className={"events__button ms-md-4 " + this.state.submit} onClick={this.selectedEvent.bind(this, 'Submit')}>Submit Event</button>
                    <button className={"events__button ms-md-4 " + this.state.approved} onClick={this.selectedEvent.bind(this, 'Approved')}>Approved Events</button>
                    <button className={"events__button ms-md-4 " + this.state.vote} onClick={this.selectedEvent.bind(this, 'Vote')}>Vote</button>
                  </div>
                </div>
              </div>
            </div>

            { this.state.selectedEvent === 'Review' && 
              <Review />
            }
            { this.state.selectedEvent === 'Submit' && 
              <Submit />
            }
            { this.state.selectedEvent === 'Vote' && 
              <Vote />
            }
            { this.state.selectedEvent === 'Approved' && 
              <Approved />
            }
            
          </div>
        </div>
      </section>
    );

  }
}

export default Events;
