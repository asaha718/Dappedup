import React from 'react'; 

const editProfileForm= (props)=> { 
    return ( 
        <div className="edit-user-form">

        <form onSubmit={this.handleSubmit}>
            <h2>Update your profile</h2>
            <br/>
            {/* <label>Full Name: 
                <input type="text" 
                    value={this.state.full_name} 
                    onChange={this.update('full_name')}
                />
            </label>
            <label>E-mail: 
                <input type="text" 
                    value={this.state.email} 
                    onChange={this.update('email')}
                />
            </label> */}
            <label>Job Title: 
                <input type="text" 
                    value={this.state.job_title} 
                    onChange={this.update('job_title')}
                />
            </label>
            <label>Location: 
                <input type="text" 
                    value={this.state.location} 
                    onChange={this.update('location')}
                />
            </label>
            <label>Bio: 
                <textarea 
                    value={this.state.bio} 
                    onChange={this.update('bio')}
                />
            </label>
            <input type="submit" value="Update Profile"/>
        </form>
    </div>

    )
}