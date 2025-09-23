'use client';

import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/layout/Hero';

export default function Home() {
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  // Gestion de la fermeture du modal avec ESC
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLetterModalOpen(false);
      }
    };

    if (isLetterModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isLetterModalOpen]);
  return (
    <PageLayout className="pt-0">
      {/* Bannière Hero */}
      <Hero />

      {/* Section Lettre à la Communauté */}
      <section className="bg-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="w-full px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-[900px] mx-auto">
              {/* Grille : Image à gauche, Texte à droite */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-start">

                {/* Image de la candidate à gauche */}
                <div className="text-center lg:text-left">
                  <img
                    src="/images/hero/5.jpg"
                    alt="Portrait officiel Angelina Charlotte Nongou-Mavikana"
                    className="mx-auto lg:mx-0 w-full max-w-[280px] aspect-[3/4] object-cover rounded-lg border border-gray-200 shadow-md"
                  />
                  <div className="text-center mt-4">
                    <h3 className="font-inter text-sm font-bold text-black">
                      Angelina Charlotte Nongou-Mavikana
                      <br />
                      <span className="font-inter text-xs font-normal text-gray-700">
                        (ép. Leyenberger)
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Contenu texte à droite */}
                <div className="px-4 lg:px-0">
                  {/* Titre aligné en haut */}
                  <h2 className="font-inter text-2xl lg:text-3xl font-bold text-black mb-4 text-center lg:text-left">
                    Lettre à la communauté
                  </h2>

                  {/* Texte introductif avec marges mobiles */}
                  <div className="mb-8 space-y-4 max-w-none lg:max-w-full">
                    <p className="font-inter text-base text-gray-700 leading-relaxed px-8 lg:px-0 text-justify">
                      Chers compatriotes de la diaspora gabonaise en Afrique, Professionnels, entrepreneurs, étudiants, familles, Le Gabon ne sera jamais plus fort que lorsque tous les Gabonais, où qu'ils soient, construisent ensemble son avenir. Il y a des moments dans l'histoire d'un pays où tout peut basculer. Nous vivons l'un de ces moments aujourd'hui. Pour la première fois, vous tous, Gabonais établis temporairement ou durablement en Afrique, avez la possibilité concrète de participer pleinement à la vie démocratique de votre pays.
                    </p>
                    <p className="font-inter text-base text-gray-700 leading-relaxed px-8 lg:px-0 text-justify">
                      Vous avez prouvé votre efficacité et votre sens des résultats. Cette élection représente un investissement stratégique majeur. En me choisissant, vous optez pour une représentation qui comprend les enjeux économiques, qui facilite vos projets d'investissement et qui défend concrètement vos intérêts business au Gabon. Agissons maintenant.
                    </p>
                  </div>

                  {/* Bouton Lire la suite - aligné à droite */}
                  <div className="flex justify-center lg:justify-end">
                    <button
                      className="font-inter text-sm font-medium text-white hover:text-white px-6 py-2.5 rounded transition-all duration-300 hover:shadow-md"
                      style={{ backgroundColor: '#0A7A3B' }}
                      onClick={() => setIsLetterModalOpen(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#28a745';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0A7A3B';
                      }}
                    >
                      Lire la suite →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Activité Récente */}
      <section className="bg-white py-20">
        <div className="w-full px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-[900px] mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-24">
                Activité Récente
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                {/* Article 1 */}
                <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/images/hero/A1.jpg"
                    alt="Grand Live TikTok : Pourquoi Angelina Nongou ?"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      🎯 Grand Live TikTok : Pourquoi Angelina Nongou ? 🌍✨
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Ce soir, retrouvez un live exceptionnel autour d'Angelina NONGOU : Son parcours inspirant, son projet pour la diaspora, sa vision et ses engagements pour l'avenir 🌍 Un échange unique animé par Nephtali Nalick 🎤...
                    </p>
                    <div className="text-xs text-gray-500">
                      📅 Mardi 23 Septembre - 21h à 23h selon les fuseaux horaires
                    </div>
                  </div>
                </article>

                {/* Article 2 */}
                <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/images/hero/A2.jpg"
                    alt="Tetegu Brunch - Rencontre avec les Gabonais du Ghana"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      Tetegu Brunch 🇬🇦 | Rencontre avec les Gabonais du Ghana 🍽🔥
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sous l'impulsion de l'Honorable Mme Angelina Nongou Mavikana, ne manquez pas le Tetegu Brunch : Une rencontre conviviale autour de la diaspora gabonaise au Ghana 🇬🇦 Échanges, partage et solidarité dans une ambiance fraternelle ✨
                    </p>
                    <div className="text-xs text-gray-500">
                      📅 Jeudi 25 Septembre 2025 - À partir de 16h - Tetegu, Ghana
                    </div>
                  </div>
                </article>

                {/* Article 3 */}
                <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/images/hero/A3.jpg"
                    alt="Bénin, nous voilà - Ensemble avec la diaspora gabonaise"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      Bénin, nous voilà 🇧🇯✨ | Ensemble avec la diaspora gabonaise
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Mon suppléant Ange Stephene Coudel Koumba est actuellement au Bénin pour porter avec conviction notre projet auprès de nos compatriotes gabonais. Aller vers vous, écouter vos attentes et défendre un projet ambitieux...
                    </p>
                    <div className="text-xs text-gray-500">
                      📅 Élections législatives - 27 septembre 2025 - Diaspora Zone Afrique
                    </div>
                  </div>
                </article>

                {/* Article 4 */}
                <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/images/hero/A4.jpg"
                    alt="Maroc, me voilà - Rencontre avec la diaspora gabonaise"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      Maroc, me voilà 🇲🇦✨ | Rencontre avec la diaspora gabonaise
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Après vos nombreux messages et encouragements, c'est avec une immense joie que je vous annonce ma présence au Maroc. 💚💛💙 Créer des espaces d'échange et de fraternité, permettre à chacun de faire un choix éclairé...
                    </p>
                    <div className="text-xs text-gray-500">
                      📅 Élections législatives 2025 - Maroc & Tunisie - Dates à venir
                    </div>
                  </div>
                </article>

                {/* Article 5 */}
                <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/images/hero/A5.jpg"
                    alt="Tournoi de la Solidarité - Rendez-vous sportif et fraternel"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      ⚽🇬🇦 Tournoi de la Solidarité 🇬🇦⚽ | Rendez-vous sportif et fraternel
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Je vous donne rendez-vous au Stade Sipres pour notre grand tournoi sportif sous mon parrainage. Un moment d'unité et de fraternité, un hommage vibrant à Feue Rose Francine Rogombé 🙏🏾. Venez nombreux !
                    </p>
                    <div className="text-xs text-gray-500">
                      📅 Dimanche 21 septembre 2025 - Dès 9h - Stade Sipres
                    </div>
                  </div>
                </article>

                {/* Article 6 */}
                <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/images/hero/A6.jpg"
                    alt="Causerie Politique Ouest Foire - Rencontre avec la diaspora gabonaise"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      Causerie Politique – Ouest Foire 🇬🇦✊🏾 | Rencontre avec la diaspora gabonaise
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Je vous donne rendez-vous pour une causerie politique inédite à Ouest Foire. Un moment d'échanges directs, de dialogue et de proximité pour écouter vos préoccupations et partager notre vision commune 💚💛💙
                    </p>
                    <div className="text-xs text-gray-500">
                      📅 19 septembre 2025 - 18h à 22h - Ouest Foire, Sénégal
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Voir le programme */}
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
          Consulter le programme de société
        </span>

        {/* Bouton Voir le programme au complet */}
        <a
          href="/doc/PROJET.pdf#toolbar=0&navpanes=0&scrollbar=0"
          target="_blank"
          rel="noopener noreferrer"
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
            👁
          </span>
          VOIR LE PROGRAMME AU COMPLET
        </a>
      </section>

      {/* Modal pour la lettre complète */}
      {isLetterModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsLetterModalOpen(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-300 shadow-2xl relative" style={{ aspectRatio: '8.5/11' }}>
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsLetterModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 bg-green-800 rounded-full p-2 shadow-lg transition-colors"
              aria-label="Fermer la lettre"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenu reproduisant le design de l'image */}
            <div className="h-full flex flex-col overflow-y-auto">
              {/* En-tête vert */}
              <div className="bg-green-800 text-white p-6 flex-shrink-0">
                <div className="w-8 h-8 bg-white mb-4"></div>
                <h1 className="text-2xl font-bold tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  A MA COMMUNAUTE
                </h1>
              </div>

              {/* Corps de la lettre */}
              <div className="flex-1 p-8 bg-white text-black" style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', lineHeight: '1.4' }}>
                <div className="space-y-4">
                  <p>
                    <strong>Chers compatriotes de la diaspora gabonaise en Afrique, Professionnels, entrepreneurs, étudiants, familles,</strong> Le Gabon ne sera jamais plus fort que lorsque tous les Gabonais, où qu'ils soient, construisent ensemble son avenir. Il y a des moments dans l'histoire d'un pays où tout peut basculer. Nous vivons l'un de ces moments aujourd'hui. Pour la première fois, vous tous, Gabonais établis temporairement ou durablement en Afrique, avez la possibilité concrète de participer pleinement à la vie démocratique de votre pays.
                  </p>

                  <p>
                    Vous avez prouvé votre efficacité et votre sens des résultats. Cette élection représente un investissement stratégique majeur. En me choisissant, vous optez pour une représentation qui comprend les enjeux économiques, qui facilite vos projets d'investissement et qui défend concrètement vos intérêts business au Gabon. <strong>Agissons maintenant.</strong>
                  </p>

                  <p>
                    <strong>Étudiants, votre énergie et vos idées nouvelles sont notre plus grande richesse !</strong> Cette campagne, c'est VOTRE moment pour faire valoir votre vision du Gabon de demain. Ensemble, nous pouvons créer des ponts entre vos universités et les entreprises gabonaises, développer des programmes d'accompagnement au retour, et faire de vos diplômes étrangers des atouts pour le Gabon. Vous n'êtes pas en exil, vous vous préparez à Gabon.
                  </p>

                  <p>
                    <strong>Familles et communautés qui préservez nos valeurs :</strong> Vous êtes le cœur battant de notre identité gabonaise à l'étranger. Vos enfants grandissent entre deux cultures. C'est un privilège extraordinaire que nous devons cultiver avec le Gabon, et à protéger votre héritage culturel. Car votre force, c'est d'être des familles de Dieu et fières de leurs racines.
                  </p>

                  <p>
                    L'analyse est claire - cette élection marquera un tournant démocratique majeur. En tant que peuple et décideurs, nous mesurons l'importance historique de ce moment. Votre expertise est indispensable pour construire des politiques publiques efficaces. Vous pourrez créer un think tank Gabon-Afrique, disposer de données statistiques et créer une réelle influence parlementaire dans les grandes orientations nationales. Cette élection est aussi l'occasion de bouleverser les codes, de prouver que la politique peut être différente. Votre esprit critique est un atout qui défend politiquement nos intérêts collectifs et qui nous avons besoin pour sauver le système et imposer une nouvelle façon de faire de la politique.
                  </p>

                  <p>
                    Votre sensibilité aux autres pays et votre capacité à raisonner sont précieuses. Cette campagne se veut avant tout <strong>HUMAINE</strong>. Parce qu'elle rassemble. Ensemble, créons une communauté unie et solidaire. Créons un Gabon dont l'histoire nous enrichit notre récit collectif. Votre vote contribuera à bâtir une communauté gabonaise plus solidaire et bi-continentale.
                  </p>

                  <p>
                    <strong>Mon engagement ? Une méthode de travail qui vous rassemble : EFFICACE pour les résultats, INNOVANTE pour les idées, PROTECTRICE pour les familles, RIGOUREUSE pour les analyses, AUTHENTIQUE pour les convictions, HUMAINE pour les décisions.</strong> C'est l'opportunité de transformer notre diversité en force collective. Votre vote choix pas seulement une candidate, il choisit l'avenir du Gabon. Ne subissez plus l'Histoire du Gabon <strong>ÉCRIVEZ-LA !</strong>
                  </p>

                  <p>
                    Avec toute ma détermination à vous servir efficacement,
                  </p>

                  <div className="mt-8">
                    <p><strong>Angelina NONGOU-MAVIKANA épouse LEYENBERGER</strong></p>
                    <p className="text-sm">Votre candidate de la diaspora gabonaise en Afrique, parce que chaque Gabonais compte, partout où il se trouve.</p>
                  </div>
                </div>
              </div>

              {/* Bordure verte en bas */}
              <div className="h-6 bg-green-800 flex-shrink-0"></div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}