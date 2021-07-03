import {connect} from 'react-redux'; 
import { fetchProfiles } from '../../actions/profile_actions';
import { updateProfile, visitProfile } from '../../actions/profile_actions';
// import { createConnection, deleteConnection, fetchProfileConnections } from '../../actions/connection_actions';
import { createFollow, fetchCurrentUserFollows } from '../../actions/follow_actions'; 
import { openModal } from '../../actions/modal_actions'; 
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'; 



const mSTP= (state, ownProps) => {
    console.log(state);
    // debugger
    let profileId= Number(ownProps.match.params.id ); 
    return {
        userId: Number(ownProps.match.params.id), 
        currentUsersProfile: state.entities.users[state.session.id], 
        userProfile: state.entities.users[profileId], 
        followed: state.entities.follows.current.followed, 
        followers: [...new Set(state.entities.follows.profile.followed ?
            state.entities.follows.profile.followings.concat(
            state.entities.follows.profile.followers ? state.entities.follows.profile.followers : []
        ) : state.entities.follows.profile.followers ? state.entities.follows.profile.followers : [])].length
    } 
}

const mDTP= dispatch => {
    // debugger
    return {
    visitProfile: userId=> dispatch(visitProfile(userId)), 
    fetchProfiles: () => dispatch(fetchProfiles()),  
    updateProfile: userId => dispatch(updateProfile(userId)),
    createFollow: id => dispatch(createFollow(id)),
    fetchCurrentUserFollows: ()=> dispatch(fetchCurrentUserFollows()),
    // createConnection: (userId)=> dispatch(createConnection(userId)),
    // fetchProfileConnections: ()=> dispatch(fetchProfileConnections()), 
    // deleteConnection: (userId)=> dispatch(deleteConnection(userId)), 
    openModal: modal=> dispatch(openModal(modal)) 
}}

export default connect(mSTP, mDTP)(UserProfile); 