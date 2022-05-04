import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-4.svg' // change icons to whatever svg
import Icon3 from '../../images/svg-5.svg'
import { FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP } from './FeaturesElements'

const Features = () => {
  return (
    <>
    <FeaturesContainer id="features">
        <FeaturesH1>Our Features</FeaturesH1>
        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon1}/>
                <FeaturesH2>Recommended Feed</FeaturesH2>
                <FeaturesP>Personalized video feed based on your favorite streamers and interests.</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon2}/>
                <FeaturesH2>Comment Section</FeaturesH2>
                <FeaturesP>Join the community by commenting on your favorite Twitch clips.</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon3}/>
                <FeaturesH2>Profile Page</FeaturesH2>
                <FeaturesP>Save your favorite streamers, categories and clips and share them today!</FeaturesP>
            </FeaturesCard>
        </FeaturesWrapper>
    </FeaturesContainer>
    </>
  )
}

export default Features