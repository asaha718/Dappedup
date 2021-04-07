import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {clearSessionErrors, signup} from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mSTP= ({ errors })=> ({ 
    errors: errors.session, 
    formType: 'signup', 
    navLink: <Link to="/login">Login instead</Link>
})

const mDTP= (dispatch)=> ({ 
    processForm: (user) => dispatch(signup(user)), 
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(SessionForm); 