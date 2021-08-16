import React from "react";

class EditEduItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.edu;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.todaysDate = this.todaysDate.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateEdu(this.state).then(this.props.closeModal());
  }

  todaysDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    return `${today}`;
  }

  render() {
    return (
      <div className="edit-post-form">
        <form onSubmit={this.handleSubmit}>
          <div className="edit-post-modal-header">
            <h2>Edit Education</h2>
            <div className="close-x-ctn">
              <div onClick={this.props.closeModal} className="close-x">
                &times;
              </div>
            </div>
          </div>
          <label>
            School:
            <input
              type="text"
              value={this.state.school}
              onChange={this.update("school")}
            />
          </label>
          <label>
            Field of Study:
            <input
              type="text"
              value={this.state.field_of_study}
              onChange={this.update("field_of_study")}
              required
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={this.state.start_date}
              max={this.todaysDate()}
              onChange={this.update("start_date")}
              required
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={this.state.end_date}
              min={this.state.start_date}
              onChange={this.update("end_date")}
            />
          </label>
          <p>*If you currently study here, leave End Date blank</p>
          <input className="update-post-btn" type="submit" value="update" />
        </form>
      </div>
    );
  }
}

export default EditEduItem;
