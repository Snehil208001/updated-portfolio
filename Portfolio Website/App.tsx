import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { YOUR_NAME, YOUR_HEADLINE, YOUR_BIO, YOUR_PROFILE_PICTURE_URL, PROJECTS_DATA, SKILLS_DATA, CONTACT_LINKS_DATA, YOUR_EMAIL, COPYRIGHT_TEXT, NAV_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-text-main">
      <Navbar navLinks={NAV_LINKS} siteTitle={YOUR_NAME} />

      <main className="flex-grow">
        <HeroSection 
          name={YOUR_NAME} 
          headline={YOUR_HEADLINE} 
          profileImageUrl={YOUR_PROFILE_PICTURE_URL}
          ctaLink="#projects"
          ctaText="View My Work"
        />
        <AboutSection id="about" bio={YOUR_BIO} title={`About ${YOUR_NAME}`} />
        <SkillsSection id="skills" skills={SKILLS_DATA} title="My Skills & Proficiencies" />
        <ProjectsSection id="projects" projects={PROJECTS_DATA} title="Featured Projects" />
        <ContactSection id="contact" email={YOUR_EMAIL} contactLinks={CONTACT_LINKS_DATA} title="Get In Touch" />
      </main>

      <Footer copyrightText={COPYRIGHT_TEXT} />
    </div>
  );
};

export default App;
