'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Image de fond plein écran */}
      <img
        src="/images/hero/14.jpg"
        alt="Bannière principale"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default Hero;