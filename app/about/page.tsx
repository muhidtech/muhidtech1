import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from './components/Hero'
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
import TechStack from './components/TechStack'
import Mission from './components/Mission'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CTA'
import { Metadata } from 'next'
import DownloadCV from '../projects/components/DownloadCV'

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about us and our mission to provide the best services to our clients.",
    keywords: [
      "About Us",
      "Mission",
      "Vision",
      "Values",
      "Team",
      "Services",
      "Contact Us",
      "Testimonials",
      "Tech Stack",
      "Timeline",
      "About MuhidTech",
      "MuhidTech",
    ]
  }
  
function page() {
  return (
    <>
        <Navbar />
        <AboutHero />
        <WhatMakesUsDifferent />
        <TechStack />
        <Mission />
        <Timeline />
        <Testimonials />
        <DownloadCV />
        <CallToAction />
        <Footer />
    </>
  )
}

export default page
