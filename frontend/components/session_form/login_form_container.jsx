import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {login} from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mSTP= ({ errors })=> ({ 
    errors: errors.session, 
    formType: 'login', 
    navLink: <Link to="/signup">Sign up </Link>
})

const mDTP= (dispatch)=> ({ 
    processForm: (user) => dispatch(login(user)), 
    clearErrors: () => dispatch(clearSessionErrors()), 
    demoUser:()=> dispatch(login({email: 'user@demo.com', 
    password: "123456", 
    full_name: 'Demo Person', 
    bio: 'A am trained in the modern art of demoing web applications. Feel free to contact me for any demo needs.', 
    location: 'Demo Land', 
    job_title: 'Professonal Demo Artiest'})
    )
})

export default connect(mSTP, mDTP)(SessionForm);