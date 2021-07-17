export const createJobApp= (job_application)=> { 
    return (
        $.ajax({ 
            method: "POST", 
            url: 'api/job_applications', 
            data: {job_application}
        })
    )
}

export const fetchCurrentUserJobApps = () => {
    // debugger
    return(
        $.ajax({
            url: `/api/job_applications/1` //id doesn't matter here since backend will know who current user is 
        })
    )
}