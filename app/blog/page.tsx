import React from 'react'
import { useRouter } from 'next/navigation'

export default pagee
export const metadata = {
    title: 'Our Blog',
    description: 'Thie page is under construction',
    keywords: 'blog, coming soon',
  }
export const dynamic = 'force-dynamic' // This will force the page to be dynamic

function pagee() {
  const route = useRouter()
  const text = "< Go Back"
  return (
    <div className='relative flex flex-col items-center justify-center h-screen w-full'>
        <h1 className='flex flex-col items-center justify-center text-center'>
            <span className='text-4xl font-bold text-gray-800'>Coming Soon</span>
            <br />
            <span className='text-lg text-gray-600'>This page is under construction</span>
            <br />
        </h1>

        <button className='absolute top-10 left-1/2 py-3 px-2 bg-cyan-500 rounded-lg'>
          {text}
        </button>
    </div>
  )
}
