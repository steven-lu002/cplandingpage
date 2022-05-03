import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg' // change icons to whatever svg
import Icon3 from '../../images/svg-3.svg'
import { FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP } from './FeaturesElements'

const Features = () => {
  return (
    <>
    <FeaturesContainer id="features">
        <FeaturesH1>Our Features</FeaturesH1>
        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon1}/>
                <FeaturesH2>Feature Name</FeaturesH2>
                <FeaturesP>Feature description sample text</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon2}/>
                <FeaturesH2>Feature Name</FeaturesH2>
                <FeaturesP>Feature description sample text</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon3}/>
                <FeaturesH2>Feature Name</FeaturesH2>
                <FeaturesP>Feature description sample text</FeaturesP>
            </FeaturesCard>
        </FeaturesWrapper>
    </FeaturesContainer>
    </>
  )
}

export default Features