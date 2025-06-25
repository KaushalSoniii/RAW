import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="
        bg-brand-dark-surface/80 border border-brand-dark-bg/40 shadow-2xl rounded-2xl
        overflow-hidden flex flex-col w-full max-w-full sm:max-w-xl min-h-[260px] sm:min-h-[340px] group
        transition-all duration-300 ease-in-out hover:shadow-3xl hover:border-brand-accent/60
        cursor-pointer backdrop-blur-lg
      "
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
    >
      <div className="relative aspect-[16/9] sm:aspect-[16/6] overflow-visible">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
        {/* "Watch Now" Badge */}
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
          <span className="bg-black/70 backdrop-blur text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg sm:rounded-xl shadow-md tracking-wide">
            Watch Now
          </span>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-8 sm:py-6 flex-1 flex flex-col justify-end">
        <h3 className="text-lg sm:text-2xl font-bold text-brand-dark-text-primary group-hover:text-brand-accent transition-colors duration-200 mb-1 sm:mb-2 break-words">
          {project.name}
        </h3>
        {/* Optionally add a subtle divider or a tech stack row here */}
      </div>
    </div>
  );
};

export default ProjectCard;