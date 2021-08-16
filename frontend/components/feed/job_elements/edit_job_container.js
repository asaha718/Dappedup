import { connect } from "react-redux";
import { closeModal } from "../../../actions/modal_actions"; 
import {fetchJob, updateJob} from "../../../actions/job_actions"; 
import EditJobItem from "./edit_job_item";

const mSTP = (state) => {
  return {
    job: state.entities.jobs[state.ui.modal.id],
  };
}; 

const mDTP = (dispatch) => ({
  fetchJob: (jobId) => dispatch(fetchJob(jobId)),
  updateJob: (jobId) => dispatch(updateJob(jobId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditJobItem); 