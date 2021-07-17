export const createJobApp= (jobPostId)=> { 
    return (
        $.ajax({ 
            method: "POST", 
            url: 'api/job_applications', 
            data: { jobPost: {job_post_id: jobPostId} }
        })
    )
}

export const fetchCurrentUserJobApps = () => {
    return(
        $.ajax({
            url: `/api/job_applications/1` //id doesn't matter here since backend will know who current user is 
        })
    )
}