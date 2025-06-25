import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink as NavLinkType } from '../types';
import UiVerseButton from './UiVerseButton';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjusted scroll threshold for background change
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (targetId: string) => {
    scrollToSection(targetId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{ WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none', backdropFilter: isScrolled ? 'blur(8px)' : 'none' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            className="text-2xl sm:text-3xl font-bold cursor-pointer font-orbitron text-brand-dark-text-primary hover:text-brand-accent transition-colors"
            onClick={() => scrollToSection('hero')}
            aria-label="R&W Robotics, scroll to top"
            >
            RAW Bots
          </div>
          
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {NAV_LINKS.map((link: NavLinkType) => (
              <UiVerseButton
                key={link.label}
                onClick={() => handleLinkClick(link.targetId)}
                aria-label={`Navigate to ${link.label} section`}
                style={{ backgroundColor: '#222', fontSize: '16px', minWidth: 120 }}
              >
                {link.label}
              </UiVerseButton>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-dark-text-primary hover:text-brand-accent focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark-surface/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-xl border-t border-brand-dark-border">
          <nav className="flex flex-col items-stretch space-y-1 py-3">
            {NAV_LINKS.map((link: NavLinkType) => (
              <UiVerseButton
                key={link.label}
                onClick={() => handleLinkClick(link.targetId)}
                aria-label={`Navigate to ${link.label} section`}
                style={{ backgroundColor: '#222', fontSize: '16px', minWidth: 120, marginBottom: 8 }}
              >
                {link.label}
              </UiVerseButton>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;