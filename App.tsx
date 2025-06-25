import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from '@/components/ContactSection'; // Changed to aliased import
import Footer from '@/components/Footer'; // Changed to aliased import
import TrustedBySection from './components/TrustedBySection'; // Add this import
import { SECTION_IDS } from './constants';

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Adjust for fixed header height if necessary
      const headerOffset = document.querySelector('header')?.offsetHeight || 70; // Dynamically get header height
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (sectionId === SECTION_IDS.HERO) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark-bg text-brand-dark-text-primary">
      <Header scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <HeroSection id={SECTION_IDS.HERO} scrollToProjects={() => scrollToSection(SECTION_IDS.PROJECTS)} />
        <ProjectsSection id={SECTION_IDS.PROJECTS} />
        <TrustedBySection /> {/* <-- Add this line */}
        <AboutSection id={SECTION_IDS.ABOUT} />
        <ContactSection id={SECTION_IDS.CONTACT} />
      </main>
      <Footer />
    </div>
  );
};

export default App;