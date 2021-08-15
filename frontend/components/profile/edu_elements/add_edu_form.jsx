import React from "react";

class AddEdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.edu;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.todaysDate= this.todaysDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const edu = Object.assign({}, this.state);
    this.props.createEdu(edu).then(this.props.closeModal);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  todaysDate(){ 
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
    return `${today}`
  }


  render() {
    return (
      <div className="add-edu-form">
        <div className="edu-form-header">
          <h2>Add education</h2>
          <div onClick={this.props.closeModal} className="close-x">
            &times;
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="add-edu-form-contents">
            <label>
              School:
              <input
                type="text"
                value={this.state.school}
                onChange={this.update("school")}
                required
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
            <input className="save-edu-btn" type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddEdu;
