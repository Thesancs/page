import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Guarantee from '../components/Guarantee';
import Footer from '../components/Footer';
import { useInView } from '../hooks/useInView';

const LandingPage: React.FC = () => {
  // Set the title
  useEffect(() => {
    document.title = 'Guia: Ouro do Brás - Fornecedores Confiáveis';
    
    // Get the title element
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-default')) {
      titleElement.removeAttribute('data-default');
    }
  }, []);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;