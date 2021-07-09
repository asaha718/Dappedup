import React from "react";
import GreetingContainer from "./greeting/greeting_container"; 
import {Link, Redirect, Route, Switch, BrowserRouter, withRouter} from "react-router-dom"; 
import LoginFormContainer from "./session_form/login_form_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import CompanySignupFormContainer from "./session_form/company_form_container"; 
import HomePageContainer from "./home/home_container";
import UserProfileContainer from "./profile/user_profile_container";
import {AuthRoute, ProtectedRoute} from "../utils/route_util";
import PostFormContainer from "./feed/create_post_form_container";
import ConnectionsContainer from "./connections/connections_container"
import ContactInfo from "./contact/contact";
import JobPosts from "./jobs_feed/jobs/job_post_index_container"; 
import Modal from "./modal/modal"

const noMatchPage=()=> { 
  return ( 
    <h3>404 -Not found</h3>
  )
}; 

const App = (props) => {
  // console.log(props)
  let header= <header>
                <Link to="/feed" className="header-link">
                  <h1>DappedUp</h1>
                </Link>
                <GreetingContainer />
              </header>; 
  return( 
  <div className="application">
    <Modal />
    
      {
        props.location.pathname === "/login" || props.location.pathname === "/signup" ? null : header
      }

      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/signup-company" component={CompanySignupFormContainer} />
        <Route exact path="/" component={HomePageContainer}/>
        <ProtectedRoute exact path="/network" component={ConnectionsContainer} />
        <ProtectedRoute path="/feed" component={PostFormContainer}/>
        <ProtectedRoute path="/jobs" component={JobPosts}/>
        <ProtectedRoute path="/profile/:id" component={UserProfileContainer}/>
        <Route component={noMatchPage} />
      </Switch>
      <footer>
        <ContactInfo /> 
      </footer>
  </div>

  )
};

export default withRouter(App);