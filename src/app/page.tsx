'use client';

import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/layout/Hero';
import NewsAndMessage from '@/components/sections/NewsAndMessage';

export default function Home() {
  return (
    <PageLayout className="pt-0">
      {/* Bannière Hero */}
      <Hero />

      {/* Section Vision */}
      <section className="bg-white" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
        <div className="w-full px-6">
          <div className="flex justify-center">
            <div
              className="w-full max-w-[800px] mx-auto"
              style={{
                backgroundColor: '#F5F5F5',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center'
              }}
            >
              <h2 className="font-inter text-3xl font-bold text-black mb-4">
                Notre Vision
              </h2>
              <p className="font-inter text-lg leading-relaxed" style={{ color: '#374151' }}>
                Nous croyons en une diaspora gabonaise unie, moderne et écoutée.
                Notre vision est de créer des ponts durables entre nos compatriotes
                dispersés aux quatre coins de l'Afrique et notre nation d'origine,
                pour bâtir ensemble un avenir où chaque Gabonais se sent pleinement
                représenté et fier de contribuer au rayonnement du Gabon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités + Lettre */}
      <NewsAndMessage />

      {/* Section Télécharger le programme */}
      <section
        className="download-section"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '20px 0',
          gap: '15px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px'
        }}
      >
        {/* Texte à gauche */}
        <span className="download-text" style={{ color: '#333' }}>
          Télécharger le programme de société
        </span>

        {/* Bouton En savoir plus */}
        <a
          href="/programme"
          className="info-button"
          style={{
            backgroundColor: '#1e40af',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
            transition: 'background-color 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#28a745';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1e40af';
          }}
        >
          <span
            className="info-icon"
            style={{
              width: '14px',
              height: '14px',
              border: '1.5px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold'
            }}
          >
            i
          </span>
          EN SAVOIR PLUS
        </a>
      </section>
    </PageLayout>
  );
}