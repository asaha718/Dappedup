import React from 'react';
import ImageSlider from './slider/imageSlider';
// import { Carousel } from 'react-responsive-carousel';
// import linkedin from '../../../public/images/linkedin.jpg'; 
// import zoom from '../../../public/images/zoom.jpg'; 
// import laughing from '../../../public/images/laughing.jpg'

const HomePage= (props) => { 
    return (
        <div className="home">
            <div className="home-body">
            <div className="welcome-content">
                    <div className="welcome-message">
                        <h1>Welcome to your professional community</h1>
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

            <ImageSlider /> 
        </div>
    )

}; 

export default HomePage; 