import React from 'react';

interface AboutSectionProps {
  id: string;
}

const teamImages = [
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Robot in action' },
  { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', alt: 'Our Team' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Winning Moment' },
];

const keyPoints = [
  "Cutting-edge robotics & AI solutions",
  "Award-winning, passionate team",
  "Trusted by industry leaders",
  "Collaborative, client-focused approach",
];

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 lg:py-32 bg-brand-dark-surface text-brand-dark-text-primary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-orbitron text-white tracking-tight">
            Who <span className="text-brand-accent">We Are</span>
          </h2>
          <div className="mx-auto mt-2 mb-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full" />
          <p className="mt-2 text-lg text-brand-dark-text-secondary max-w-2xl mx-auto">
            Innovators at the intersection of robotics and intelligent systems.
          </p>
        </div>

        {/* Modern grid for images */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {teamImages.map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-dark-border bg-black/30 backdrop-blur-md group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover object-center group-hover:opacity-90 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-semibold bg-black/40 backdrop-blur-sm">
                {img.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Modern text block with key points */}
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-semibold font-orbitron text-brand-accent mb-4">
            Pioneering Next-Gen Solutions
          </h3>
          
        </div>

        {/* Modern feature cards for key points */}
        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          {keyPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-black/40 rounded-xl px-5 py-4 shadow border border-brand-dark-border"
            >
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              <span className="text-base md:text-lg text-white font-semibold">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;