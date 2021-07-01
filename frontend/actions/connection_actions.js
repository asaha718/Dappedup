// import * as ConnectionAPIUtil from '../utils/connection'; 

// export const RECEIVE_CONNECTION= "RECEIVE_CONNECTION";
// export const REMOVE_CONNECTION= "REMOVE_CONNECTION"; 
// export const RECEIVE_PROFILE_CONNECTIONS = 'RECEIVE_PROFILE_CONNECTIONS'; 

// const receiveConnection = connecteeId => ({
//     type: RECEIVE_CONNECTION,
//     connecteeId
// }); 

// const removeConnection = connecteeId => ({
//     type: REMOVE_CONNECTION,
//     connecteeId
// }); 

// const receiveProfileConnections = connections => ({ 
//     type: RECEIVE_PROFILE_CONNECTIONS, 
//     connections
// }); 

// export const createConnection = userId => dispatch => (
//     ConnectionAPIUtil.createConnection(userId).then(connecteeId=> dispatch(receiveConnection(connecteeId)))
// ); 

// export const deleteConnection = userId => dispatch => (
//     ConnectionAPIUtil.destroyConnection(userId).then(connecteeId=> dispatch(removeConnection(connecteeId)))
// ); 

// export const fetchProfileConnections = () => dispatch => (
//     ConnectionAPIUtil.fetchConnections().then(connections=> dispatch(receiveProfileConnections(connections)))
// ); 

