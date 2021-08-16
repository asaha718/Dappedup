import React from "react";

const EduIndexItem = ({ edu, deleteEdu, currentUserId, openModal }) => {
  const userOpt =
    currentUserId === edu.user_id ? (
      <div className="edu-option-btns">
        <button className="delete-edu-btn" onClick={() => deleteEdu(edu.id)}>
          <i className="fa fa-trash"></i> delete
        </button>
        <button
          className="edit-edu-btn"
          onClick={() => openModal({ modal: "editEdu", id: edu.id })}
        >
          <i className="fa fa-edit"></i>edit
        </button>
      </div>
    ) : (
      <p> </p>
    );
  const endDate = edu.end_date ? edu.end_date : "present";
  return (
    <div className="edu-index-items">
      <li>
        <div className="institution-name">
          <h3>{edu.school}</h3>
        </div>
        <div className="edu-info-ctn">
          <p>{edu.field_of_study}</p>
          <p>
            {edu.start_date} to {endDate}{" "}
          </p>
        </div>
        <div className="delete-edu-btn-ctn">{userOpt}</div>
      </li>
    </div>
  );
};

export default EduIndexItem;
