import React from "react"; 

const JobPostIndexItem= ({post, deleteJobPost, companies, companyId})=> { 
    const userOpt= 
        <div>
            <div className="delete-post-btn-ctn">
                <button className='delete-post-btn' onClick={()=> deleteJobPost(post.id)} >
                    <i className="fa fa-trash"></i>
                </button>
            </div> 
        </div>

    const companyName= companies[companyId] ? companies[companyId].full_name : " "
    const companyLocation= companies[companyId] ? companies[companyId].location : " "

    return(
        <div className="job-post-index-item">
            <h2>{post.header}</h2>
            <h3>{companyName}</h3>
            <h3>{companyLocation}</h3>
            <p>{post.body}</p>
            {userOpt}
        </div>

    )
}

export default JobPostIndexItem