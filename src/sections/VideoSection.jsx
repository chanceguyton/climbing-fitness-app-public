import React from "react"
import {VideoPlayer} from "../components/Video"
import "../styles/VideoSection.css"

function VideoSection(){
    return(
        <section className="video-section">
        <div className="title-player-card">
            <h2 className="section-title">The video that inspired it all</h2>

            <div className="video-content-wrapper">
                <div className="video-container">
                    <VideoPlayer />
                </div>
            </div>
        </div>
        
        
        <div className = "video-description">
            <h2 className="section-title">All Your Climbing in One Test</h2>
            <div className="video-description-text">
                <p>Even the coaches who built this test–and the climbers who tried it–will 
                tell you: climbing can't be reduced to just four strength metrics. It's way
                more nuanced than that.
                </p>
                <p>But regularly checking in on these could reveal exactly where your training could
                use a boost.
                </p>
                <p>Take a few minutes to test: </p>
                <ul>
                    <li>Pull Up Strength</li>
                    <li>Finger Strength</li>
                    <li>Endurance</li>
                    <li>Core Strength</li>
                </ul>
                <p>From there, we'll chart your progress and generate personalized training ideas
                to help you level up.
                </p>
            </div> 
        </div> 
        </section>
    )
}

export default VideoSection;