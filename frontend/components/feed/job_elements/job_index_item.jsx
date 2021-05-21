import React from 'react'; 

const JobIndexItem= ({job, deleteJob ,updateJob}) => { 
    return(
        <div className="job-index-items">
            <li>
                <div className="work-title">
                    <h3>{job.title}</h3>
                    <h3>{job.company}</h3>
                </div>
                <div className="job-info-ctn">
                    <p>{job.field}</p>
                    <p>{job.location}</p>
                    <p>{job.start_date} to {job.end_date}</p>
                    <div className="work-description">
                        <p>{job.description}</p>
                    </div>
                </div>
                <div className="delete-job-btn-ctn">
                    <button className='delete-job-btn' onClick={()=> deleteJob(job.id)} >
                        <i className="fa fa-trash">delete</i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default JobIndexItem