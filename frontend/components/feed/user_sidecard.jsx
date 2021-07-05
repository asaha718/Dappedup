import React from 'react';

class UserSideCard extends React.Component{ 
    constructor(props){ 
        super(props)
    }

    componentDidMount(){ 
        this.props.fetchCurrentUserFollows(); 
    }

    render(){ 
        let numFollowing= this.props.following != undefined ? this.props.following.length : " ";
        return ( 
            <div>
                <div className="profile-card-info">
                    <div className="profile-card-picture">
                        <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                    </div>
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