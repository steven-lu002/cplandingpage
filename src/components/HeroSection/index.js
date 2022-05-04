import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroLink } from './HeroElements'
import { Button } from '../Buttons'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Twips, Twitch Clips at Your Fingertips
                </HeroH1>
                <HeroP>
                    Never miss a beat, watch your favorite streamer and connect with the community.
                </HeroP>
                <HeroBtnWrapper>
                    <HeroLink target="_blank" href="https://twipsbits.me/">
                        <Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                            Join the Party {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection