import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Twips</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    About
                                </NavLinks>
                                <NavLinks
                                    to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    Discover
                                </NavLinks>
                                <NavLinks
                                    to="features"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    Features
                                </NavLinks>
                                <NavLinks
                                    to="next"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    Next Steps
                                </NavLinks>
                                <NavLinks
                                    to="team"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    Team
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar