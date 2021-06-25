import React from "react";
import GreetingContainer from "./greeting/greeting_container"; 
import {Link, Redirect, Route, Switch, BrowserRouter, withRouter} from "react-router-dom"; 
import LoginFormContainer from "./session_form/login_form_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import HomePageContainer from "./home/home_container";
import UserProfileContainer from "./profile/user_profile_container";
import {AuthRoute, ProtectedRoute} from "../utils/route_util";
import PostFormContainer from "./feed/create_post_form_container";
import ContactInfo from "./contact/contact";
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
        <Route exact path="/" component={HomePageContainer}/>
        <ProtectedRoute path="/profile/:id" component={UserProfileContainer}/>
        <ProtectedRoute path="/feed" component={PostFormContainer}/>
        <Route component={noMatchPage} />
      </Switch>
      <footer>
        <ContactInfo /> 
      </footer>
  </div>

  )
};

export default withRouter(App);