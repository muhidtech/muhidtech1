'use client';

import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './components.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact me', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex py-5 md:px-20 px-10 items-center justify-between z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/50' : ''}`}
    >
      <motion.h1
        className="text-2xl font-semibold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href='/'>MuhidTech</Link>
      </motion.h1>

      <div className="hidden md:flex gap-10 text-center items-center">
        {links.map((nav, key) => (
          <Link
            key={key}
            href={nav.path}
            className={`links ${pathname === nav.path ? 'activeLinks' : ''}`}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-[50%] h-screen bg-black/50 flex-col flex items-center justify-center gap-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1 }}
          >
            {links.map((nav, key) => (
              <Link
                key={key}
                href={nav.path}
                className={`links ${pathname === nav.path ? 'activeLinks' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {nav.name}
              </Link>
            ))}

            <button
              className="cursor-pointer absolute top-5 right-5 text-4xl text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!menuOpen && (
        <motion.button
          className="md:hidden cursor-pointer text-3xl text-white hover:scale-110 transition duration-300"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FiMenu />
        </motion.button>
      )}
    </motion.nav>
  );
};

export default Navbar;
