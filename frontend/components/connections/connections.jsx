import React from "react"; 
import ProfileBadgeItem from "./profile_badge";
import { Link } from "react-router-dom";

class Connections extends React.Component{ 
    constructor(props){ 
        super(props); 
        // this.checkFollow= this.checkFollow.bind(this)
    }

    componentDidMount(){ 
        this.props.fetchProfiles();
        // this.props.fetchCurrentUserFollows() 
    }

    render(){ 
        let { users, followingArr, createFollow, removeFollow, fetchCurrentUserFollows } = this.props;
        // console.log(this.props.followingArr) 

        // this.props.followingArr != undefined ? this.props.followingArr : [];
        
        // if(this.props.followingArr === undefined){ 
        //     return null
        
        return( 
            <div className="connections-page">
                <br/>
                <div className="connected-users">
                    {/* <h2>You are following: </h2> */}
                </div> 
                <div className="all-users">
                    <h2>People you may know on DappedUp</h2>
                    <ul className="listed-users">
                        { 
                            users.map((user)=>{ 
                                {/* this.checkFollow(user.id) */}
                                return( 
                                    <ProfileBadgeItem key={user.id} 
                                                    user={user} 
                                                    followingArr={followingArr}
                                                    createFollow= {createFollow}
                                                    removeFollow= {removeFollow}
                                                    fetchCurrentUserFollows= {fetchCurrentUserFollows}

                                    />   
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