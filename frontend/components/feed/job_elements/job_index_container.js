import { connect } from "react-redux";
import { orderItems } from "../../../utils/selector";
import { openModal } from "../../../actions/modal_actions";

import {
  fetchAllJobs,
  updateJob,
  deleteJob,
} from "../../../actions/job_actions";
import JobIndex from "./job_index";

const mSTP = (state) => {
  return {
    jobs: orderItems(state.entities.jobs),
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => ({
  fetchJobs: () => dispatch(fetchAllJobs()),
  updateJob: (job) => dispatch(updateJob(job)),
  deleteJob: (job) => dispatch(deleteJob(job)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(JobIndex);
