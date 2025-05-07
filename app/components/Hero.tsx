"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'; // Import the icon you want to use
import { motion } from 'framer-motion'
import Image from 'next/image';


const Logos = [
  {logo: 'logos/dribbble-4.svg', name: "Dribbble"},
  {logo: 'logos/netlify.svg', name: "Netlify"},
  {logo: 'logos/vercel.svg', name: "Vercel"},
  {logo: 'logos/notion-2.svg', name: "Notion"},
]


export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);


  const { transform } = hoverEffect({ ref: heroRef, x: 30, y: -40, z: 30 });

  const imghover = hoverEffect({ ref: heroRef, x: 20, y: -50, z: 11 });
  return (
    <>
      <BackgroundAnimation />
      <div ref={heroRef} className='flex flex-col  items-center justify-center px-6 py-30 gap-20 sm:px-10'>
          <div className='flex flex-col items-center justify-center h-full w-full gap-5 sm:gap-10'>
              <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl xl:text-5xl lg:w-4xl text-center  font-mono font-bold '>
                  <span className='text-cyan-500'>MuhidTech</span> | Web Development & SEO-Optimized Websites
              </motion.h1>
              <div className='text-sm sm:text-center flex gap-3 xl:w-5xl flex-col pb-10 font-mono font-normal text-gray-300'>
                  <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  >Welcome to MuhidTech, where we create responsive, high-performance websites and applications using technologies like React.js, Next.js, Django, and TailwindCSS. We specialize in eCommerce platforms, landing pages, and interactive web applications that drive results.</motion.p>

                  <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                  viewport={{ once: true }}
                  >Our focus is on clean code, great user experiences, and SEO optimization to help your site rank and attract organic traffic. Let us help you build a digital presence that stands out!</motion.p>

                  <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                  viewport={{ once: true }}
                  >Expertise: Web Development, SEO, Full-Stack Development, UI/UX Design</motion.p>
                  <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
                  viewport={{ once: true }}
                  >Tech Stack: HTML, CSS, JavaScript, Typescript, React, Next.js, Django, TailwindCSS</motion.p>

                  <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.8 }}
                  viewport={{ once: true }}
                  >Contact us today to get started on your next project!</motion.p>
              </div>
              <button>
                  <Link href="/contact" className="flex items-center text-white bg-cyan-500 hover:bg-cyan-700 font-bold py-2 px-4 rounded-xl">
                      <FaTelegramPlane className="mr-2" /> {/* Icon with some margin */}
                      Let's Talk
                  </Link>
              </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ transform, opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='mt-6 lg:mt-0 shadow-md relative'
          >

            {/* Background Animation */}
            <motion.img 
              whileInView={{ transform: imghover.transform }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
              src="/logo1.jpeg"
              alt="MuhidTech"
              className='w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg rounded-2xl bg-cover '
            />


            {/* Top Right Feature */}
            <motion.div 
            animate={{
              y: [-5, 0], // keyframes for bounce
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute top-5 right-[-20%] flex gap-3 items-center bg-white/10 backdrop-blur-xl text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl text-white shadow-md border border-white/20'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 bg-cyan-500 border-white'></div>
              <p>Fast, Responsive & SEO-Ready</p>
            </motion.div>




            {/* Bottom Left Feature */}
            <motion.div 
            animate={{
              y: [-5, 0], // keyframes for bounce
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='absolute bottom-5 left-[-20%] flex gap-3 items-center bg-white/10 backdrop-blur-xl text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl text-white shadow-md border border-white/20'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 bg-cyan-500 border-white'></div>
              <p>Crafted with React, Next.js & Tailwind</p>
            </motion.div>


          </motion.div>


          <p className='text-sm text-center flex gap-3 lg:w-5xl flex-col pb-10 font-mono font-normal text-gray-300'>
              Helping you build a digital presence that stands out! <br />
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 w-full md:px-30 items-center justify-center gap-5'>
            {Logos.map((item, index) => (
              <motion.div 
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.1 }}
              viewport={{ once: true }}
              className='flex flex-col items-center justify-center gap-2' key={index}>
                <Image
                  key={index}
                  src={item.logo}
                  width={70}
                  height={70}
                  alt={`Logo ${index + 1}`}
                  className={`transition-transform duration-300 transform hover:scale-110`}
                  />
                <p className='text-xs sm:text-sm text-center font-mono font-semibold text-gray-300'>{item.name}</p>
              </motion.div>
            ))}
          </div>
      </div>

    </>
  )
}


interface HoverEffectProps {
    ref: React.RefObject<HTMLDivElement | null>;
    x?: number;
    y?: number;
    z?: number;
  }
  
  interface HoverEffectReturn {
    transform: string;
    transition: string;
  }
  
  const hoverEffect = ({ ref, x = 0, y = 0, z = 0 }: HoverEffectProps): HoverEffectReturn => {
    const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const { offsetWidth: width, offsetHeight: height } = ref.current;
        const { clientX, clientY } = e;
  
        const x = (clientX - width / 2) / width;
        const y = (clientY - height / 2) / height;
  
        setCoords({ x, y, z });
      }
    };
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    useEffect(() => {
      const { current } = ref;
      if (current) {
        current.addEventListener('mousemove', handleMouseMove);
        current.addEventListener('mouseenter', handleMouseEnter);
        current.addEventListener('mouseleave', handleMouseLeave);
  
        return () => {
          current.removeEventListener('mousemove', handleMouseMove);
          current.removeEventListener('mouseenter', handleMouseEnter);
          current.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, [ref]);
  
    const { x: xCords, y: yCoords } = coords;
    const xTransform = isHovering ? xCords * x : 0;
    const yTransform = isHovering ? yCoords * y : 0;
    const zTransform = isHovering ? z : 0;
  
    const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${xTransform}deg) translateZ(${zTransform}px)`;
    const transition = isHovering ? 'all 0.1s ease-in-out' : '';
  
    return { transform, transition };
  };

  



function BackgroundAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full blur-3xl opacity-30"
      />
    </motion.div>
  )
}

