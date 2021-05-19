import { connect } from 'react-redux'; 
import {createEdu} from '../../../actions/edu_actions';
import {closeModal} from '../../../actions/modal_actions'; 
import AddEdu from './add_edu_form'; 

const mSTP= state => ({ 
    edu: { 
        school: '', 
        field_of_study: '', 
        start_date: '', 
        end_date: ''
    }
}); 

const mDTP= dispatch=> ({ 
    createEdu: edu=> dispatch(createEdu(edu)), 
    closeModal: ()=>dispatch(closeModal())
})

export default connect(mSTP, mDTP)(AddEdu); 