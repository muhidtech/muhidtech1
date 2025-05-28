"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function TimelineItem({ icon, title, date, description, isLeft }: {
    icon: React.ReactNode;
    title: string;
    date: string;
    description: string;
    isLeft: boolean;
    }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });
  
    const x = useTransform(scrollYProgress, [0, 1], [isLeft ? "-40%" : "40%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
    return (
      <motion.div
        ref={ref}
        style={{ x, opacity }}
        className={`relative w-full md:w-1/2 ${isLeft ? "md:pr-10 md:ml-auto" : "md:pl-10"}`}
      >
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="z-20 bg-black p-2 rounded-full shadow-md"
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-xs font-semibold pb-2">{date}</p>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </motion.div>
    );
    }