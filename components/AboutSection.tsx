import React from 'react';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 lg:py-32 bg-brand-dark-surface text-brand-dark-text-primary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-sans text-brand-dark-text-primary">
            Who <span className="text-brand-accent">We Are</span>
          </h2>
          <p className="mt-4 text-lg text-brand-dark-text-secondary max-w-2xl mx-auto">
            Innovators at the intersection of robotics and intelligent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className="relative rounded-lg overflow-hidden shadow-xl border border-brand-dark-border aspect-w-4 aspect-h-3 order-last lg:order-first animate-fade-in-up"
            style={{
              animationDelay: '0.2s',
              animationFillMode: 'forwards',
            }}
          >
            <img
              src="https://picsum.photos/seed/darkofficefuture/800/600"
              alt="R&W Robotics team working in a futuristic dark-themed office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/10"></div>
          </div>
          <div
            className="space-y-6 animate-fade-in-up"
            style={{
              animationDelay: '0s',
              animationFillMode: 'forwards',
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold font-orbitron text-brand-accent">
              Pioneering Next-Gen Solutions
            </h3>
            <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
              At RAW Robotics, we are a dynamic collective of engineers, designers, and visionaries, passionately committed to redefining the frontiers of robotics and embedded systems. Our core mission is to architect intelligent, bespoke solutions that tackle complex real-world challenges and catalyze technological progress across diverse industries.
            </p>
            <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
              Our expertise is comprehensive, spanning from intricate low-level hardware design to sophisticated AI algorithm development. We guide projects from initial ideation through to successful deployment, fostering close collaboration with our clients to ensure the delivery of solutions that are not only robust and scalable but also truly impactful.
            </p>
            <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
              Built on a bedrock of innovation, unwavering integrity, and synergistic collaboration, RAW Robotics aspires to be your trusted ally in harnessing the transformative potential of automation and intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;