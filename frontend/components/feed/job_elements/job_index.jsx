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
        let {jobs, deleteJob ,updateJob, currentUserId}= this.props;
        // console.log(this.props.userId) 
        return ( 
            <div>
                <ul>
                    {

                    jobs.map((job) => { 
                        if(job.user_id === this.props.userId) 
                        return (

                            <JobIndexItem key={job.id} 
                                        job={job} 
                                        updateJob={updateJob} 
                                        deleteJob={deleteJob}/>
                        ) 
                     
                    
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default JobIndex