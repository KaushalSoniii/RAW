import React, { useState, useRef } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Section from './Section'; // Will use Section for padding/container, but title is custom

// Arrow Icons
const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ArrowRightIconCustom: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8; // Scroll by 80% of visible width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 bg-brand-dark-bg text-brand-dark-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <div>
            <p className="section-title-sub">The Latest</p>
            <h2 className="section-title-main">SEE R&W IN ACTION.</h2>
          </div>
          <div className="hidden md:flex space-x-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 border-2 border-brand-dark-border hover:border-brand-accent rounded-full text-brand-dark-text-secondary hover:text-brand-accent transition-all duration-200"
              aria-label="Scroll projects left"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border-2 border-brand-dark-border hover:border-brand-accent rounded-full text-brand-dark-text-secondary hover:text-brand-accent transition-all duration-200"
              aria-label="Scroll projects right"
            >
              <ArrowRightIconCustom className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scrollable container needs to be outside the main container's padding for edge-to-edge feel if desired, or manage padding carefully */}
      <div className="relative">
        <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8" // `no-scrollbar` class to hide scrollbar if desired - add to global styles
            style={{scrollPaddingLeft: '1rem'}} // Ensures snapped items don't hide behind edge padding
        >
          {MOCK_PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="snap-start flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-0.8rem)] mr-4 md:mr-6 opacity-0 animate-fade-in-up" 
              style={{animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'forwards'}}
            >
               <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
            </div>
          ))}
           {/* Spacer for end of scroll */}
          <div className="flex-shrink-0 w-1"></div>
        </div>
      </div>
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>


      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;