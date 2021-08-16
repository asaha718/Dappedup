import React from "react";
import JobIndexItem from "./job_index_item";

class JobIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  render() {
    let { jobs, deleteJob, updateJob, currentUserId, openModal } = this.props;
    if (this.props.jobs) {
      return (
        <div>
          <ul>
            {jobs.map((job) => {
              if (this.props.userId === job.user_id){
                return (
                  <JobIndexItem
                    key={job.id}
                    job={job}
                    updateJob={updateJob}
                    deleteJob={deleteJob}
                    currentUserId={currentUserId}
                    openModal={openModal}
                  />
                );
              }
            })}
          </ul>
        </div>
      )
    }else { 
      return(
        <div> Add work experience</div>
      )
    }
  }
}

export default JobIndex;
