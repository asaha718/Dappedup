# DappedUp: A clone of LinkedIn

![DappedUp HomePage](https://user-images.githubusercontent.com/76965024/119146959-24d7c000-ba19-11eb-90a5-19a908ebc2fe.JPG)

[DappedUp Live Link ](https://dappedup.herokuapp.com/#/) 

DappedUp is an full stack inspiration of LinkedIn. Current features include login/logout, signing up (as a business account or normal account), updating your profile with job history and education, a feed component that allows you to post pictures or just something you want to share with your friends, follow feature that lets users know how many followers you or another person/company has and last but not least, a job board where users who are not companies can apply to jobs posted by companies.

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
 A structure I used a couple of times on my React/Redux side of my application was the threding down of props. Below you will see my render function for job post index item. In this component I pass down props from my job_post_index.jsx file which is a ul of a list to each job post(item).This took me a couple of times to understand why my pages were crashing when entering job posts page or even the posts page but eventually I was able to get it working with setting values from the props either to null or an empty string. This was because the rendering function is called multiple times and props are not always available to those first few renders.    

```javascript
//job_post_index_item.jsx
    render(){ 
        let {post, deleteJobPost, companies, companyId, user} = this.props;
        
        if(this.props.jobApps === undefined) return null; 

        const userApply = this.props.jobApps.includes(post.id) ?
            <div className="applied-display">
               <p> Applied </p>            
            </div> : 
            <button className="apply-display" onClick ={() => this.handleJobApply(post.id)}>
                Apply<i className="fa fa-external-link"></i>
            </button>;

        const isApplicant = user.user_role === "user" ? userApply : null; 

        const userOpt= post.company_id === user.id ? 
            <div>
                <div className="delete-post-btn-ctn">
                    <button className='delete-post-btn' onClick={()=> deleteJobPost(post.id)} >
                        <i className="fa fa-trash"></i>
                    </button>
                </div> 
            </div> : null; 
             

        const companyName= companies[companyId] ? companies[companyId].full_name : " "
        const companyLocation= companies[companyId] ? companies[companyId].location : " "
        const numApps= post.applicants ? post.applicants.length : " "
 
        return(
            <div className="job-post-index-item">
                <div className="job-post-info">
                    <h2>{post.header}</h2>
                    <h3>{companyName}</h3>
                    <h3>{companyLocation}</h3>
                    <h3>Processed applicants {numApps}</h3>
                    <p>{post.body}</p>
                </div>
                {userOpt}
                {isApplicant}
            </div>
    
        )

    }
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
