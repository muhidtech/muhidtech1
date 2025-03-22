import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home | Portfolio',
  description: 'Welcome to my portfolio.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}