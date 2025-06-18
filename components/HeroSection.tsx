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
        src="/raw-bgv2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    {/* Content */}
    <div
      className="
        relative z-10 flex flex-col items-center sm:items-start justify-end h-full w-full
        px-3 sm:px-8 md:px-12 max-w-[900px]
        pb-24
        md:pb-32
        md:translate-y-[-60px] md:translate-x-16
        lg:translate-y-[-80px] lg:translate-x-24
        transition-transform
      "
      style={{
        paddingBottom: "6rem",
        transform: undefined,
      }}
    >
      <h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest text-brand-accent text-center sm:text-left leading-tight mb-4 md:mb-6"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: '0.08em',
          lineHeight: 1.1,
        }}
      >
        RAW Boats:
      </h1>
      <span
        className="block mt-2 md:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
        text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center sm:text-left mb-6 md:mb-8"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: '0.06em',
          lineHeight: 1.15,
        }}
      >
        Engineering the Future of Intelligent<br />
        <span className="block">
          Automation
        </span>
      </span>
      <a
        href="#how-we-work"
        className="mt-3 inline-flex items-center justify-center px-5 py-2 text-sm sm:px-7 sm:py-3 sm:text-lg font-semibold rounded-lg bg-white text-black border-2 border-black shadow-[4px_4px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        style={{ gap: '0.5rem', fontFamily: "'Orbitron', sans-serif" }}
      >
        How We Work
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </section>
);

export default HeroSection;
