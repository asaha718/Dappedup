import React from 'react';
import { Redirect } from 'react-router-dom';
import JobPostIndexItem from './job_post_index_item';

class JobPostIndex extends React.Component{ 
    constructor(props){ 
        super(props); 

        // this.handleClick= this.handleClick.bind(this); 
    }
    
    componentDidMount(){ 
        this.props.fetchJobPosts(); 
        this.props.fetchProfiles(); 
    }

    handleClick(role){
    //  console.log(this.props.users.user_role)
        if(role === 'user'){
            return(
                alert("Must be a company")
            )
            // this.props.logout()
            // <Redirect to="/signup-company" />
        }else{ 
            this.props.openModal({modal: 'addJobPosting'})
        }
    }

    render(){ 
        let {current_userId, companies, jobPosts, updateJobPost, deleteJobPost, createJobApp }= this.props; 
        // console.log(this.props.user.user_role)
        return( 
            <div className="job-post-page">
                <div className="add-job-post-btn-ctn">
                    <button className='add-job-post-btn' onClick={()=> this.handleClick(this.props.user.user_role)}>
                    <i className="fa fa-edit"></i>Post a job
                    </button>
                </div>
                <div className="job-postings">
                    <ul>
                        { 
                            jobPosts.map(post=> 
                                <JobPostIndexItem key={post.id} 
                                                post={post}
                                                companyId={post.company_id} 
                                                companies={companies}
                                                current_userId= {current_userId}
                                                updateJobPost={updateJobPost}
                                                deleteJobPost={deleteJobPost} 
                                                createJobApp= {createJobApp}
                                                /> 
                            )
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default JobPostIndex; 