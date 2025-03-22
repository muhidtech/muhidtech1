import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>John Doe | Front-End Developer Portfolio</title>
        <meta name="description" content="Portfolio of John Doe, a front-end developer specializing in React, Next.js, TypeScript, and modern web technologies." />
        <meta name="keywords" content="front-end developer, web developer, React, Next.js, TypeScript, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Open Graph */}
        <meta property="og:title" content="John Doe | Front-End Developer Portfolio" />
        <meta property="og:description" content="Portfolio of John Doe, a front-end developer specializing in React, Next.js, TypeScript, and modern web technologies." />
        <meta property="og:url" content="https://johndoe-portfolio.com" />
        <meta property="og:site_name" content="John Doe Portfolio" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="John Doe - Front-End Developer" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe | Front-End Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of John Doe, a front-end developer specializing in React, Next.js, TypeScript, and modern web technologies." />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      
      <main className="flex min-h-screen flex-col">
        <Header />
        
        <div className="flex-grow">
          <Hero />
          <Projects />
          <Skills />
        </div>
        
        <Footer />
      </main>
    </>
  );
}
