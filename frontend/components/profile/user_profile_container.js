import {connect} from 'react-redux'; 
import { updateProfile } from '../../actions/profile_actions';
import { openModal } from '../../actions/modal_actions'; 
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'


const mSTP= (state, ownProps) => {
    // console.log(ownProps);
    const profileId= ownProps.match.params.id 
    return {
        currentUsersProfile: state.entities.users[state.session.id], 
        userProfile: state.entities.users[profileId]
    } 
}

const mDTP= dispatch => ({  
    updateProfile: userId => dispatch(updateProfile(userId)),
    openModal: modal=> dispatch(openModal(modal)) 
})

export default connect(mSTP, mDTP)(UserProfile); 