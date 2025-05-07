
"use client"
import { motion } from 'framer-motion'



export default function BackgroundAnimation() {
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