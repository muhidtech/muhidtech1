'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  { name: 'Google', logo: '/brands/google.svg' },
  { name: 'Stripe', logo: '/brands/stripe.svg' },
  { name: 'Netflix', logo: '/brands/netflix.svg' },
  { name: 'Slack', logo: '/brands/slack.svg' },
  { name: 'Amazon', logo: '/brands/amazon.svg' },
  { name: 'Dropbox', logo: '/brands/dropbox.svg' },
]

export default function TrustedBy() {
  return (
    <section className="relative py-5 px-6 text-white h-full w-full">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[1100px] h-[200px] rounded-full bg-white blur-3xl opacity-10" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-10 ">
        <h3 className="text-xl md:text-2xl text-white/70 font-medium tracking-tight">
          Trusted by leading brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="w-24 h-10 md:w-32 md:h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              initial={{ opacity: 0, x: index < 3 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={128}
                height={48}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}