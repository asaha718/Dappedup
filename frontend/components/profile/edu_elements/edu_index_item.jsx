import React from 'react'; 

const EduIndexItem=({ edu, deleteEdu, currentUserId, updateEdu})=> {
    const removeEdu= currentUserId === edu.user_id ?
        <button className='delete-edu-btn' onClick={()=> deleteEdu(edu.id)} >
            <i className="fa fa-trash">delete</i>
        </button> : <p> </p>; 
    return (
        <div className="edu-index-items">
            <li>
                <div className="institution-name">
                    <h3>{edu.school}</h3>
                </div>
                <div className="edu-info-ctn">
                    <p>{edu.field_of_study}</p>
                    <p>{edu.start_date} to {edu.end_date}</p>
                </div>
                <div className="delete-edu-btn-ctn">
                    {removeEdu}
                </div>
            </li>
        </div>
    )
}

export default EduIndexItem