import React from "react";

const JobIndexItem = ({ job, deleteJob, currentUserId, openModal}) => {
  const modJob =
    currentUserId === job.user_id ? (
      <div className="edu-option-btns">
        <button className="delete-job-btn" onClick={() => deleteJob(job.id)}>
          <i className="fa fa-trash"></i> delete
        </button>
        <button
          className="edit-edu-btn"
          onClick={() => openModal({ modal: "editJob", id: job.id })}
        >
          <i className="fa fa-edit"></i>edit
        </button>
      </div>
    ) : (
      <p> </p>
    );

  const endDate = job.end_date ? job.end_date : "present";
  return (
    <div className="job-index-items">
      <li>
        <div className="work-title">
          <h3>{job.title}</h3>
          <h3>{job.company}</h3>
        </div>
        <div className="job-info-ctn">
          <p>{job.field}</p>
          <p>{job.location}</p>
          <p>
            {job.start_date} to {endDate}
          </p>
          <div className="work-description">
            <p>{job.description}</p>
          </div>
        </div>
        <div className="delete-job-btn-ctn">{modJob}</div>
      </li>
    </div>
  );
};

export default JobIndexItem;
