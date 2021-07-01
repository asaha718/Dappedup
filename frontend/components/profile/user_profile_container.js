import {connect} from 'react-redux'; 
import { fetchProfiles } from '../../actions/profile_actions';
import { updateProfile, visitProfile } from '../../actions/profile_actions';
import { createConnection, deleteConnection, fetchProfileConnections } from '../../actions/connection_actions'; 
import { openModal } from '../../actions/modal_actions'; 
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'; 



const mSTP= (state, ownProps) => {
    // console.log(ownProps);
    // debugger
    let profileId= Number(ownProps.match.params.id ); 
    return {
        userId: Number(ownProps.match.params.id), 
        currentUsersProfile: state.entities.users[state.session.id], 
        userProfile: state.entities.users[profileId], 
    } 
}

const mDTP= dispatch => {
    // debugger
    return {
    visitProfile: userId=> dispatch(visitProfile(userId)), 
    fetchProfiles: () => dispatch(fetchProfiles()),  
    updateProfile: userId => dispatch(updateProfile(userId)),
    createConnection: (userId)=> dispatch(createConnection(userId)),
    fetchProfileConnections: ()=> dispatch(fetchProfileConnections()), 
    deleteConnection: (userId)=> dispatch(deleteConnection(userId)), 
    openModal: modal=> dispatch(openModal(modal)) 
}}

export default connect(mSTP, mDTP)(UserProfile); 