'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_ajqgis5', 
        'template_490gtnh', 
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'NTN_bMjulVyPJTrY1'
      );
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
    }

    setLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center p-5 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold  font-mono  mb-10"
      >
        Let&lsquo;s Build Your Dream Project Together!
      </motion.h1>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-800 border border-cyan-500 rounded-lg focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email: example@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-800 rounded-lg border border-cyan-500 focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-4 bg-gray-800 rounded-lg border border-cyan-500 focus:outline-none"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-cyan-500 rounded-2xl cursor-pointer hover:bg-[#C9DDEE] transition duration-300"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      {success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 text-green-400"
        >
          Your message has been sent successfully!
        </motion.p>
      )}
    </motion.section>
  );
};

export default Contact;
