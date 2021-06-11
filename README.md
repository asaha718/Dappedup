# DappedUp: A clone of LinkedIn

![DappedUp HomePage](https://user-images.githubusercontent.com/76965024/119146959-24d7c000-ba19-11eb-90a5-19a908ebc2fe.JPG)

[DappedUp Live Link ](https://dappedup.herokuapp.com/#/) 

DappedUp is an full stack inspiration of LinkedIn. Current features include logging in, signing up, logging out, updating your profile with job history and education, and a feed component that allows you to post pictures or just something you want to share with your friends. Future features that will be reviewing jobs from companies and applying to those job postings. 

## Technologies 
* React
* Redux
* Ruby on Rails
* Jbuilder
* Webpack 
* AWS
* JavaScript
* Ruby
* HTML
* CSS

## Features 
* Users Authentication: Users can sign up, sign out and log in (bug free!!). Persons visiting site can also use a demo user to test features of the site(highly recommended!). 

![User Auth](https://s4.gifyu.com/images/UserAuthGif.gif)

* Profile Edits: Logged in user can edit their profile and edits persist. 

[![EditProfileGif.gif](https://s4.gifyu.com/images/EditProfileGif.gif)](https://gifyu.com/image/rPao)

## Code
 A feature that solidified my understanding of state and the use of props in React and Redux was my profile component. To persit my changes to the database I had to pass my props down to my EditProfileForm class from my UserProfile class. My UserProfile class was the component that was subscribed to the state and could only pass down props. Also added a toggling feature to only render the edit form on request and would colaps after an edit was made.   

```javascript
//user_profile.jsx
handleClick(){ 
        if (this.state.showForm === false){ 
            return () => this.setState({showForm: true}) 
        }else{ 
            return () => this.setState({showForm: false})
        }    
    }
    ...
                    {this.state.showForm ? <EditProfileForm 
                                                profile= {this.props.profile} 
                                                updateProfile={this.props.updateProfile} 
                                                handleClick={this.handleClick()}
                                            /> : null}
```

The implimentation of modals were both frustrating and rewarding. Modals are a true staple of LinkedIn's handle of editing and submiting data so I when got my modals working for my AddJob and AddEdu functionality on my profile page, I knew I was creating something Ryan Roslansky(CEO of LinkedIn) would be proud of. Implimentation of this feature and form helped get my hands dirty with design too. I can confidently say CSS no longer scares me(but still frustrates me) 

```javascript
//modal.jsx
const Modal= ({ modal, closeModal, id})=> { 
    if (!modal){ 
        return null; 
    }
    let component;
    switch (modal) {
      case 'edit':
        component = <EditPostContainer postId={id} /> ;
        break;
      case 'addJob': 
        component = <AddJobContainer />; 
        break;
      case 'addEdu':
          component = <AddEduContainer />; 
        break; 
      default:
        return null;
    }
    return ( 
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}
//user_profile.jsx

                <div className="user-jobs-ctn">
                    <div className="user-job-ctn-header">
                        <h2>Experience </h2>
                        <button className='add-job-btn' onClick={() => this.props.openModal({modal: 'addJob'})}>
                            +
                        </button>
                    </div>
                    <JobIndexContainer />
                </div>
```
Please reach out if you have any questions!
