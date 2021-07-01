import React from "react"; 
import { Link } from "react-router-dom";

class Connections extends React.Component{ 
    constructor(props){ 
        super(props)
    }

    componentDidMount(){ 
        this.props.fetchProfiles(); 
    }

    render(){ 
        let { users } = this.props; 
        return( 
            <div className='connections-page'>
                <ul>
                { 
                    users.map((user)=>{ 
                        return( 
                            <li key={`${user.id}`} className="user-item">
                                <Link to={`/profile/${user.id}`}>{user.full_name}</Link>
                            </li>
                        )
                    })
                }

                </ul>
            </div>
        )
    }
}

export default Connections; 