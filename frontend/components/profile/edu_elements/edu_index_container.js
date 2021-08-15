import { connect } from 'react-redux';
import {orderItems} from '../../../utils/selector';

import { fetchAllEdu, updateEdu, deleteEdu } from '../../../actions/edu_actions'; 
import EduIndex from './edu_index'; 

const mSTP= (state) =>{
    return { 
    educations: orderItems(state.entities.educations), 
    currentUserId: state.session.id, 
    }
}; 

const mDTP= dispatch => ({ 
    fetchEdus: ()=> dispatch(fetchAllEdu()), 
    updateEdu: (edu)=> dispatch(updateEdu(edu)), 
    deleteEdu: (edu)=> dispatch(deleteEdu(edu))
})

export default connect(mSTP, mDTP)(EduIndex); 