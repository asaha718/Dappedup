import {connect} from 'react-redux'; 
import { updateProfile } from '../../actions/profile_actions';
import { closeModal } from '../../actions/modal_actions'; 
import EditProfileForm from './edit_profile';

const mSTP = (state)=> ({ 
    profile: state.entities.users[state.session.id]
}); 

const mDTP= dispatch => ({  
    updateProfile: userId => dispatch(updateProfile(userId)),
    closeModal: ()=> dispatch(closeModal()) 
})

export default connect(mSTP, mDTP)(EditProfileForm)

