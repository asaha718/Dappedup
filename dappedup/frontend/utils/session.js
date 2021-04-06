export const login = user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
);
  
export const signup = user => (
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: { user }
    })
);
  
export const logout = () => ( //deleting the session
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);
  