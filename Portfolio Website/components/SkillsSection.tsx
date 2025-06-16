import React from 'react';
import { Skill } from '../types';

interface SkillsSectionProps {
  id: string;
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, title, skills }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryOrder: Skill['category'][] = ['Languages', 'Frontend', 'Backend', 'Tools', 'Other'];


  return (
    <section id={id} className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-accent mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOrder.map(category => {
            if (!skillsByCategory[category] || skillsByCategory[category].length === 0) {
              return null;
            }
            return (
              <div key={category} className="bg-secondary p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-text-main mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skillsByCategory[category].map(skill => (
                    <li key={skill.id} className="text-text-secondary flex items-center">
                      <svg className="w-4 h-4 mr-2 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {skill.name}
                      {skill.level && (
                        <div className="ml-auto w-1/3 bg-gray-700 rounded-full h-2.5">
                          <div className="bg-accent h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;