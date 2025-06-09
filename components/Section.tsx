import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  // Title props removed as titles are now highly custom per section
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  // Default background set to transparent, specific sections will define their bg colors
  // Default text color will be inherited from body or parent elements
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 lg:py-32 ${className} opacity-0 animate-fade-in-up`} 
      style={{animationFillMode: 'forwards'}} // Ensure animation persists
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;