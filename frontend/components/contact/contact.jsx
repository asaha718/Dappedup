import React from 'react'; 

const ContactInfo= () => { 
    return ( 
        <div className="contact-footer">
            <div className="personal-contact-card">
                <h3> Created By: Anug Saha</h3>
                    <img src="https://lh3.googleusercontent.com/ZpLLqqLQAqTvsX53os_VJ4ywG-PdNES6b43Xl8QxhEa1QUFyhBZo55drJt72h76JHaXR8RbM90EAtHfcyO-y8iO2ZQAuH-hpRJYjlet9_rJkEHVVgwN4T2E6YXyf-TR_hpQHzGTpuQ=w2400" />
            </div>

            <a href="https://linkedin.com/in/anug-saha-5bb43613a" target="_blank">
                <img id="linkedin" src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-Black-Logo.wine.svg" />
            </a>
            <a href="https://github.com/asaha718" target="_blank">
                <img id="github" src="https://pngimg.com/uploads/github/github_PNG15.png" />
            </a>
        </div>
    )
}

export default ContactInfo; 