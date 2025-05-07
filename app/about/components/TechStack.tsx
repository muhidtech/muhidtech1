'use client';
import { motion } from 'framer-motion';
import { SiDjango, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiNextdotjs, SiReact, SiVercel, SiNetlify, SiGoogle, SiVite } from 'react-icons/si';

const techStack = [
  { name: 'Django', icon: SiDjango },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Netlify', icon: SiNetlify },
//   { name: 'VSCode', icon: SiVisualstudiocode },
  { name: 'Vite', icon: SiVite },
  { name: 'SEO', icon: SiGoogle },
];

export default function TechStack() {
  return (
    <section className="w-full py-20 px-5 md:px-20 ">
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-500">Technologies We Use</h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          At MuhidTech, we leverage a powerful, modern tech stack to build high-performance and scalable websites. Here&lsquo;s what powers our development.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-xl shadow-md hover:shadow-xl border border-white/20"
          >
            <tech.icon className="text-4xl text-cyan-400 mb-2" />
            <p className="text-sm font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
