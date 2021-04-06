import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {signup} from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mSTP= (state, ownProps)=> ({ 
    errors: state.errors.session, 
    formType: 'signup', 
    navLink: <Link to="/signup">Sign up </Link>
})

const mDTP= (dispatch)=> ({ 
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm); 