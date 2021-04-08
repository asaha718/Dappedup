import React from "react";
import GreetingContainer from "./greeting/greeting_container"; 
import {Link, Redirect, Route, Switch} from "react-router-dom"; 
import LoginFormContainer from "./session_form/login_form_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import HomePageContainer from "./home/home_container"
import {AuthRoute} from "../utils/route_util"


const noMatchPage=()=> { 
  return ( 
    <h3>404 -Not found</h3>
  )
}; 

const App = () => (
  <div>
      <header>
        <Link to="/" className="header-link">
        <h1>DappedUp</h1>
        </Link>
        <GreetingContainer />
      </header>
      <div className="backGround">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <Route exact path="/" component={HomePageContainer}/>
          <Route path="*" exact component={noMatchPage} />
        </Switch>
      </div>
  </div>
);

export default App;