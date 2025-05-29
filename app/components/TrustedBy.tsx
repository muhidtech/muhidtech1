'use client'

import Image from 'next/image'

const brands = [
  { name: 'Google', logo: '/brands/google.svg' },
  { name: 'Stripe', logo: '/brands/stripe.svg' },
  { name: 'Netflix', logo: '/brands/netflix.svg' },
  { name: 'Slack', logo: '/brands/slack.svg' },
  { name: 'Amazon', logo: '/brands/amazon.svg' },
  { name: 'Dropbox', logo: '/brands/dropbox.svg' },
  // Duplicate for infinite loop
  { name: 'Google2', logo: '/brands/google.svg' },
  { name: 'Stripe2', logo: '/brands/stripe.svg' },
  { name: 'Netflix2', logo: '/brands/netflix.svg' },
  { name: 'Slack2', logo: '/brands/slack.svg' },
]

export default function TrustedBy() {
  return (
    <section className="relative py-16 bg-transparent overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[700px] h-[180px] rounded-full bg-white blur-3xl opacity-5" />
      </div>

      {/* Section title */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-8 px-4">
        <h3 className="text-xl md:text-2xl text-white/70 font-medium">
          Trusted by leading brands
        </h3>
      </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full z-20 pointer-events-none" />

      {/* Scrolling slider */}
      <div className="relative z-10 overflow-hidden max-w-5xl mx-auto">
        <div className="trusted-slider flex whitespace-nowrap gap-8 px-6 animate-slide">
          {brands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="w-24 h-10 md:w-28 md:h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300 shrink-0"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={112}
                height={48}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
