import * as ProfileAPIUtil from '../utils/profile'; 
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'; 

const receiveProfile= user => ( { 
    type: RECEIVE_PROFILE, 
    user
})

// export const createProfile = user => dispatch ( 
//     ProfileAPIUtil.currentUserProfile(user).then(user=> dispatch(receiveProfile(user)))
// ); 


export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const visitProfile = userId => dispatch => ( 
    ProfileAPIUtil.fetchProfile(userId).then(user=> dispatch(receiveProfile(user)))
);

export const updateProfile = userId => dispatch => ( 
    ProfileAPIUtil.updateProfile(userId).then(userId=> dispatch(receiveCurrentUser(userId)))
); 

export const fetchProfiles= () => (dispatch)=>( 
    ProfileAPIUtil.fetchProfiles().then(users => dispatch(receiveAllUsers(users))
));

