import { connect } from "react-redux";
import EditEduItem from "./edit_edu_item"; 
import { closeModal } from "../../../actions/modal_actions"; 
import { fetchEdu, updateEdu } from "../../../actions/edu_actions";

const mSTP= (state) => {
    return {
      edu: state.entities.educations[state.ui.modal.id] 
    };
}; 

const mDTP = (dispatch) => ({
  fetchEdu: (eduId) => dispatch(fetchEdu(eduId)),
  updateEdu: (eduId) => dispatch(updateEdu(eduId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditEduItem); 
