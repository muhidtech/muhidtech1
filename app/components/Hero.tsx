"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <HiOutlineMail size={24} />, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8">
      <motion.div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="order-2 lg:order-1" variants={itemVariants}>
          <motion.span 
            className="text-lg md:text-xl font-medium text-blue-500 dark:text-blue-400 block mb-3"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            John Doe
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Front-End Developer
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            variants={itemVariants}
          >
            I build exceptional and accessible digital experiences for the web. Specializing in modern frontend technologies to create responsive, performant, and beautiful web applications.
          </motion.p>
          
          <motion.div className="flex space-x-4 mb-8" variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src="/profile.jpg"
              alt="John Doe - Front-End Developer"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;