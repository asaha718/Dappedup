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

export const createEdu= (education)=> ( 
    $.ajax({ 
        url: '/api/educations',
        method: 'POST',
        data: {education}
    })
);

export const updateEdu= (education)=> ( 
    $.ajax({ 
        url: `/api/educations/${edu.id}`,
        method: 'PATCH',
        data: {education}
    })
);