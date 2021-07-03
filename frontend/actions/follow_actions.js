import * as FollowAPIUtil from "../utils/follow"; 

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_CURRENT_USER_FOLLOWS = 'RECEIVE_CURRENT_USER_FOLLOWS';


const receiveFollow = followedId => ({
    type: RECEIVE_FOLLOW,
    followedId
}); 

const receiveCurrentUserFollows= (follows)=> ({ 
    type: RECEIVE_CURRENT_USER_FOLLOWS, 
    follows
}); 

export const createFollow = userId => dispatch =>{ 
    return FollowAPIUtil.createFollow(userId).then(()=> dispatch(receiveFollow(userId)))
} 

export const fetchCurrentUserFollows =() => dispatch => { 
    return FollowAPIUtil.fetchCurrentUserFollows().then((follows)=> dispatch(receiveCurrentUserFollows(follows)))
}