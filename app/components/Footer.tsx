"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      id: 2,
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      id: 4,
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            Contact: your.email@example.com | +1 (123) 456-7890
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;