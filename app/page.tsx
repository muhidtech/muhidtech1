import React from 'react'
import Navbar from './components/Navbar'
import './globals.css'
import Hero from './components/home/Hero'
import Footer from './components/Footer'

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}

export default page
