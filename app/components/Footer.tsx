"use client";


import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaYoutube, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full  ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">MuhidTech</h2>
          <p className="mt-4 text-sm text-gray-400">
            Building fast, modern, and optimized web experiences. Crafted with precision using Next.js, React, and Django.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300 font-semibold">
            <li className='hover:text-cyan-500'><Link href="/">Home</Link></li>
            <li className='hover:text-cyan-500'><Link href="/projects">Projects</Link></li>
            <li className='hover:text-cyan-500'><Link href="/blog">Blog</Link></li>
            <li className='hover:text-cyan-500'><Link href="/about">About</Link></li>
            <li className='hover:text-cyan-500'><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300 font-semibold">
            <li className='hover:text-cyan-500'>Web Development</li>
            <li className='hover:text-cyan-500'>Modern Website</li>
            <li className='hover:text-cyan-500'>eCommerce Solutions</li>
            <li className='hover:text-cyan-500'>SEO & Optimization</li>
            <li className='hover:text-cyan-500'>UI/UX Design</li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-3">Connect</h3>
          <div className="grid grid-cols-4 gap-4 text-2xl text-white/80">
            <Link href="mailto:hello@muhidtech.com" aria-label="Email">
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://github.com/muhidtech" target="_blank" aria-label="GitHub">
              <FaGithub className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://x.com/MuhidTech911" target="_blank" aria-label="Twitter">
              <FaTwitter className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohammed-muhideen-abdul-kadir-19aa99357" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://www.tiktok.com/@muhidtech">
              <FaTiktok className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://www.instagram.com/muhidtech__/" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=61575545686798">
              <FaFacebook className="hover:text-cyan-400 transition" />
            </Link>
            <Link href="https://www.youtube.com/@MuhidTech" target="_blank" aria-label="YouTube">
              <FaYoutube className="hover:text-cyan-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} MuhidTech. All rights reserved.
      </div>
    </footer>
  );
}
