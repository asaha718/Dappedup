import React from "react"; 
import { Link } from "react-router-dom";

class Connections extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state= { 
            status: "Follow"
        }; 
        // this.checkFollow= this.checkFollow.bind(this)
    }

    componentDidMount(){ 
        this.props.fetchProfiles();
        this.props.fetchCurrentUserFollows() 
    }

    // handleFollow(userId){ 
    //     if(this.state.status === 'Follow'){ 
    //         this.setState({status: 'Following'})
    //         this.props.createFollow(userId)
    //         .then(()=> this.props.this.props.fetchCurrentUserFollows() )
    //     }else if(this.state.status === 'Following'){ 
    //         this.setState({status: 'Follow'})
    //         this.props.removeFollow(userId)
    //         .then(()=> this.props.fetchCurrentUserFollows())
    //     }
    // }

    // checkFollow(userId){ 
    //     // this.props.followingArr != undefined ? this.props.followingArr : [];
    //     if(this.props.followingArr.includes(userId)){ 
    //         this.setState({status: "Following"})
    //     }else{ 
    //         this.setState({status: "Follow"})
    //     }
    // }

    render(){ 
        let { users } = this.props;
        console.log(this.props.followingArr) 

        // this.props.followingArr != undefined ? this.props.followingArr : [];
        return( 
            <div className="connections-page">
                <br/>
                <div className="connected-users">
                    <h2>You are following: </h2>
                </div> 
                <div className="all-users">
                    <h2>Everyone on DappedUp:</h2>
                    <ul className="listed-users">
                        { 
                            users.map((user)=>{ 
                                {/* this.checkFollow(user.id) */}
                                return( 
                                    <li key={`${user.id}`} className="user-item">
                                        <img style={{height: "74px", width:"74px"}} src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                                        <Link to={`/profile/${user.id}`}>{user.full_name}</Link>
                                        <h3>{user.job_title}</h3>
                                        <button>{this.state.status}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default Connections; 