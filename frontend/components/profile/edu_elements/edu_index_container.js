import { connect } from 'react-redux';
import {orderItems} from '../../../utils/selector'; 

import { fetchAllEdu, updateEdu } from '../../../actions/edu_actions'; 
import EduIndex from './edu_index'; 

const mSTP= state =>{ 
    return { 
    educations: orderItems(state.entities.educations)
}}; 

const mDTP= dispatch => ({ 
    fetchEdus: ()=> dispatch(fetchAllEdu()), 
    updateEdu: (edu)=> dispatch(updateEdu(edu))
})

export default connect(mSTP, mDTP)(EduIndex); 