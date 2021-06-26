import {connect} from 'react-redux'; 
import { updateProfile, visitProfile } from '../../actions/profile_actions';
import { openModal } from '../../actions/modal_actions'; 
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'


const mSTP= (state, ownProps) => {
    // console.log(ownProps);
    let profileId= ownProps.match.params.id 
    return {
        userId: ownProps.match.params.id, 
        currentUsersProfile: state.entities.users[state.session.id], 
        userProfile: state.entities.users[profileId]
    } 
}

const mDTP= dispatch => {
    // debugger
    return {
    visitProfile: userId=> dispatch(visitProfile(userId)),  
    updateProfile: userId => dispatch(updateProfile(userId)),
    openModal: modal=> dispatch(openModal(modal)) 
}}

export default connect(mSTP, mDTP)(UserProfile); 