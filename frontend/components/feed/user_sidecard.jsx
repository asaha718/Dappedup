import React from 'react';
import PokeLeague from '../../../public/images/pokemon_league.jpg'; 

class UserSideCard extends React.Component{ 
    constructor(props){ 
        super(props)
    }

    componentDidMount(){ 
        this.props.fetchCurrentUserFollows(); 
    }

    render(){ 
        let numFollowing= this.props.following != undefined ? this.props.following.length : " ";
        let profilePic= this.props.profile.user_role === "user" ? 
            <div className="profile-card-picture">
                <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
            </div> :
            <div className="company-card-picture">
                <img src={PokeLeague}/>
            </div> 
        return ( 
            <div>
                <div className="profile-card-info">
                    {profilePic}
                    <div className="full-name">
                        <h1>{this.props.profile.full_name}</h1>
                    </div>
                    <div className="profile-card-details">
                        <h3>{this.props.profile.email}</h3>
                        <h3>{this.props.profile.job_title}</h3>
                        <h3>{this.props.profile.location}</h3>
                        <h3>following: {numFollowing}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSideCard