import React from 'react';
import JobIndexContainer from '../feed/job_elements/job_index_container'; 
import EduIndexContainer from '../profile/edu_elements/edu_index_container'; 

class UserProfile extends React.Component{ 
    constructor(props){ 
        super(props)   
    }

    componentDidMount(){ 
        this.props.visitProfile(this.props.userId); 
        this.props.fetchProfiles()
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
            
        let fullName= this.props.userProfile != undefined ? this.props.userProfile.full_name : " "; 
        let email= this.props.userProfile != undefined ? this.props.userProfile.email : " "; 
        let jobTitle= this.props.userProfile != undefined ? this.props.userProfile.job_title : " "; 
        let location= this.props.userProfile != undefined ? this.props.userProfile.location : " "; 
        let bio= this.props.userProfile != undefined ? this.props.userProfile.bio : " "; 
            
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
                            {/* <p>Connections: {this.props.connections} </p> */}
                        </div>
                        {editProf}
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
    }
}

export default UserProfile; 