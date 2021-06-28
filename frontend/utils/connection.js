export const fetchConnections=()=> ( 
    $.ajax({ 
        url: `/api/connections/`
    })
); 

export const createConnection=(connection)=> ( 
    $.ajax({
        method: 'POST', 
        url: '/api/connections', 
        data: { connection } 
    })
); 

export const destroyConnection = (connecteeId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/connections/${connecteeId}`,
    })
)