'use client';

import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';
import WhatsAppCTA from "./Whats";
import Link from "next/link";

const ContactInfoSocials = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-2xl bg-white/5 p-8 rounded-3xl shadow-lg flex flex-col gap-8 md:flex-row items-center justify-between"
      >
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-400">Get In Touch</h3>
          <p className="text-sm mt-2 text-gray-200">Feel free to reach out to us anytime!</p>
          <p className="text-lg mt-4 font-bold text-gray-300">Email: <span className="text-cyan-500">muhidtech77@gmail.com</span></p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-8 md:mt-0">
          <Link
            href="https://github.com/muhidtech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://x.com/MuhidTech911"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohammed-muhideen-abdul-kadir-19aa99357"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://web.facebook.com/profile.php?id=61575545686798"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/muhidtech__"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.tiktok.com/@muhidtech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="Tiktok"
          >
            <FaTiktok size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/@MuhidTech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/20 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </motion.div>

      <WhatsAppCTA />
    </section>
  );
};

export default ContactInfoSocials;
