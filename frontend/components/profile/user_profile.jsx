import React from 'react';
import EditProfileForm from './edit_profile'; 
import JobIndexContainer from '../feed/job_elements/job_index_container'; 
import EduIndexContainer from '../profile/edu_elements/edu_index_container'; 

class UserProfile extends React.Component{ 
    constructor(props){ 
        super(props)  
        this.state = {showForm: false} 
    }

    handleClick(){ 
        if (this.state.showForm === false){ 
            return () => this.setState({showForm: true}) 
        }else{ 
            return () => this.setState({showForm: false})
        }    
    }

    render(){
        return ( 
            <div className="user-profile-page">
                <div className="user-presentational">
                    <div className="profile-pic">
                        <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                    </div>
                    <div className="fullname">
                        <h1>{this.props.profile.full_name}</h1>
                    </div>
                    <div className="user-info">
                        <h3>{this.props.profile.email}</h3>
                        <h3>{this.props.profile.job_title}</h3>
                        <h3>{this.props.profile.location}</h3>
                    </div>
                </div>
                <div className="profile-about">
                    <h3>About </h3>
                    <p> {this.props.profile.bio} </p>
                </div>
                <button className="edit-profile-btn" onClick={this.handleClick()}>
                     Edit Profile 
                </button>
                    {this.state.showForm ? <EditProfileForm 
                                                profile= {this.props.profile} 
                                                updateProfile={this.props.updateProfile} 
                                                handleClick={this.handleClick()}
                                            /> : null}
                <div className="user-jobs-ctn">
                    <div className="user-job-ctn-header">
                        <h2>Experience </h2>
                        <button className='add-job-btn' onClick={() => this.props.openModal({modal: 'addJob'})}>
                            +
                        </button>
                    </div>
                    <JobIndexContainer />
                </div>
                <div className="user-education-ctn">
                    <div className="user-edu-ctn-header">
                        <h2>Education </h2>
                        <button className='add-edu-btn' onClick={() => this.props.openModal({modal: 'addEdu'})}>
                            +
                        </button>
                    </div>
                    <EduIndexContainer /> 
                </div>
            </div> 
        ) 
    }
}

export default UserProfile; 