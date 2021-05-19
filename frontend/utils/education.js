export const fetchEdus= ()=> (
    $.ajax({ 
        url: '/api/educations'
    })
); 

export const fetchEdu=(eduId)=> ( 
    $.ajax({ 
        url: `/api/educations/${eduId}`
    })
); 

export const createEdu= (edu)=> ( 
    $.ajax({ 
        url: '/api/educations',
        method: 'POST',
        data: edu
    })
);

export const updateEdu= (edu)=> ( 
    $.ajax({ 
        url: `/api/educations/${edu.id}`,
        method: 'PATCH',
        data: {edu}
    })
);