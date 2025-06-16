import React from 'react';
import { ContactLink } from '../types';
import Button from './Button';

interface ContactSectionProps {
  id: string;
  title: string;
  email: string;
  contactLinks: ContactLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, title, email, contactLinks }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8">
          {title}
        </h2>
        <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        
        <Button 
          href={`mailto:${email}`} 
          variant="primary" 
          size="lg"
          className="mb-10"
        >
          Say Hello 👋 ({email})
        </Button>

        {contactLinks && contactLinks.length > 0 && (
          <div>
            <p className="text-text-secondary mb-4">Or find me on:</p>
            <div className="flex justify-center space-x-6">
              {contactLinks.filter(link => link.id !== 'email').map(link => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-secondary hover:text-accent transition-colors duration-150"
                  aria-label={`Link to my ${link.name} profile`}
                >
                  {/* Placeholder for icon - you'd use an SVG or an icon library here */}
                  {link.icon ? link.icon : <span className="text-2xl underline">{link.name}</span>}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
