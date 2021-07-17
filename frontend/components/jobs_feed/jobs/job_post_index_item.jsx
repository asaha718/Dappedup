import React from "react"; 

class JobPostIndexItem extends React.Component{
    constructor(props){ 
        super(props); 
        this.handleJobApply= this.handleJobApply.bind(this); 
    } 

    componentDidMount(){ 
        this.props.fetchCurrentUserJobApps(); 
    }

    handleJobApply(jobId){ 
        this.props.createJobApp(jobId)
        .then(this.props.fetchCurrentUserJobApps())
        .then(this.props.fetchJobPosts())
    }

    render(){ 
        let {post, deleteJobPost, companies, companyId, current_userId} = this.props;
        
        if(this.props.jobApps === undefined) return null; 

        const userApply = this.props.jobApps.includes(post.id) ?
            <button>
                Applied            
            </button> : 
            <button onClick ={() => this.handleJobApply(post.id)}>
                Apply
            </button>;

        const userOpt= post.company_id === current_userId ? 
            <div>
                <div className="delete-post-btn-ctn">
                    <button className='delete-post-btn' onClick={()=> deleteJobPost(post.id)} >
                        <i className="fa fa-trash"></i>
                    </button>
                </div> 
            </div> : <div> </div>
    
        const companyName= companies[companyId] ? companies[companyId].full_name : " "
        const companyLocation= companies[companyId] ? companies[companyId].location : " "
    
        return(
            <div className="job-post-index-item">
                <div className="job-post-info">
                    <h2>{post.header}</h2>
                    <h3>{companyName}</h3>
                    <h3>{companyLocation}</h3>
                    <p>{post.body}</p>
                </div>
                {userOpt}
                {userApply}
            </div>
    
        )

    }
}

export default JobPostIndexItem