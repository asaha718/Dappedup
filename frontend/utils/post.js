export const fetchPosts= () => ( 
    $.ajax({ 
        url: '/api/posts'
    })
);

export const fetchPost= (postId)=> ( 
    $.ajax({ 
        url: `/api/posts/${postId}`
    })
);

export const createPost= (post)=> ( 
    $.ajax({ 
        url: '/api/posts', 
        method: 'POST',
        contentType: false, 
        processData: false, 
        data: post
    })
);

export const updatePost= (post)=> ( 
    $.ajax({ 
        url: `/api/posts/${post.id}`, 
        method: 'PATCH', 
        data: {post}
    })
);

export const deletePost= (postId)=> ( 
    $.ajax({ 
        url: `/api/posts/${postId}`, 
        method: 'DELETE'
    })
);

// export const uploadPhoto= ()=> (
//     $.ajax({ 
//         url: '/api/posts', 
//         method:'POST', 
//         contentType: false, 
//         processData: false
//     })
// )