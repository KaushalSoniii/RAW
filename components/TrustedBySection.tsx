import React from 'react';

const TrustedBySection: React.FC = () => (
  <section className="pt-4 pb-12 md:pt-8 md:pb-20 bg-gradient-to-b from-brand-dark-bg via-[#18181b] to-brand-dark-surface flex flex-col items-center">
    <h3
      className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-12 tracking-wide text-center text-brand-accent"
      style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.08em', marginTop: '-3rem' }}
    >
      Trusted By
    </h3>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
      <img
        src="/trust2.png"
        alt="Open Droids"
        className="h-25 max-w-xs object-contain"
        style={{ aspectRatio: 'auto 220 / 96' }}
      />
      <img
        src="/trust1.png"
        alt="RARS Poliplas"
        className="h-32 sm:h-40 md:h-48 max-w-md object-contain"
        style={{ aspectRatio: 'auto 220 / 220' }}
      />
    </div>
  </section>
);

export default TrustedBySection;