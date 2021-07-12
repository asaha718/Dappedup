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

export const createJobPost= (job_posting)=> ( 
    $.ajax({ 
        url: '/api/job_postings', 
        method: 'POST', 
        data: {job_posting}
    })
);

export const updateJobPost= (job_posting)=> ( 
    $.ajax({ 
        url: `/api/job_postings/${job_posting.id}`, 
        method: 'PATCH', 
        data: {job_posting}
    })
);

export const deleteJobPost= (jobPostId)=> ( 
    $.ajax({ 
        url: `/api/job_postings/${jobPostId}`, 
        method: 'DELETE'
    })
);