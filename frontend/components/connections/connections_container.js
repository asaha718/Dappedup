import { connect } from 'react-redux'; 
import { fetchProfiles } from '../../actions/profile_actions';
import { createFollow, destroyFollow, fetchCurrentUserFollows } from '../../actions/follow_actions'; 
import Connections from './connections';

const mSTP= (state)=> { 
    return { 
        users: Object.values(state.entities.users), 
        followingArr: state.entities.follows.current.followings
    }
}

const mDTP = (dispatch) => { 
    return { 
        fetchProfiles: ()=> dispatch(fetchProfiles()), 
        fetchCurrentUserFollows: ()=> dispatch(fetchCurrentUserFollows()), 
        createFollow: userId=> dispatch(createFollow(userId)), 
        removeFollow: userId=> dispatch(destroyFollow(userId))
    }
}

export default connect(mSTP, mDTP)(Connections)