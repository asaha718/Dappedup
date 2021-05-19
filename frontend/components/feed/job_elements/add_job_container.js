import { connect } from 'react-redux';
import { createJob } from '../../../actions/job_actions';
import { closeModal } from '../../../actions/modal_actions';
import AddJob from './add_job_form';

const mSTP= (state) => ({ 
    job: { 
        title: '', 
        field:'',
        company: '', 
        location: '', 
        description: '', 
        start_date: '', 
        end_date: '' 
    }
}); 

const mDTP = dispatch => ({ 
    createJob: job=> dispatch(createJob(job)), 
    closeModal: ()=> dispatch(closeModal())
})

export default connect(mSTP, mDTP)(AddJob)