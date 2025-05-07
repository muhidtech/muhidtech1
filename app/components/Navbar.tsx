'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaUserAlt, FaBlog } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai';
import { MdContactMail } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';

const navLinks = [
  { label: 'Home', href: '/', icon: <AiFillHome size={20} /> },
  { label: 'Projects', href: '/projects', icon: <VscFolderLibrary size={20} /> },
  { label: 'Blog', href: '/blog', icon: <FaBlog size={20} /> },
  { label: 'About', href: '/about', icon: <FaUserAlt size={20} /> },
  { label: 'Contact', href: '/contact', icon: <MdContactMail size={20} /> },
]


export default function Navbar() {
  
  
  return (
    <>
      <BottomNav />
    </>
  )
}

function BottomNav() {
  const pathname = usePathname()

  return (
    <motion.div 
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="fixed bottom-5 left-0 w-full z-50 flex items-center justify-center  px-5">
      <div className="px-7 py-4  flex md:gap-10 gap-6 bg-black/20 backdrop-blur-2xl rounded-full">
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href
          return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={i}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i*0.2 }}
            >
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className={`relative flex flex-col items-center justify-center group`}
                >
                <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: isActive ? 1.2 : 1 }}
                animate={{
                  y: isActive ? [-5, 0] : 0, // keyframes for bounce
                }}
                transition={{
                  duration: 0.6,
                  repeat: isActive ? Infinity : 0,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              
                  className={`transition-colors ${isActive ? 'text-cyan-500' : 'text-gray-400 group-hover:text-cyan-400'}`}
                  >
                  {link.icon}
                </motion.span>
                <span
                  className={`text-xs mt-1 transition-opacity ${
                    isActive ? 'opacity-100 text-cyan-500' : 'opacity-60 group-hover:opacity-100'
                  }`}
                  >
                  {link.label}
                </span>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

