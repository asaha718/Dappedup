// import { RECEIVE_PROFILE } from '../actions/profile_actions'; 
// import {RECEIVE_CONNECTION, REMOVE_CONNECTION, RECEIVE_PROFILE_CONNECTIONS } from '../actions/connection_actions'; 

// const connectionReducer =(state = {user: {}, current: {}}, action)=> { 
//     Object.freeze(state); 
//     let newState = {...state}; 

//     switch (action.type) {
//         case RECEIVE_PROFILE:
//             newState.user.followers = action.user.followers;
//             newState.user.followed = action.user.followed;
//             return newState; 
//         case RECEIVE_CONNECTION: 
//             newState.current.followed.push(action.connecteeId); 
//             return newState;
//         case RECEIVE_PROFILE_CONNECTIONS: 
//             newState.current.followers = action.connections.followers;
//             newState.current.followed = action.connections.followed;
//             return newState;
//         case REMOVE_CONNECTION:
//             newState.current.followed.splice(newState.current.followed.indexOf(action.followeeId), 1);
//             return newState
//     default:
//             return state;
//     }
// }

// export default connectionReducer; 