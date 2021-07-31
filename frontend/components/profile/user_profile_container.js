import {connect} from 'react-redux'; 
import { fetchProfiles } from '../../actions/profile_actions';
import { updateProfile, visitProfile } from '../../actions/profile_actions';
import { createFollow, fetchCurrentUserFollows, destroyFollow } from '../../actions/follow_actions'; 
import { openModal } from '../../actions/modal_actions'; 
import UserProfile from './user_profile'; 
import EditProfileForm from './edit_profile'; 



const mSTP= (state, ownProps) => {
    let profileId= Number(ownProps.match.params.id ); 
    return {
        userId: Number(ownProps.match.params.id), 
        currentUsersProfile: state.entities.users[state.session.id], 
        userProfile: state.entities.users[profileId], 
        followed: state.entities.follows.current.followings, 
        // followers: state.entities.follows.profile.followers, 
        followerss: [...new Set(state.entities.follows.profile.followers ?
            state.entities.follows.profile.followers.concat(
            state.entities.follows.profile.followers ? state.entities.follows.profile.followers : []
        ) : state.entities.follows.profile.followers ? state.entities.follows.profile.followers : [])].length
    } 
}

const mDTP= dispatch => {
    return {
    visitProfile: userId=> dispatch(visitProfile(userId)), 
    fetchProfiles: () => dispatch(fetchProfiles()),  
    updateProfile: userId => dispatch(updateProfile(userId)),
    createFollow: id => dispatch(createFollow(id)),
    removeFollow: id => dispatch(destroyFollow(id)), 
    fetchCurrentUserFollows: ()=> dispatch(fetchCurrentUserFollows()),
    openModal: modal=> dispatch(openModal(modal)) 
}}

export default connect(mSTP, mDTP)(UserProfile); 