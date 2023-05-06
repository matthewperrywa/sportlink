import React from "react"
import sportlinkPurple from "./sportlinkPurple.png"

export default function About(props){
    return (
        <div>
            <div className="about-container">
            <br></br>
            <img src={sportlinkPurple} alt="SportLink Logo" className="about-image"></img>
            <br></br>
            <h2>Connecting you to the sports you love with the people who play them</h2>
            </div>
            <div className="about-text">
                <br></br>
                <br></br>
                <p>Paragraph goes here</p>
            </div>
        </div>
    )
}