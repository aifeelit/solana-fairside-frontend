import "bootstrap/dist/css/bootstrap.css";

import "./assets/scss/main.scss";

import React, {Fragment} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Membership from "./pages/Membership";
import Dashboard from "./pages/Dashboard";
import Stake from "./pages/Stake";
import Events from "./pages/Events";
import Assessments from "./pages/Assessments";
import Governance from "./pages/Governance";
import GovernanceSubmitProposal from "./components/GovernanceSubmitProposal";
import VoteProposal from "./components/VoteProposal";
import GovernanceProposals from "./components/GovernanceProposals";

import Dash_Members from "./components/Dash_Members";
import Dash_Stakers from "./components/Dash_Stakers";
import Dash_Governance from "./components/Dash_Governance";

import NotFoundPage from "./pages/NotFoundPage";


function App() {
 
  return (
    <Router basename="/dashboard-draft">
      <Fragment>
          <div className="circle"></div>
          <div className="container pt-3 px-md-0">
            <Header />
            <div className="wrapper bg-default h-90">
              <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/home">
                  <Redirect to="/"/>
                </Route>
                <Route path="/stake" component={Stake}/>

                <Route path="/dash/members" component={Dash_Members}/>
                <Route path="/dash/stakers" component={Dash_Stakers}/>
                <Route path="/dash/governance" component={Dash_Governance}/>

                <Route path="/membership" component={Membership}/>
                <Route path="/events" component={Events}/>
                <Route path="/assessments" component={Assessments}/>
                <Route exact path="/governance" component={Governance}/>
                <Route path="/governance/submit-proposal" component={GovernanceSubmitProposal}/>
                <Route path="/governance/vote-proposal" component={VoteProposal}/>
                <Route path="/governance/proposals" component={GovernanceProposals}/>
                <Route path="*" component={NotFoundPage}/>
              </Switch>
            </div>
            <Footer />
          </div>
      </Fragment>
    </Router>
  );

}

export default App;
