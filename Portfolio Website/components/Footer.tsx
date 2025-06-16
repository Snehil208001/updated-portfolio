import React from 'react';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="bg-secondary py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary">
          {copyrightText}
        </p>
        {/* Optional: Add a "Powered by" or other links here */}
         <p className="text-xs text-gray-500 mt-2">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
