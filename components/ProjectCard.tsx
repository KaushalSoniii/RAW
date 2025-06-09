import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-brand-dark-surface rounded-lg overflow-hidden flex flex-col h-full w-full group transition-all duration-300 ease-in-out hover:shadow-card-dark-hover cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden"> {/* Adjusted aspect ratio */}
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div> {/* Subtle gradient overlay */}
        
        {/* "Watch Now" Badge */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-md">
            Watch Now
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-dark-text-primary group-hover:text-brand-accent transition-colors duration-200 truncate">
          {project.name}
        </h3>
        {/* Description and tech tags removed from card view for minimalist design */}
      </div>
    </div>
  );
};

export default ProjectCard;