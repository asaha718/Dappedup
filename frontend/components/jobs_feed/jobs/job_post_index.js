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
        let {companies, jobPosts, updateJobPost, deleteJobPost }= this.props; 
        return( 
            <div>
                <button className='add-edu-btn' onClick={() => this.props.openModal({modal: 'addJobPosting'})}>
                    Post a job
                </button>
                
                <ul>
                    { 
                        jobPosts.map(post=> 
                            <JobPostIndexItem key={post.id} 
                                            post={post}
                                            companyId={post.company_id} 
                                            companies={companies}
                                            updateJobPost={updateJobPost}
                                            deleteJobPost={deleteJobPost} 
                                            openModal= {this.props.openModal}
                                            closeModal= {this.props.closeModal}
                                            /> 
                        )
                    }
                </ul>
                
            </div>
        )
    }
}

export default JobPostIndex; 