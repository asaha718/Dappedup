import React from 'react'; 
import {connect} from 'react-redux'; 
import { updateProfile } from '../../actions/profile_actions';
import UserProfile from './user_profile'

const mSTP= (state) => ({ 
    profile: state.entities.users[state.session.id] 
})

const mDTP= dispatch => ({ 
    updateProfile: userId => dispatch(updateProfile(userId))
})

export default connect(mSTP, mDTP)(UserProfile); 