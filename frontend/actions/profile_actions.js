import * as ProfileAPIUtil from '../utils/profile'; 
import { receiveCurrentUser } from './session_actions';
//import currentUser from sessionsactions

// export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; 

// const receiveProfile= user => ( { 
//     type: RECEIVE_PROFILE, 
//     user
// })

// export const createProfile = user => dispatch ( 
//     ProfileAPIUtil.currentUserProfile(user).then(user=> dispatch(receiveProfile(user)))
// ); 

// export const visitProfile = userId => dispatch ( 
//     ProfileAPIUtil.fetchProfile(userId).then(userId=> dispatch(receiveProfile(userId)))
// );
 
export const updateProfile = userId => dispatch => ( 
    ProfileAPIUtil.updateProfile(userId).then(userId=> dispatch(receiveCurrentUser(userId)))
); 


