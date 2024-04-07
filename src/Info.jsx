import React from "react"

export default function Info() {
    return(
        <div className="profile-info">
        <img src="/src/images/Emmanuel1.jpg" alt="profile-image" className="image"/>
        <h1 className="name" >Emmanuel Dube</h1>
        <h3 className="company">VED Software Solutions</h3>
        <p className="job-title">Software Developer</p>
        <div className="contact">
        <button className="email-button"><img src="/src/images/email.png" className="email-icon"/><span className="text">Email</span></button>
        <button className="linkedin-button"><img src="/src/images/linkedin.png" alt="" className="linkedin-icon"/>LinkedIn</button>
        </div>
        </div>
    )
}
