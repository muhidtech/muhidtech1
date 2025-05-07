"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const WhatsAppCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-16 flex justify-center"
    >
      <Link
        href="https://wa.me/233509954835?text=Hello%20MuhidTech!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white flex items-center py-3 px-6 rounded-lg shadow-xl hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp size={24} className="mr-3" />
        <span className="font-semibold text-lg">Chat with us on WhatsApp</span>
      </Link>
    </motion.section>
  );
};



export const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const faqs = [
      {
        question: "What services does MuhidTech offer?",
        answer: "We provide custom web development, mobile app development, SEO optimization, and much more!",
      },
      {
        question: "How long does it take to build a website?",
        answer: "Our project timelines vary depending on the complexity of the website. Typically, it takes 4-6 weeks to complete.",
      },
      {
        question: "Can I update my website later?",
        answer: "Yes, we offer ongoing support and maintenance for your website after launch.",
      },
      {
        question: "Do you provide website hosting?",
        answer: "Yes, we provide secure and reliable hosting services for your website.",
      },
      {
        question: "What is your pricing model?",
        answer: "We offer competitive pricing based on your project’s requirements. We provide a detailed proposal after assessing your needs.",
      },
    ];
  
    const toggleFAQ = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className="max-w-3xl mx-auto p-6 mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                <span className="text-cyan-500 font-semibold">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };

export default WhatsAppCTA;