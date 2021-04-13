// export const currentUserProfile= currentUserId => (
//     $.ajax({ 
//         url: `/api/users/${currentUserId}`
//     })
// )

export const updateProfile= user => ( 
    $.ajax({ 
        method:'PATCH',
        url: `/api/users/${user.id}`, 
        data: {user} 
    })
)

// export const fetchProfile= userId =>(
//     $.ajax({ 
//         url: `/api/users/${userId}`
//     })
// )