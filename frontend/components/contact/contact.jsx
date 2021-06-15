import React from 'react';
import linkedin from '../../../public/images/linkedIn_icon4.png'; 
import angellist from '../../../public/images/angellist_icon2.png'; 
import github from '../../../public/images/github_icon.png';  

const ContactInfo= () => { 
    return ( 
        <div className="contact-footer">
            <div className="personal-contact-card">
                <h3> Created By: Anug Saha</h3>
                {/* <img src="https://lh3.googleusercontent.com/ZpLLqqLQAqTvsX53os_VJ4ywG-PdNES6b43Xl8QxhEa1QUFyhBZo55drJt72h76JHaXR8RbM90EAtHfcyO-y8iO2ZQAuH-hpRJYjlet9_rJkEHVVgwN4T2E6YXyf-TR_hpQHzGTpuQ=w2400" /> */}
            </div>

            <a href="https://linkedin.com/in/anug-saha-5bb43613a" target="_blank">
                <img src={linkedin} /> 
            </a>

            <a href="https://github.com/asaha718" target="_blank">
                <img src={github} />
            </a>

            <a href="https://angel.co/u/anug-saha-1" target="_blank">
                <img src={angellist} />
            </a>

        </div>
    )
}

export default ContactInfo; 