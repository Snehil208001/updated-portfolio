import React from 'react';

interface AboutSectionProps {
  id: string;
  title: string;
  bio: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, title, bio }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-accent mb-12">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-text-main leading-relaxed space-y-6">
          {bio.split('\\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
