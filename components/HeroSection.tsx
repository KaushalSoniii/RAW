import React from 'react';

const HEADER_HEIGHT = 80;

const HeroSection: React.FC = () => (
  <section
    className="relative w-full flex items-center justify-start overflow-hidden isolate"
    style={{
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      marginTop: `${HEADER_HEIGHT}px`,
      minHeight: 500,
    }}
  >
    {/* Background Video */}
    <div className="absolute inset-0 -z-10">
      <video
        className="w-full h-full object-cover"
        src="/raw-bg3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    {/* Simple Black Overlay (no blur) */}
    <div className="absolute inset-0 bg-black/0 -z-10" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-start justify-end h-full w-full pl-12 md:pl-24 pb-16" style={{ maxWidth: '900px' }}>
      <h1
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-brand-accent text-left leading-tight mb-6"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: '0.08em',
          lineHeight: 1.1,
        }}
      >
        RAW Robotics:
        <br className="hidden sm:block" />
        <span className="text-brand-dark-text-primary block mt-2">
          Engineering the Future of Intelligent Automation
        </span>
      </h1>
    </div>
  </section>
);

export default HeroSection;
