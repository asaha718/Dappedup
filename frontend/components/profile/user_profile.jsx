import React from 'react'; 

class UserProfile extends React.Component{ 
    constructor(props){ 
        super(props)
    }

    render(){
        let { profile }= this.props
        return ( 
            <h1>{profile.full_name}</h1>
        ) 
    }
}

export default UserProfile; 