import React from 'react'; 
import {connect} from 'react-redux'; 
import { updateProfile } from '../../actions/profile_actions';
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'
import { fetchAllEdu } from '../../actions/edu_actions';

const mSTP= (state) => {
    return {
        profile: state.entities.users[state.session.id],  
        education: state.entities.educations
    } 
}

const mDTP= dispatch => ({
    fetchAllEdu: ()=> dispatch(fetchAllEdu()),  
    updateProfile: userId => dispatch(updateProfile(userId))
})

export default connect(mSTP, mDTP)(UserProfile); 