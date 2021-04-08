import { connect } from 'react-redux';
import HomePage from './home_page'

const mSTP = state => ({ 
    currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP, null)(HomePage);