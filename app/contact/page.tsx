import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Footer from '../components/Footer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Contact"
}

function page() {
  return (
    <>
        <Navbar />
        <Contact />
        <Footer /> 
    </>
  )
}

export default page
