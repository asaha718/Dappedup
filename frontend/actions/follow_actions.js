import * as FollowAPIUtil from "../utils/follow"; 

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_CURRENT_USER_FOLLOWS = 'RECEIVE_CURRENT_USER_FOLLOWS';
export const REMOVE_FOLLOW= 'REMOVE_FOLLOW'; 


const receiveFollow = followedId => ({
    type: RECEIVE_FOLLOW,
    followedId
}); 

const removeFollow = followedId => ({ 
    type: REMOVE_FOLLOW, 
    followedId
})

const receiveCurrentUserFollows= (follows)=> ({ 
    type: RECEIVE_CURRENT_USER_FOLLOWS, 
    follows
}); 

export const createFollow = userId => dispatch =>{ 
    // debugger
    return FollowAPIUtil.createFollow(userId).then(()=> dispatch(receiveFollow(userId)))
} 

export const fetchCurrentUserFollows =() => dispatch => { 
    return FollowAPIUtil.fetchCurrentUserFollows().then((follows)=> dispatch(receiveCurrentUserFollows(follows)))
}

export const destroyFollow = userId => dispatch => { 
    return FollowAPIUtil.destroyFollow(userId).then(()=> dispatch(removeFollow(userId)))
}