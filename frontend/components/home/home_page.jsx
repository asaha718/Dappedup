import React from 'react'; 

const HomePage= (props) => { 
    return (
        <div className="home-body">
           <div className="welcome-content">
            <div className="welcome-message">
                <h1>Welcome to your professional Community</h1>
            </div>
               
            <div className="home-messages">
                <h3>Let the right people know you're open to work</h3>
                <br/>
                <h3>Conversations today could lead to opportunity tomorrow</h3>
                <br/>
                <h3>Stay up to date on your industry</h3>
            </div>
           </div>
            <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="LinkedIn home image"/>

        </div> 
    )

}; 

export default HomePage; 