import { connect } from 'react-redux';
import { fetchCurrentUserFollows } from '../../actions/follow_actions';
import UserSideCard from './user_sidecard'

const mSTP= (state) => { 
    console.log(state)
    return { 
    profile: state.entities.users[state.session.id], 
    following: state.entities.follows.current.followings
}}; 

const mDTP = dispatch => ({ 
    fetchCurrentUserFollows: ()=> dispatch(fetchCurrentUserFollows())
})
export default connect(mSTP, mDTP)(UserSideCard)