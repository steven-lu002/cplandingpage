import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>LinkedIn</FooterLinkTitle>
                            <FooterLink target="_blank" href="https://www.linkedin.com/in/jeremiah-cheng-5b7143121/">Jeremiah Cheng</FooterLink>
                            <FooterLink target="_blank" href="https://www.linkedin.com/in/iamtyfy/">Tyler Su</FooterLink>
                            <FooterLink target="_blank" href="https://www.linkedin.com/in/stelu1/">Steven Lu</FooterLink>
                            <FooterLink target="_blank" href="https://www.linkedin.com/in/lekev206/">Kevin Le</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Twips
                        </SocialLogo>
                        <WebsiteRights>Twips © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer