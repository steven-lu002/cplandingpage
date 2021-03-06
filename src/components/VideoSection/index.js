import React from 'react'
import { VideoContainer, VideoH1, VideoWrapper } from './VideoElements'

const Video = () => {
    return (
        <VideoContainer id="video">
            <VideoH1>Demo Video</VideoH1>
            <VideoWrapper>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/CEhdMUtJ-yY"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen>
                </iframe>
            </VideoWrapper>
        </VideoContainer>
    )
}

export default Video