import React from 'react'; 

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.job;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.todaysDate = this.todaysDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const job = Object.assign({}, this.state);
    this.props.createJob(job).then(this.props.closeModal);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
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
      <div className="add-job-form">
        <div className="job-form-header">
          <h2>Add experience</h2>
          <div onClick={this.props.closeModal} className="close-x">
            &times;
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="add-job-form-contents">
            <label>
              Title
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                required
              />
            </label>
            <label>
              Field of Work
              <input
                type="text"
                value={this.state.field}
                onChange={this.update("field")}
                required
              />
            </label>
            <label>
              Company
              <input
                type="text"
                value={this.state.company}
                onChange={this.update("company")}
                required
              />
            </label>
            <label>
              Location
              <input
                type="text"
                value={this.state.location}
                onChange={this.update("location")}
                required
              />
            </label>
            <label>
              Description
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
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
            <input className="save-job-btn" type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddJob