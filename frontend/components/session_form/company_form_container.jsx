import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {clearSessionErrors, signup} from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mSTP= ({ errors })=> ({ 
    errors: errors.session, 
    formType: 'Signup Company', 
    navLink: <Link to="/login">Log in</Link>
})

const mDTP= (dispatch)=> ({ 
    processForm: (user) => dispatch(signup(user)), 
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(SessionForm); 