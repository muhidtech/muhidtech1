"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaStar, FaRocket, FaCogs } from "react-icons/fa";

const timeline = [
  {
    icon: <FaRocket size={24} className="text-cyan-500" />,
    title: "MuhidTech Was Born",
    date: "2021",
    description:
      "We launched our journey into digital development, with a passion for crafting performance-driven web experiences.",
  },
  {
    icon: <FaCode size={24} className="text-cyan-500" />,
    title: "First Major Project",
    date: "2022",
    description:
      "Delivered our first full-stack ecommerce platform using Django and Next.js with excellent client feedback.",
  },
  {
    icon: <FaCogs size={24} className="text-cyan-500" />,
    title: "Scaling Up",
    date: "2023",
    description:
      "Grew our team and launched multiple web applications for international clients with strong SEO strategies.",
  },
  {
    icon: <FaStar size={24} className="text-cyan-500" />,
    title: "Award-Winning Work",
    date: "2024",
    description:
      "Recognized on Awwwards for design innovation and user experience across several showcase sites.",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const globalOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-10 py-20 px-6 overflow-hidden">
      <h1 className="w-full text-center mb-20 flex flex-col gap-5">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl md:text-5xl font-bold text-center font-mono text-cyan-500 z-10 relative"
        >
          Our Journey So Far
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="text-gray-300 text-sm text-center max-w-2xl mx-auto z-10 relative"
        >
          From our inception to our latest projects, here&apos;s a glimpse into our journey and milestones.
        </motion.p>
      </h1>

      <div className="relative z-10 max-w-5xl mx-auto space-y-40 md:border-x border-cyan-500">
        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          const direction = isLeft ? "-50px" : "50px";
          const translateX = useTransform(scrollYProgress, [0, 1], [isLeft ? -50 : 50, 0]);

          return (
            <motion.div
              key={index}
              style={{
                x: scrollYProgress.to([0, 1], [direction, "0px"]),
                opacity: globalOpacity,
              }}
              className={`relative w-full md:w-1/2 ${
                isLeft ? "md:pr-10 md:ml-auto" : "md:pl-10"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="z-20 bg-black p-2 rounded-full shadow-md"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p
                  className="text-gray-500 text-sm mb-2"
                >
                  {item.date}
                </p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
