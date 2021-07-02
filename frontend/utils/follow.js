export const createFollow=(followedId)=> ( 
        $.ajax({
            method: 'POST', 
            url: '/api/follows', 
            data: { follow: {followed_user_id: followedId }} 
        })
    ); 