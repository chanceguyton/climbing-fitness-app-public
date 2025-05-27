import React from "react"
import "../styles/FooterSection.css"

function FooterSection(){
    return (
        <div className = "footer">
            <p>
                Enjoying the app?{' '}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScRQ3PRrpT4Gj45Fy6YR3n2eWl_LHkigdL7wYRChmKhbGLO6g/viewform?usp=sharing&ouid=114427819002959358798" target="_blank" rel="noopener noreferrer">
                    Leave a quick review
                </a>
            </p>
        </div>
        
    )
}

export default FooterSection;