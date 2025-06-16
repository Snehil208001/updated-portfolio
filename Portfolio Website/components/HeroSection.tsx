import React from 'react';
import Button from './Button';

interface HeroSectionProps {
  name: string;
  headline: string;
  profileImageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, headline, profileImageUrl, ctaText, ctaLink }) => {
  return (
    <section id="hero" className="bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {profileImageUrl && (
          <img 
            src={profileImageUrl} 
            alt={`${name}'s profile`} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 shadow-xl border-4 border-secondary object-cover" 
          />
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-main mb-4">
          Hi, I'm <span className="text-accent">{name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          {headline}
        </p>
        {ctaText && ctaLink && (
          <Button href={ctaLink} variant="primary" size="lg">
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
