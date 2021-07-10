import React from 'react';
import JobIndexContainer from '../feed/job_elements/job_index_container'; 
import EduIndexContainer from '../profile/edu_elements/edu_index_container'; 
import PokeLeague from '../../../public/images/pokemon_league.jpg'; 

class UserProfile extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state= { 
            status: ''
        }; 

        this.handleFollow= this.handleFollow.bind(this);   
    }; 

    componentDidMount(){ 
        this.props.fetchCurrentUserFollows()
        this.props.fetchProfiles()
        .then(()=> this.props.visitProfile(this.props.userId))
        .then(()=> {if (this.props.followed.includes(this.props.userId)){ 
            return (this.setState({status: 'Following'}))
        }else{ 
            this.setState({status: 'Follow'})
        }}); 
    }

    handleFollow(userId){ 
        // console.log(userId)
        if(this.state.status === 'Follow'){ 
            this.setState({status: 'Following'})
            this.props.createFollow(userId)
            .then(()=> this.props.visitProfile(this.props.userId))
        }else if(this.state.status === 'Following'){ 
            this.setState({status: 'Follow'})
            this.props.removeFollow(userId)
            .then(()=> this.props.visitProfile(this.props.userId))
        }
        
    }

    render(){
        const editProf= this.props.currentUsersProfile === this.props.userProfile ?
            <button className="edit-profile-btn" onClick={() => this.props.openModal({modal: 'editProfile'})}>
                <i className="fa fa-edit">edit</i> 
            </button> : <p> </p>; 
        const editJob= this.props.currentUsersProfile === this.props.userProfile ?
            <button className='add-job-btn' onClick={() => this.props.openModal({modal: 'addJob'})}>
            +
            </button> : <p> </p>; 
        const editEdu= this.props.currentUsersProfile === this.props.userProfile ?
            <button className='add-edu-btn' onClick={() => this.props.openModal({modal: 'addEdu'})}>
            +
            </button> : <p> </p>; 
            
        const followUser = this.props.currentUsersProfile != this.props.userProfile ?
            <button className='follow-btn' onClick ={() => this.handleFollow(this.props.userId)}>
                {this.state.status}
            </button> : null; 

        let fullName= this.props.userProfile != undefined ? this.props.userProfile.full_name : " "; 
        let email= this.props.userProfile != undefined ? this.props.userProfile.email : " "; 
        let jobTitle= this.props.userProfile != undefined ? this.props.userProfile.job_title : " "; 
        let location= this.props.userProfile != undefined ? this.props.userProfile.location : " "; 
        let bio= this.props.userProfile != undefined ? this.props.userProfile.bio : " "; 
        let numFollows= this.props.followerss != undefined ? this.props.followerss : " ";

        if(this.props.userProfile.user_role === "user"){
            return ( 
                <div className="user-profile-page">
                    <div className="user-presentational">
                        <div className="profile-pic">
                            <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                        </div>
                        <div className="fullname">
                            <h1>{fullName}</h1>
                        </div>
                        <div className="user-info">
                            <div className="user-info-contents">
                                <h3>{email}</h3>
                                <h3>{jobTitle}</h3>
                                <h3>{location}</h3>
                                <h3> {numFollows} followers</h3>
                            </div>
                            {editProf}
                            {followUser}
                        </div>
                    </div>
                    <div className="profile-about">
                        <h3>About </h3>
                        <p> {bio} </p>
                    </div>

                    <div className="user-jobs-ctn">
                        <div className="user-job-ctn-header">
                            <h2>Experience </h2>
                            {editJob}
                        </div>
                        <JobIndexContainer userId= {this.props.userId} />
                    </div>
                    <div className="user-education-ctn">
                        <div className="user-edu-ctn-header">
                            <h2>Education </h2>
                            {editEdu}
                        </div>
                        <EduIndexContainer userId={this.props.userId} /> 
                    </div>
                </div> 
            ) 
        }else{ 
            return (
                <div className="company-profile-page">
                    <div className="user-presentational">
                        <div className="profile-pic">
                            <img src={PokeLeague}/>
                        </div>
                        <div className="fullname">
                            <h1>{fullName}</h1>
                        </div>
                        <div className="user-info">
                            <div className="user-info-contents">
                                <h3>{email}</h3>
                                <h3>{jobTitle}</h3>
                                <h3>{location}</h3>
                                <h3> {numFollows} followers</h3>
                            </div>
                            {editProf}
                            {followUser}
                        </div>
                    </div>
                    <div className="profile-about">
                        <h3>About </h3>
                        <p> {bio} </p>
                    </div>
                </div>
            )
        }
    }
}

export default UserProfile; 