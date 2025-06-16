import React from 'react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-primary rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
      {project.imageUrl && (
        <img 
            src={project.imageUrl} 
            alt={`Screenshot of ${project.title}`} 
            className="w-full h-48 object-cover" 
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-text-main mb-2">{project.title}</h3>
        <div className="text-text-secondary text-sm mb-4 flex-grow space-y-2">
          {project.description.split('\\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {project.tags && project.tags.length > 0 && (
          <div className="mb-4">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="inline-block bg-accent/20 text-accent text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-auto flex space-x-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" variant="primary" size="sm" className="flex-1">
              Live Demo
            </Button>
          )}
          {project.sourceUrl && (
            <Button href={project.sourceUrl} target="_blank" variant="outline" size="sm" className="flex-1">
              Source Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;