import React from 'react'; 

const EduIndexItem=({ edu, updateEdu})=> { 
    return (
        <div>
            <li>
                <div className="institution-name">
                    <h3>{edu.school}</h3>
                </div>
                <div className="edu-info-cnt">
                    <p>{edu.field_of_study}</p>
                    <p>{edu.start_date} to {edu.end_date}</p>
                </div>
            </li>
        </div>
    )
}

export default EduIndexItem