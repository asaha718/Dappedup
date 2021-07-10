import React from 'react';
import CreateJobPostingContainer from '../create_job_post_form_container'; 

class JobPostIndex extends React.Component{ 
    constructor(props){ 
        super(props)
    }
    
    componentDidMount(){ 
        this.props.fetchJobPosts()
    }

    render(){ 
        let {jobPosts}= this.props; 
        return( 
            <div>
                <button className='add-edu-btn' onClick={() => this.props.openModal({modal: 'addJobPosting'})}>
                    Add Job Post
                </button>
                
                <ul>
                    { 
                        jobPosts.map(post=> 
                            <li>
                                <h2>{post.header}</h2>
                                <p>{post.body}</p>
                            </li> 
                        )
                    }
                </ul>
                
            </div>
        )
    }
}

export default JobPostIndex; 