import styled from 'styled-components'

export const VideoContainer = styled.div`
    height: 768px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
`

export const VideoH1 = styled.h1`
    color: #010606;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 40px; 

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const VideoWrapper = styled.div`
    max-width: 1280px;
`