import React, { useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = React.useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('animate-modal-enter');
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    } else {
      setAnimationClass('animate-modal-leave');
    }
  }, [isOpen]);
  
  const handleClose = () => {
    setAnimationClass('animate-modal-leave');
    setTimeout(onClose, 300); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  if (!project) return null;
  if (!isOpen && animationClass !== 'animate-modal-leave') return null;


  return (
    <div 
        className={`fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-labelledby="project-modal-title"
        role="dialog"
        aria-modal="true"
    >
      <div 
        ref={modalRef}
        className={`bg-brand-dark-surface rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-brand-dark-border ${animationClass}`}
      >
        <div className="relative">
          <img 
            src={project.imageUrl} 
            alt={`Image of ${project.name}`}
            className="w-full h-64 md:h-80 object-cover" 
          />
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark-surface"
            aria-label="Close project details"
          >
            <CloseIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-brand-dark-text-primary">
          <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold font-orbitron text-brand-accent mb-4">{project.name}</h2>
          
          {project.longDescription && (
            // Using basic P tag for now, prose class might need dark theme adjustments
            <p className="text-brand-dark-text-secondary mb-6 text-sm md:text-base leading-relaxed">
              {project.longDescription}
            </p>
          )}
          
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-brand-dark-text-tertiary uppercase tracking-wider mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-brand-dark-border text-brand-dark-text-secondary text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.projectUrl && project.projectUrl !== '#' && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-dark-primary inline-flex items-center w-full sm:w-auto justify-center text-sm" // Ensure cta-button-dark-primary is defined globally
            >
              View Project Online
              <ExternalLinkIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </a>
          )}
        </div>
         <div className="px-6 py-4 bg-brand-dark-bg border-t border-brand-dark-border text-right sm:hidden">
            <button
              onClick={handleClose}
              className="bg-brand-dark-surface-hover hover:bg-brand-dark-border text-brand-dark-text-primary font-medium py-2 px-4 rounded-md text-sm transition-colors"
            >
              Close
            </button>
          </div>
      </div>
    </div>
  );
};

export default ProjectModal;