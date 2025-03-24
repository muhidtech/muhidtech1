"use client";

import React from 'react'
import { FaGithub, FaTiktok, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="w-full bg-black/80 text-white py-10 px-5 flex flex-col items-center gap-5">
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/muhidtech" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-[#B68250] transition duration-300" />
          </a>
          <a href="https://www.tiktok.com/@muhidtech?_t=ZM-8uwAniWFesx&_r=1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaTiktok className="hover:text-[#B68250] transition duration-300" />
          </a>
          <a href="https://wa.me/233509954835" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaWhatsapp className="hover:text-[#B68250] transition duration-300" />
          </a>
        </div>
        <button
          className="mt-5 py-3 px-6 bg-[#B68250] rounded-2xl cursor-pointer hover:bg-[#C9DDEE] transition duration-300"
          onClick={() => window.location.href = '/contact'}
        >
          Contact Me
        </button>
        <p className="text-sm text-white/50">© {new Date().getFullYear()} MuhidTech. All Rights Reserved.</p>
      </footer>
  )
}

export default Footer
