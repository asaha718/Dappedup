import { connect } from 'react-redux';
import UserSideCard from './user_sidecard'

const mSTP= (state) => { 
    console.log(state); 
    return { 
    profile: state.entities.users[state.session.id]
}}; 

export default connect(mSTP, null)(UserSideCard)