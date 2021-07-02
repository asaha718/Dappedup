import * as FollowAPIUtil from "../utils/follow"; 

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

const receiveFollow = followedId => ({
    type: RECEIVE_FOLLOW,
    followedId
}); 

export const createFollow = userId => dispatch =>{ 
    return FollowAPIUtil.createFollow(userId).then(()=> dispatch(receiveFollow(userId)))
} 