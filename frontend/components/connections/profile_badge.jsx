import React from 'react'; 
import { Link } from 'react-router-dom';
import PokeLeague from '../../../public/images/pokemon_league.jpg'; 

class ProfileBadgeItem extends React.Component{
    constructor(props){ 
        super(props)
      
        this.handleFollow= this.handleFollow.bind(this); 
        this.handleUnfollow= this.handleUnfollow.bind(this); 
    } 

    componentDidMount(){ 
        this.props.fetchCurrentUserFollows(); 
    }


    handleFollow(userId){ 
        this.props.createFollow(userId)
        .then(()=> this.props.fetchCurrentUserFollows())
        
    }

    handleUnfollow(userId){ 
        this.props.removeFollow(userId)
        .then(()=> this.props.fetchCurrentUserFollows())  
    }


    render(){ 
        let {user, currentUserId }= this.props; 
        // console.log(this.props.followingArr);
        // console.log(user.id)

        if(this.props.followingArr === undefined) return null; 

        const followUser = this.props.followingArr.includes(user.id) ?
            <button disabled={currentUserId === user.id} onClick ={() => this.handleUnfollow(user.id)}>
                Following            
            </button> : 
            <button disabled={currentUserId === user.id} onClick ={() => this.handleFollow(user.id)}>
                Follow
            </button>;

        let profilePic= user.user_role === "user" ? 
            <img style={{height: "74px", width:"74px"}} src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
            :
            <img style={{height: "74px", width:"74px"}} src={PokeLeague}/>; 

        if(this.props.followingArr === undefined){ 
            return null
        }else{
            // this.checkFollow(user.id) 
            return (
                <div className='user-item'>
                    {profilePic}
                    <div className="name-pos-ctn">
                        <Link to={`/profile/${user.id}`}>{user.full_name}</Link>
                        <h3>{user.job_title}</h3>
                    </div>
                    {followUser}
                </div> 
            )

        }
    }
}

export default ProfileBadgeItem