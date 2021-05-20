import * as EduApiUtil from '../utils/education'; 

export const RECEIVE_ALL_EDU= "RECEIVE_ALL_EDU"; 
export const RECEIVE_EDU= "RECEIVE_EDU";
export const REMOVE_EDU= "REMOVE_EDU";

const receiveEducations= (educations)=> ({ 
    type: RECEIVE_ALL_EDU, 
    educations
})

const receiveEdu= (edu)=> ({ 
    type: RECEIVE_EDU, 
    edu
})

const removeEdu= (edu) => ({ 
    type: REMOVE_EDU, 
    eduId: edu.id
}) 

export const fetchAllEdu= () => (dispatch)=>( 
    EduApiUtil.fetchEdus().then(edus => dispatch(receiveEducations(edus)))
);

export const fetchEdu=(eduId)=> (dispatch)=> ( 
    EduApiUtil.fetchEdu(eduId).then(edu=> dispatch(receiveEdu(edu)))
); 

export const createEdu= (edu) => (dispatch) => ( 
    EduApiUtil.createEdu(edu).then(edu => dispatch(receiveEdu(edu)))
); 

export const updateEdu= (edu) => (dispatch) => ( 
    EduApiUtil.updateEdu(edu).then(edu => dispatch(receiveEdu(edu)))
); 

export const deleteEdu= (eduId) => dispatch => ( 
    EduApiUtil.deleteEdu(eduId).then((edu) => dispatch(removeEdu(edu)))
);
