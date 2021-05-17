export const fetchJobs= ()=> (
    $.ajax({ 
        url: '/api/jobs'
    })
); 

export const fetchJob=(jobId)=> ( 
    $.ajax({ 
        url: `/api/jobs/${jobId}`
    })
); 

export const createJob= (job)=> ( 
    $.ajax({ 
        url: '/api/job',
        method: 'POST',
        data: job
    })
);

export const updateJob= (job)=> ( 
    $.ajax({ 
        url: `/api/job/${job.id}`,
        method: 'PATCH',
        data: job
    })
);