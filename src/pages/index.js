import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Features from '../components/Features'
import Team from '../components/Team'
import Footer from '../components/Footer'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Video from '../components/VideoSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Features />
            <InfoSection {...homeObjThree}/>
            <Team />
            <Video />
            <Footer />
        </>
    )
}

export default Home