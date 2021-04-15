# DappedUp: A clone of LinkedIn

![DappedUp HomePage](https://user-images.githubusercontent.com/76965024/114917263-c3a64680-9df3-11eb-87a8-14547cac1081.JPG)

[DappedUp Live Link ](https://dappedup.herokuapp.com/#/) 

DappedUp is my attempt at a full stack clone of LinkedIn. Currently still in progress but current features include logging in, signing up, logging out and updating your profile. Future features that will be creating posts, viewing jobs from companies and applying to those job postings. 

## Technologies 
* React
* Redux
* Ruby on Rails
* Jbuilder
* Webpack 

## Features 
* Users Authentication: Users can sign up, sign out and log in bug free. Persons visiting site can also use a demo user to test features of the site. 

![User Auth](https://s4.gifyu.com/images/UserAuthGif.gif)

* Profile Edits: Logged in user can edit their profile and edits persist. 

[![EditProfileGif.gif](https://s4.gifyu.com/images/EditProfileGif.gif)](https://gifyu.com/image/rPao)

## Code
 A feature that solidified my understanding of state and the use of props in React and Redux was my profile component. To persit my changes to the database I had to pass my props down to my EditProfileForm class from my UserProfile class. Also added a toggling feature to only render the edit form on request.   

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


