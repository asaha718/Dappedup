import React from 'react'; 
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostContainer from '../feed/edit_post_container';
import AddJobContainer from '../feed/job_elements/add_job_container';
import AddEduContainer from '../profile/edu_elements/add_edu_container'; 
import EditProfileContainer from '../profile/edit_profile_container'; 

const Modal= ({ modal, closeModal, id})=> { 
    if (!modal){ 
        return null; 
    }
    let component;
    switch (modal) {
      case 'edit':
        component = <EditPostContainer postId={id} /> ;
        break;
      case 'addJob': 
        component = <AddJobContainer />; 
        break;
      case 'addEdu':
          component = <AddEduContainer />; 
        break; 
      case 'editProfile': 
          component = <EditProfileContainer /> ; 
        break 
      default:
        return null;
    }
    return ( 
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    return {
      modal: state.ui.modal.modal, 
      id: state.ui.modal.id
    };
};
  
const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};
  
export default connect(mSTP, mDTP)(Modal);