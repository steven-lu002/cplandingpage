import React from 'react'
import Icon1 from '../../images/jeremiah.jpg'
import Icon2 from '../../images/tyler.jpg'
import Icon3 from '../../images/steven.jpg'
import Icon4 from '../../images/kevin.jpg'

import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2, TeamP } from './TeamElements'

const Team = () => {
  return (
    <>
    <TeamContainer id="team">
        <TeamH1>The Team</TeamH1>
        <TeamWrapper>
            <TeamCard>
                <TeamIcon src={Icon1}/>
                <TeamH2>Jeremiah Cheng</TeamH2>
                <TeamP>Back-End Developer</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Icon2}/>
                <TeamH2>Tyler Su</TeamH2>
                <TeamP>Project Manager, Research</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Icon3}/>
                <TeamH2>Steven Lu</TeamH2>
                <TeamP>Designer, UX/UI</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Icon4}/>
                <TeamH2>Kevin Le</TeamH2>
                <TeamP>Front-End Developer</TeamP>
            </TeamCard>
        </TeamWrapper>
    </TeamContainer>
    </>
  )
}

export default Team