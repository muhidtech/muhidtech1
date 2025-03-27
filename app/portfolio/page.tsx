import React from 'react'
import Navbar from '../components/Navbar'
import Portfolio from './Portfolio'
import Footer from '../components/Footer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Porfolio"
}

function page() {
  return (
    <>
        <Navbar />
        <Portfolio />
        <Footer /> 
    </>
  )
}

export default page
