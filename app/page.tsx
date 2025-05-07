import React from 'react'
import Navbar from './components/Navbar'
import './globals.css'
import Hero from './components/Hero'
import Represent from './components/Represent'
import HowWeWork from './components/HowWeWork'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'


function page() {
  return (
    <div className="md:p-10 p-5">
      <div className="inset-0 border border-cyan-500 rounded-3xl">
        <Navbar />
        <div className="relative w-full">
          <Hero />

          {/* Full-width line between plus signs */}
          <div className="absolute bottom-10 w-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">+</span>
            <div className="flex-1 h-[1px] bg-cyan-500 mt-1 " />
            <span className="text-white text-2xl font-bold">+</span>
          </div>

        </div>
        <div className="relative w-full">
          <Represent />

          {/* Full-width line between plus signs */}
          <div className="absolute bottom-10 w-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">+</span>
            <div className="flex-1 h-[1px] bg-cyan-500 mt-1 " />
            <span className="text-white text-2xl font-bold">+</span>
          </div>

        </div>
        <div className="relative w-full">
          <HowWeWork />

          {/* Full-width line between plus signs */}
          <div className="absolute bottom-10 w-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">+</span>
            <div className="flex-1 h-[1px] bg-cyan-500 mt-1 " />
            <span className="text-white text-2xl font-bold">+</span>
          </div>

        </div>
        <div className="relative w-full">
          <FaqSection />

          {/* Full-width line between plus signs */}
          <div className="absolute bottom-10 w-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">+</span>
            <div className="flex-1 h-[1px] bg-cyan-500 mt-1 " />
            <span className="text-white text-2xl font-bold">+</span>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default page
