import React from 'react';
import JobPostIndexItem from './job_post_index_item';

class JobPostIndex extends React.Component{ 
    constructor(props){ 
        super(props)
    }
    
    componentDidMount(){ 
        this.props.fetchJobPosts(); 
        this.props.fetchProfiles(); 
    }

    render(){ 
        let {current_userId, companies, jobPosts, updateJobPost, deleteJobPost }= this.props; 
        return( 
            <div className="job-post-page">
                <div className="add-job-post-btn-ctn">
                    <button className='add-job-post-btn' onClick={() => this.props.openModal({modal: 'addJobPosting'})}>
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
                                                openModal= {this.props.openModal}
                                                closeModal= {this.props.closeModal}
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