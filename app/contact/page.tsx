import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Metadata } from 'next'
import ContactHero from './components/ContactHero'
import Contact from './components/Contact'
import ContactInfoSocials from './components/ContactInfo'
// import WhatsAppCTA, { FAQs } from './components/Whats'
import FaqSection from '../components/FaqSection'
import DownloadCV from '../projects/components/DownloadCV'


export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for any inquiries or collaborations. I'm here to help you with your projects and ideas.",
  keywords: [
    "Contact",
    "Inquiries",
    "Collaborations",
    "Projects",
    "Ideas",
    "Help",
    "Support",
    "Email",
    "Phone",
    "Social Media",
    "MuhidTech Contact",
    "MuhidTech Inquiries",
    "MuhidTech Collaborations",
    
  ],
  authors: [
    {
      name: "MuhidTech",
      url: "https://muhidtech.vercel.app",
    },
  ],
}

function page() {
  return (
    <>
        <Navbar />
        <ContactHero />
        <Contact /> 
        <ContactInfoSocials />
        <FaqSection />
        <DownloadCV />
        {/* <WhatsAppCTA /> */}
        {/* <FAQs /> */}
        <Footer /> 
    </>
  )
}

export default page
