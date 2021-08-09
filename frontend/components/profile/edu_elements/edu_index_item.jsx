import React from 'react'; 

const EduIndexItem=({ edu, deleteEdu, currentUserId, updateEdu})=> {
    const removeEdu= currentUserId === edu.user_id ?
        <button className='delete-edu-btn' onClick={()=> deleteEdu(edu.id)} >
            <i className="fa fa-trash"></i> delete
        </button> : <p> </p>; 
        const endDate = edu.end_date ? edu.end_date : 'present'
    return (
        <div className="edu-index-items">
            <li>
                <div className="institution-name">
                    <h3>{edu.school}</h3>
                </div>
                <div className="edu-info-ctn">
                    <p>{edu.field_of_study}</p>
                    <p>{edu.start_date} to {endDate} </p>
                </div>
                <div className="delete-edu-btn-ctn">
                    {removeEdu}
                </div>
            </li>
        </div>
    )
}

export default EduIndexItem