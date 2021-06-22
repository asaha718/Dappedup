import {connect} from 'react-redux'; 
import { updateProfile } from '../../actions/profile_actions';
import { openModal } from '../../actions/modal_actions'; 
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'


const mSTP= (state) => {
    // console.log(state)
    return {
        profile: state.entities.users[state.session.id]
    } 
}

const mDTP= dispatch => ({  
    updateProfile: userId => dispatch(updateProfile(userId)),
    openModal: modal=> dispatch(openModal(modal)) 
})

export default connect(mSTP, mDTP)(UserProfile); 