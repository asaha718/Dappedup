export const createFollow=(followedId)=> ( 
    $.ajax({
        method: 'POST', 
        url: '/api/follows', 
        data: { follow: {followed_user_id: followedId }} 
    })
); 

export const fetchCurrentUserFollows = () => ( 
    $.ajax({
        url: `/api/follows/0` //id doesn't matter here since backend will know who current user is 
    })
)