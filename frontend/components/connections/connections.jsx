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
        let { users, followingArr, createFollow, removeFollow, fetchCurrentUserFollows, currentUserId } = this.props;
        const profiles= users.filter((user) => user.id !== currentUserId)
    
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
                            profiles.map((user)=>{ 
                                return( 
                                    <ProfileBadgeItem key={user.id} 
                                                    user={user} 
                                                    followingArr={followingArr}
                                                    createFollow= {createFollow}
                                                    removeFollow= {removeFollow}
                                                    fetchCurrentUserFollows= {fetchCurrentUserFollows}
                                                    currentUserId= {currentUserId}

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