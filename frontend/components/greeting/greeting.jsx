import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="signup-btn">
        <Link to="/signup" className="nav-link">Join Now</Link>
      </div>
      <div className="login-btn">
        <Link to="/login" className="nav-link">Sign In</Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="feed-btn">
        <Link to="/feed"><i className="fa fa-home"></i>Home</Link>
      </div>
      <div className="profile-btn">
        <Link to="/profile"><i className="fa fa-user"></i>Profile</Link>
      </div>
      <div className="header-name">
        <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/> 
        <h2 className="name">{currentUser.full_name}</h2>
      </div>
      <button className="header-button" onClick={logout}><i className="fa fa-sign-out"></i>Sign out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
