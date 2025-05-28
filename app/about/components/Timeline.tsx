"use client";


import { FaCode, FaStar, FaRocket, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";


const timeline = [
  {
    icon: <FaRocket size={24} className="text-cyan-500" />,
    title: "MuhidTech Was Born",
    date: "2021",
    description: "We launched our journey into digital development, with a passion for crafting performance-driven web experiences.",
  },
  {
    icon: <FaCode size={24} className="text-cyan-500" />,
    title: "First Major Project",
    date: "2022",
    description: "Delivered our first full-stack ecommerce platform using Django and Next.js with excellent client feedback.",
  },
  {
    icon: <FaCogs size={24} className="text-cyan-500" />,
    title: "Scaling Up",
    date: "2023",
    description: "Grew our team and launched multiple web applications for international clients with strong SEO strategies.",
  },
  {
    icon: <FaStar size={24} className="text-cyan-500" />,
    title: "Award-Winning Work",
    date: "2024",
    description: "Recognized on Awwwards for design innovation and user experience across several showcase sites.",
  },
];

export default function Timeline() {
  return (
    <div className="relative flex flex-col gap-10 py-20 px-6 overflow-hidden">
      <h1 className="w-full text-center mb-20 flex flex-col gap-5">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{once: true}}
          className="text-3xl md:text-5xl font-bold text-center font-mono text-cyan-500 z-10 relative"
        >
          Our Journey So Far
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          viewport={{once: true}}
          className="text-gray-300 text-sm text-center max-w-2xl mx-auto z-10 relative"
        >
          From our inception to our latest projects, here&apos;s a glimpse into our journey and milestones.
        </motion.p>
      </h1>

      <div className="relative z-10 max-w-5xl mx-auto space-y-40 md:border-x border-cyan-500">
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            title={item.title}
            date={item.date}
            description={item.description}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}



