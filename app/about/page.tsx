import React from 'react'
import Navbar from '../components/Navbar'
import About from './about'
import Footer from '../components/Footer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "About"
}

function page() {
  return (
    <>
        <Navbar />
        <About />
        <Footer /> 
    </>
  )
}

export default page
