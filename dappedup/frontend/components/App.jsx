import React from "react";
import GreetingContainer from "./greeting/greeting_container"; 
import {Link, Route, Switch} from "react-router-dom"; 
import LoginFormContainer from "./session_form/login_form_container"; 
import SignupFormContainer from "./session_form/signup_form_container";



const App = () => (
  <div>
      <header>
        <Link to="/" className="header-link">
        <h1>Dapped Up</h1>
        </Link>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />  
      </Switch>
  </div>
);

export default App;