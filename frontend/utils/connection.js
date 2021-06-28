export const fetchConnections=()=> ( 
    $.ajax({ 
        url: `/api/connections/0`
    })
); 

export const createConnection=(connecteeId)=> ( 
    $.ajax({
        method: 'POST', 
        url: '/api/connections', 
        data: { connection : {connectee_id: connecteeId} } 
    })
); 

export const destroyConnection = (connecteeId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/connections/${connecteeId}`,
    })
)