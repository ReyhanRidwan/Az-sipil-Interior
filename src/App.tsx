/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CalculatorRAB from './components/CalculatorRAB';
import SurveyProject from './components/SurveyProject';
import TeamAndTestimonials from './components/TeamAndTestimonials';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [prefilledData, setPrefilledData] = useState<{
    jenisProyek: string;
    luasArea: string;
    lokasiProyek: string;
  } | null>(null);

  // Coordinated smooth scrolling handler
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72; // Adjusted offset for modern sticky navbar layout
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContinueToSurvey = (data: {
    jenisProyek: string;
    luasArea: string;
    lokasiProyek: string;
  }) => {
    setPrefilledData(data);
    // Smooth scrolling is triggered instantly by the useEffect inside SurveyProject.tsx
  };

  return (
    <div className="relative min-h-screen bg-white text-brand-dark selection:bg-accent-gold selection:text-white">
      {/* Sticky Top-Bar Navigation */}
      <Navbar
        onOpenSurvey={() => handleScrollToSection('survey-proyek')}
        onScrollToSection={handleScrollToSection}
      />

      {/* Hero Showcase with interactive video/image slide */}
      <Hero
        onScrollToRAB={() => handleScrollToSection('kalkulator-rab')}
        onScrollToSurvey={() => handleScrollToSection('survey-proyek')}
      />

      {/* Profile, Visi, Misi, and Keunggulan Grid */}
      <About />

      {/* Services grid & descriptions */}
      <Services
        onScrollToSurvey={() => handleScrollToSection('survey-proyek')}
      />

      {/* Architectural portfolio gallery */}
      <Portfolio
        onScrollToSurvey={() => handleScrollToSection('survey-proyek')}
      />

      {/* Interactive RAB calculator showing average IDR rates */}
      <CalculatorRAB
        onContinueToSurvey={handleContinueToSurvey}
      />

      {/* High-conversion survey project funnel */}
      <SurveyProject
        prefilledData={prefilledData}
        onClearPrefilled={() => setPrefilledData(null)}
      />

      {/* Testimonials and common FAQ accordions */}
      <TeamAndTestimonials />

      {/* Contact credentials, quick email form & schema-ld structure */}
      <ContactFooter />
    </div>
  );
}
