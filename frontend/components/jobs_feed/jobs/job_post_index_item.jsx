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
        let {post, deleteJobPost, companies, companyId, user} = this.props;
        
        if(this.props.jobApps === undefined) return null; 

        const userApply = this.props.jobApps.includes(post.id) ?
            <div className="applied-display">
               <p>Applied</p>            
            </div> : 
            <button className="apply-display" onClick ={() => this.handleJobApply(post.id)}>
                Apply<i className="fa fa-external-link"></i>
            </button>;

        const isApplicant = user.user_role === "user" ? userApply : null; 

        const userOpt= post.company_id === user.id ? 
            <div>
                <div className="delete-post-btn-ctn">
                    <button className='delete-post-btn' onClick={()=> deleteJobPost(post.id)} >
                        <i className="fa fa-trash"></i>
                    </button>
                </div> 
            </div> : null; 
             

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
                {isApplicant}
            </div>
    
        )

    }
}

export default JobPostIndexItem