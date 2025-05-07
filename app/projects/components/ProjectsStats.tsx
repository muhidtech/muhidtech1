"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 35 },
  { label: "Technologies Used", value: 15 },
  { label: "Happy Clients", value: 20 },
  { label: "Live Sites Delivered", value: 18 },
];

const StatCounter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-cyan-500">
      {count}
    </span>
  );
};

export default function ProjectStats() {
  return (
    <section className="w-full bg-white/5  rounded-xl p-10 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Our Impact in Numbers</h2>
        <p className="text-sm text-gray-300">Real results from real projects</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <StatCounter value={stat.value} />
            <p className="text-white text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
