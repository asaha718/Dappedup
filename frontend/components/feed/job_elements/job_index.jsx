import React from 'react'; 
import JobIndexItem from './job_index_item'; 

class JobIndex extends React.Component{ 
    constructor(props){ 
        super(props)
    }

    componentDidMount(){ 
        this.props.fetchJobs()
    }
    
    render(){
        let {jobs, updateJob}= this.props; 
        {console.log(jobs)} 
        return ( 
            <div>
                <ul>
                    { jobs.map(job => <JobIndexItem key={job.id} job={job} updateJob={updateJob} />)}
                </ul>
            </div>
        )
    }
}

export default JobIndex