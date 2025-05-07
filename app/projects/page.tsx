import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Metadata } from 'next'
import Hero from './components/ProjectHero'
import FeaturedProjects from './components/Featured'
import ProjectStats from './components/ProjectsStats'
import DownloadCV from './components/DownloadCV'
import CallToAction from '../about/components/CTA'


export const metadata: Metadata = {
    title: "Our Projects",
    description: "Explore my projects, showcasing my skills and creativity. From web development to design, discover the work that defines me.",
    keywords: [
      "projects",
      "portfolio",
      "web development",
      "design",
      "skills",
      "creativity",
      "showcase",
      "work",
      "explore",
      "project showcase",
      "web design",
      "software development",
      "project portfolio",
      "MuhidTech projects",
      "MuhidTech portfolio",
      "MuhidTech web development",
    ],
  }


function page() {
  return (
    <>
        <Navbar />
        <Hero />
        <ProjectStats />
        <FeaturedProjects />
        <DownloadCV />
        <CallToAction />
        <Footer /> 
    </>
  )
}

export default page
