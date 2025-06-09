import React from 'react';

interface HeroSectionProps {
  id: string;
  scrollToProjects: () => void;
}

const BACKGROUND_VIDEO_URL = "https://videos.ctfassets.net/qx5k8y1u9drj/lFRtEv7I28F9X8OsHOPfP/6e071089f2c0308511cdc4a4ccb47af7/1080p_Website_Loop_040125D.mp4";

// Placeholder Icons - Ideally, use more detailed SVGs or an icon library
const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 20 20" {...props}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
);
const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( // Placeholder for X (Twitter)
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74.001 8.333.001 7.053.059c-1.353.056-2.678.337-3.839.812-1.161.474-2.163 1.144-3.009 1.99S.687 4.64.213 5.801C.029 6.516 0 7.318 0 12c0 4.682.029 5.484.213 6.199.474 1.161 1.144 2.163 1.99 3.009.846.846 1.848 1.517 3.009 1.99.715.183 1.517.213 2.834.213H12c4.682 0 5.484-.029 6.199-.213 1.161-.474 2.163-1.144 3.009-1.99.846-.846 1.517-1.848 1.99-3.009.183-.715.213-1.517.213-2.834V12c0-4.682-.029-5.484-.213-6.199-.474-1.161-1.144-2.163-1.99-3.009C20.199.687 19.198.016 18 .016c-1.266-.058-1.645-.059-4.851-.059zm0 5.816a6.184 6.184 0 100 12.368 6.184 6.184 0 000-12.368zm0 10.155a3.971 3.971 0 110-7.942 3.971 3.971 0 010 7.942zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const LinkedInIconHero: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);


const HeroSection: React.FC<HeroSectionProps> = ({ id, scrollToProjects }) => {
  return (
    <section id={id} className="relative h-screen flex items-end justify-start text-left bg-brand-dark-bg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={BACKGROUND_VIDEO_URL}
          poster="https://picsum.photos/seed/darkroboticsbg/1920/1080"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div> {/* Darker gradient from bottom */}
      </div>

      <div className="relative z-10 p-6 md:p-12 lg:p-16 xl:p-20 w-full animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark-text-primary mb-6 md:mb-8 leading-tight font-sans">
            R&W Robotics: Engineering the Future of Intelligent Automation.
          </h1>
          <a 
            href="#" // Replace with actual video link or modal trigger
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-dark-text-primary hover:text-brand-accent transition-colors duration-200 text-base md:text-lg font-medium group"
          >
            <PlayIcon className="w-8 h-8 mr-2 text-brand-accent group-hover:scale-110 transition-transform"/>
            Watch the full video
            <ExternalLinkIcon className="w-5 h-5 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
      
      {/* Social Media Icons Bottom Right */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-10 flex space-x-4 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" className="text-brand-dark-text-secondary hover:text-brand-accent transition-colors">
            <XIcon className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-brand-dark-text-secondary hover:text-brand-accent transition-colors">
            <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" className="text-brand-dark-text-secondary hover:text-brand-accent transition-colors">
            <LinkedInIconHero className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>

      {/* Optional: Scroll Down Indicator - can be adapted or removed */}
       <div 
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center p-2 rounded-full border-2 border-brand-dark-text-secondary hover:border-brand-accent text-brand-dark-text-secondary hover:text-brand-accent transition-all cursor-pointer group animate-fade-in" 
            style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}
            aria-label="Scroll to projects section"
        >
             <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

    </section>
  );
};

export default HeroSection;