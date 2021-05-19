import { connect } from 'react-redux';
import { createJob } from '../../../actions/job_actions';
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
    createJob: job=> dispatch(createJob(job))
})

export default connect(mSTP, mDTP)(AddJob)