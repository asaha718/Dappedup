export const login = user => ( // creates new session
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
);
  
export const signup = user => ( //creates new user
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
    })
);
  
export const logout = () => ( //deleting the session
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);
  