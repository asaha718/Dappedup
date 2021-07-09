export const fetchJobPosts= () => ( 
    $.ajax({ 
        url: '/api/job_postings'
    })
);

export const fetchJobPost= (postId)=> ( 
    $.ajax({ 
        url: `/api/job_postings/${postId}`
    })
);

export const createJobPost= (jobPost)=> ( 
    $.ajax({ 
        url: '/api/job_postings', 
        method: 'POST', 
        data: jobPost
    })
);

export const updateJobPost= (jobPost)=> ( 
    $.ajax({ 
        url: `/api/job_postings/${jobPost.id}`, 
        method: 'PATCH', 
        data: {jobPost}
    })
);

export const deleteJobPost= (jobPostId)=> ( 
    $.ajax({ 
        url: `/api/job_postings/${jobPostId}`, 
        method: 'DELETE'
    })
);