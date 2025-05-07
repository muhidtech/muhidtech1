import React from 'react'

function pagee() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 w-full'>
        <h1 className='flex flex-col items-center justify-center text-center'>
            <span className='text-4xl font-bold text-gray-800'>Coming Soon</span>
            <br />
            <span className='text-lg text-gray-600'>This page is under construction</span>
            <br />
        </h1>
    </div>
  )
}

export default pagee
export const metadata = {
    title: 'Our Blog',
    description: 'Thie page is under construction',
    keywords: 'blog, coming soon',
  }
export const dynamic = 'force-dynamic' // This will force the page to be dynamic