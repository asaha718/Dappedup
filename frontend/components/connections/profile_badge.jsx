import React from 'react'; 
import { Link } from 'react-router-dom';

class ProfileBadgeItem extends React.Component{
    constructor(props){ 
        super(props)
        this.state= { 
            status: " "
        }
        this.checkFollow= this.checkFollow.bind(this); 
        this.handleFollow= this.handleFollow.bind(this); 
    } 

    componentDidMount(){ 
        this.props.fetchCurrentUserFollows(); 
    }

    checkFollow(userId){ 
        // this.props.followingArr != undefined ? this.props.followingArr : [];
        if(this.props.followingArr.includes(userId)){ 
            this.setState({status: "Following"})
        }else{ 
            this.setState({status: "Follow"})
        }
    }

    handleFollow(userId){ 
        if(this.state.status === 'Follow'){ 
            this.setState({status: 'Following'})
            this.props.createFollow(userId)
            .then(()=> this.props.this.props.fetchCurrentUserFollows() )
        }else if(this.state.status === 'Following'){ 
            this.setState({status: 'Follow'})
            this.props.removeFollow(userId)
            .then(()=> this.props.fetchCurrentUserFollows())
        }
    }


    render(){ 
        let {user}= this.props; 
        console.log(this.props.followingArr); 

        // let userFollowState= this.props.followingArr ? this.checkFollow(user.id) : []; 

        if(this.props.followingArr === undefined){ 
            return null
        }else{
            // this.checkFollow(user.id) 
            return (
                <div className='user-item'>
                    <img style={{height: "74px", width:"74px"}} src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                    <div className="name-pos-ctn">
                        <Link to={`/profile/${user.id}`}>{user.full_name}</Link>
                        <h3>{user.job_title}</h3>
                    </div>
                    <button>{this.state.status}</button>
                </div> 
            )

        }
    }
}

export default ProfileBadgeItem