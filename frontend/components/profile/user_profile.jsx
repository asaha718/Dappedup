import React from 'react';
import JobIndexContainer from '../feed/job_elements/job_index_container'; 
import EduIndexContainer from '../profile/edu_elements/edu_index_container'; 

class UserProfile extends React.Component{ 
    constructor(props){ 
        super(props)   
    }

    componentDidMount(){ 
        this.props.visitProfile(this.props.userId)
    }

    render(){
        return ( 
            <div className="user-profile-page">
                <div className="user-presentational">
                    <div className="profile-pic">
                        <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                    </div>
                    <div className="fullname">
                        <h1>{this.props.userProfile.full_name}</h1>
                    </div>
                    <div className="user-info">
                        <div className="user-info-contents">
                            <h3>{this.props.userProfile.email}</h3>
                            <h3>{this.props.userProfile.job_title}</h3>
                            <h3>{this.props.userProfile.location}</h3>
                        </div>
                        <button className="edit-profile-btn" onClick={() => this.props.openModal({modal: 'editProfile'})}>
                            <i className="fa fa-edit">edit</i> 
                        </button>
                    </div>
                </div>
                <div className="profile-about">
                    <h3>About </h3>
                    <p> {this.props.userProfile.bio} </p>
                </div>

                <div className="user-jobs-ctn">
                    <div className="user-job-ctn-header">
                        <h2>Experience </h2>
                        <button className='add-job-btn' onClick={() => this.props.openModal({modal: 'addJob'})}>
                            +
                        </button>
                    </div>
                    <JobIndexContainer userId= {this.props.userId}/>
                </div>
                <div className="user-education-ctn">
                    <div className="user-edu-ctn-header">
                        <h2>Education </h2>
                        <button className='add-edu-btn' onClick={() => this.props.openModal({modal: 'addEdu'})}>
                            +
                        </button>
                    </div>
                    <EduIndexContainer userId={this.props.userId}/> 
                </div>
            </div> 
        ) 
    }
}

export default UserProfile; 