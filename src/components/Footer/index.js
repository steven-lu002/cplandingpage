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
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
                            <FooterLink to='/home'>Test</FooterLink>
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