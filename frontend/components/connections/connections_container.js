import { connect } from 'react-redux'; 
import { fetchProfiles } from '../../actions/profile_actions';
import Connections from './connections';

const mSTP= (state)=> { 
    return { 
        users: Object.values(state.entities.users)
    }
}

const mDTP = (dispatch) => { 
    return { 
        fetchProfiles: ()=> dispatch(fetchProfiles())
    }
}

export default connect(mSTP, mDTP)(Connections)