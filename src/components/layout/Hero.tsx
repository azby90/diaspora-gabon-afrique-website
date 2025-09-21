'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '70vh',
        minHeight: '500px',
        maxHeight: '750px'
      }}
    >
      {/* Image de fond plein écran - style avocats */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero/13.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay sombre avec gradient plus foncé à droite */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))'
        }}
      />

      {/* Contenu texte superposé - centré */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="w-full px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="inline-block px-4 py-2 rounded-full font-inter text-sm font-medium text-black bg-yellow-400/90 border border-yellow-400/50">
                🇬🇦 Élections Législatives 2025
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="font-inter text-white font-bold mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
              Diaspora Gabon Afrique
            </h1>

            {/* Slogan centré */}
            <h2 className="font-inter text-white font-semibold mb-8 text-xl md:text-2xl lg:text-3xl" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
              Ensemble pour la Diaspora Gabon Afrique
            </h2>

            {/* Description */}
            <p className="font-inter text-white mb-8 text-lg md:text-xl max-w-3xl mx-auto opacity-95" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
              Représenter dignement plus de 50 pays d'Afrique au Parlement gabonais
            </p>

            {/* Bouton CTA unique */}
            <div className="flex justify-center" style={{ marginTop: '25px' }}>
              <a
                href="/programme"
                className="inline-flex items-center justify-center font-inter font-bold transition-all duration-300 hover:scale-105"
                style={{
                  fontSize: '17px',
                  backgroundColor: '#0A7A3B',
                  color: '#FFFFFF',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  borderRadius: '6px',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(10, 122, 59, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#086a32';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A7A3B';
                }}
              >
                Découvrir Notre Programme
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;