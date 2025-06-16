import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  id: string;
  title: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, title, projects }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-accent mb-12">
          {title}
        </h2>
        {projects.length === 0 ? (
          <p className="text-center text-text-secondary text-lg">More projects coming soon. Stay tuned!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
