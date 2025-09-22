'use client';

import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';

// Icônes SVG professionnelles pour chaque pilier
const IconScale = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M8 18L9.5 21.5L13 20L9.5 18.5L8 15L6.5 18.5L3 20L6.5 21.5L8 18Z"/>
  </svg>
);

const IconGraduationCap = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,3L1,9L12,15L21,9V16H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
  </svg>
);

const IconTrendingUp = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
  </svg>
);

const IconHeart = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
  </svg>
);

const IconCulture = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H5A2,2 0 0,0 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H13V3H19V9Z"/>
  </svg>
);

const IconPlane = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.56,3.44C21.15,4.03 21.15,4.97 20.56,5.56L5.56,20.56C4.97,21.15 4.03,21.15 3.44,20.56C2.85,19.97 2.85,19.03 3.44,18.44L18.44,3.44C19.03,2.85 19.97,2.85 20.56,3.44M8.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,9A1.5,1.5 0 0,1 10,10.5A1.5,1.5 0 0,1 8.5,12M17.5,10.5C17.5,11.33 16.83,12 16,12S14.5,11.33 14.5,10.5S15.17,9 16,9S17.5,9.67 17.5,10.5M19.77,2.23L21.17,3.65L12.83,12L21.17,20.35L19.77,21.77L10,12L19.77,2.23Z"/>
  </svg>
);

const IconUsers = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14M8,4C10.21,4 12,5.79 12,8C12,10.21 10.21,12 8,12C5.79,12 4,10.21 4,8C4,5.79 5.79,4 8,4M8,14C10.67,14 16,15.33 16,18V20H0V18C0,15.33 5.33,14 8,14Z"/>
  </svg>
);

const piliers = [
  {
    id: 1,
    num: 'I',
    title: 'Réformes institutionnelles',
    icon: <IconScale />,
    description: 'Moderniser la représentation de la diaspora dans les institutions gabonaises et garantir un cadre juridique adapté à leurs besoins spécifiques.',
    actions: [
      {
        title: 'Réforme constitutionnelle',
        desc: 'Inscrire la représentativité effective des Gabonais de l\'étranger dans la Constitution'
      },
      {
        title: 'Consultation permanente',
        desc: 'Créer un système de consultation digitale de la diaspora avant les grandes décisions'
      },
      {
        title: 'Participation citoyenne',
        desc: 'Développer des mécanismes de démocratie participative en ligne'
      },
      {
        title: 'Statut juridique renforcé',
        desc: 'Renforcer le cadre légal de protection des droits des Gabonais à l\'étranger'
      }
    ],
    image: '/images/program/reforms.jpg',
    imageAlt: 'Assemblée nationale gabonaise - pilier réformes institutionnelles'
  },
  {
    id: 2,
    num: 'II',
    title: 'Éducation & insertion',
    icon: <IconGraduationCap />,
    description: 'Développer l\'accès à une éducation de qualité et faciliter l\'insertion professionnelle réussie de la diaspora.',
    actions: [
      {
        title: 'Bourses diaspora',
        desc: 'Créer un fonds de bourses spécifiques pour les enfants de la diaspora'
      },
      {
        title: 'Formation continue',
        desc: 'Développer des programmes de formation professionnelle en ligne'
      },
      {
        title: 'Reconnaissance diplômes',
        desc: 'Simplifier la reconnaissance des diplômes étrangers au Gabon'
      },
      {
        title: 'Partenariats universitaires',
        desc: 'Créer des accords avec les universités africaines d\'excellence'
      }
    ],
    image: '/images/program/education.jpg',
    imageAlt: 'Étudiants de la diaspora gabonaise dans une université - pilier éducation'
  },
  {
    id: 3,
    num: 'III',
    title: 'Économie & entrepreneuriat',
    icon: <IconTrendingUp />,
    description: 'Stimuler l\'entrepreneuriat diasporique et faciliter les investissements productifs vers le Gabon.',
    actions: [
      {
        title: 'Fonds d\'investissement',
        desc: 'Créer un fonds souverain dédié aux projets de la diaspora'
      },
      {
        title: 'Transferts facilités',
        desc: 'Réduire les coûts et simplifier les transferts de fonds vers le Gabon'
      },
      {
        title: 'Réseau entrepreneurs',
        desc: 'Développer un écosystème d\'entrepreneurs gabonais en Afrique'
      },
      {
        title: 'Zones économiques',
        desc: 'Créer des zones franches dédiées aux investissements diasporiques'
      }
    ],
    image: '/images/program/economy.jpg',
    imageAlt: 'Entrepreneurs gabonais en réunion d\'affaires - pilier économie'
  },
  {
    id: 4,
    num: 'IV',
    title: 'Protection sociale',
    icon: <IconHeart />,
    description: 'Étendre la protection sociale gabonaise à la diaspora et garantir l\'accès aux soins de santé.',
    actions: [
      {
        title: 'Couverture santé étendue',
        desc: 'Étendre la CNAMGS aux Gabonais résidant en Afrique'
      },
      {
        title: 'Rapatriement sanitaire',
        desc: 'Créer un système d\'urgence médicale et de rapatriement'
      },
      {
        title: 'Télémédecine',
        desc: 'Développer la consultation médicale à distance pour la diaspora'
      },
      {
        title: 'Accords bilatéraux',
        desc: 'Négocier des conventions de sécurité sociale avec les pays d\'accueil'
      }
    ],
    image: '/images/program/health.jpg',
    imageAlt: 'Consultation médicale diaspora gabonaise - pilier protection sociale'
  },
  {
    id: 5,
    num: 'V',
    title: 'Rayonnement culturel',
    icon: <IconCulture />,
    description: 'Préserver et promouvoir la richesse culturelle gabonaise tout en soutenant les talents artistiques de la diaspora.',
    actions: [
      {
        title: 'Centres culturels',
        desc: 'Implanter des centres culturels gabonais dans les capitales africaines'
      },
      {
        title: 'Langues locales',
        desc: 'Enseigner les langues gabonaises aux enfants de la diaspora'
      },
      {
        title: 'Festivals diasporiques',
        desc: 'Organiser des événements culturels annuels dans chaque pays'
      },
      {
        title: 'Patrimoine numérique',
        desc: 'Numériser et diffuser notre patrimoine culturel en ligne'
      }
    ],
    image: '/images/program/culture.jpg',
    imageAlt: 'Festival culturel gabonais en diaspora - pilier rayonnement culturel'
  },
  {
    id: 6,
    num: 'VI',
    title: 'Mobilité & connectivité',
    icon: <IconPlane />,
    description: 'Faciliter la circulation et simplifier les démarches administratives pour renforcer les liens avec le Gabon.',
    actions: [
      {
        title: 'Procédures simplifiées',
        desc: 'Dématérialiser et accélérer les démarches consulaires'
      },
      {
        title: 'Guichet unique',
        desc: 'Créer une plateforme digitale pour toutes les démarches'
      },
      {
        title: 'Libre circulation',
        desc: 'Négocier des accords de mobilité renforcée en Afrique'
      },
      {
        title: 'Facilitation retour',
        desc: 'Accompagner les projets de retour temporaire ou définitif'
      }
    ],
    image: '/images/program/mobility.jpg',
    imageAlt: 'Aéroport et mobilité diaspora gabonaise - pilier mobilité connectivité'
  },
  {
    id: 7,
    num: 'VII',
    title: 'Inclusion & cohésion',
    icon: <IconUsers />,
    description: 'Renforcer les liens communautaires et promouvoir une solidarité active au sein de la diaspora gabonaise.',
    actions: [
      {
        title: 'Réseaux communautaires',
        desc: 'Structurer et connecter les associations gabonaises en Afrique'
      },
      {
        title: 'Solidarité active',
        desc: 'Créer des mécanismes d\'entraide et de soutien mutuel'
      },
      {
        title: 'Dialogue intergénérationnel',
        desc: 'Favoriser les échanges entre anciens et nouvelles générations'
      },
      {
        title: 'Inclusion sociale',
        desc: 'Lutter contre l\'isolement et renforcer l\'appartenance nationale'
      }
    ],
    image: '/images/program/community.jpg',
    imageAlt: 'Communauté gabonaise unie en diaspora - pilier inclusion cohésion'
  }
];

const phases = [
  {
    id: 1,
    title: 'Phase de lancement',
    description: 'Mobilisation et structuration des réseaux diasporiques',
    duree: '6 premiers mois'
  },
  {
    id: 2,
    title: 'Phase de déploiement',
    description: 'Mise en œuvre progressive des réformes prioritaires',
    duree: 'Mois 7 à 36'
  },
  {
    id: 3,
    title: 'Phase de consolidation',
    description: 'Ancrage des acquis et extension des programmes',
    duree: 'Mois 37 à 60'
  },
  {
    id: 4,
    title: 'Contrôle citoyen & Audit',
    description: 'Évaluation transparente et reddition de comptes',
    duree: 'En continu'
  }
];

const engagements = [
  'Mandat unique pour se concentrer pleinement sur les résultats',
  'Transparence totale avec rapports d\'activité trimestriels publics',
  'Consultation systématique de la diaspora avant chaque vote important'
];

export default function ProgrammePage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = piliers.map(p => `pilier-${p.id}`);
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* En-tête de page */}
        <div className="w-full flex justify-center" style={{ paddingTop: '48px', paddingBottom: '24px' }}>
          <div className="max-w-4xl px-6 text-center">
            <h1 className="font-inter text-4xl font-bold text-black mb-4">
              Programme de société
            </h1>
            <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Les piliers et les engagements qui guideront notre action parlementaire pour la diaspora gabonaise.
            </p>
          </div>
        </div>

        {/* Sommaire ancré sticky */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-40 w-full flex justify-center" style={{ borderBottomColor: '#E5E7EB' }}>
          <div className="max-w-7xl px-6">
            <div className="flex overflow-x-auto py-3 gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {piliers.map((pilier) => (
                <button
                  key={pilier.id}
                  onClick={() => scrollToSection(`pilier-${pilier.id}`)}
                  className={`flex-shrink-0 font-inter text-sm font-medium px-4 py-2 rounded transition-colors duration-200 ${
                    activeSection === `pilier-${pilier.id}`
                      ? 'text-white'
                      : 'text-gray-600 hover:text-green-700'
                  }`}
                  style={{
                    backgroundColor: activeSection === `pilier-${pilier.id}` ? '#0A7A3B' : 'transparent'
                  }}
                >
                  {pilier.num}. {pilier.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section introduction exécutive */}
        <div className="py-8 w-full flex justify-center" style={{ backgroundColor: '#F5F7FA' }}>
          <div className="max-w-4xl px-6">
            <p className="font-inter text-base text-gray-700 leading-relaxed text-justify">
              Ce programme constitue notre engagement solennel envers la diaspora gabonaise en Afrique.
              Chaque pilier répond à des besoins concrets identifiés lors de nos consultations.
              Nous nous engageons à une mise en œuvre transparente, mesurable et soumise au contrôle citoyen.
            </p>
          </div>
        </div>

        {/* Piliers avec template consistent */}
        <div className="w-full flex justify-center" style={{ paddingTop: '32px' }}>
          <div className="max-w-5xl px-6">
          {piliers.map((pilier) => (
            <section key={pilier.id} id={`pilier-${pilier.id}`} className="mb-16">
              {/* Bandeau titre */}
              <div
                className="px-6 py-4 text-white flex items-center gap-4 mb-4"
                style={{ backgroundColor: '#0A7A3B' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{ backgroundColor: '#F2C94C', color: '#000' }}
                >
                  {pilier.num}
                </div>
                <h2 className="font-inter text-2xl font-bold leading-tight">
                  {pilier.title}
                </h2>
              </div>

              {/* Contenu grille : texte + image */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                <div>
                  {/* Résumé du pilier */}
                  <p className="font-inter text-base text-gray-700 leading-relaxed mb-6 text-justify" style={{ maxWidth: '900px' }}>
                    {pilier.description}
                  </p>

                  {/* Actions clés (capsules) */}
                  <div className="space-y-3 mb-6">
                    {pilier.actions.map((action, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                          style={{ backgroundColor: '#0A7A3B' }}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter text-lg font-semibold text-black mb-1">
                            {action.title}
                          </h4>
                          <p className="font-inter text-sm text-gray-600 leading-relaxed">
                            {action.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image illustrative */}
                <div className="lg:pl-4">
                  <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="mb-2">{pilier.icon}</div>
                        <p className="font-inter text-sm font-medium">
                          Image documentaire
                        </p>
                        <p className="font-inter text-xs">
                          {pilier.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-inter text-xs text-gray-500 mt-2 text-center">
                    {pilier.imageAlt}
                  </p>
                </div>
              </div>

              {/* Ligne de séparation */}
              <div className="mt-12 border-b border-gray-200"></div>
            </section>
          ))}
          </div>
        </div>

        {/* Gouvernance & mise en œuvre */}
        <div className="py-16 w-full flex justify-center" style={{ backgroundColor: '#F5F7FA' }}>
          <div className="max-w-5xl px-6">
            <h2 className="font-inter text-3xl font-bold text-black text-center mb-8">
              Gouvernance & mise en œuvre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {phases.map((phase) => (
                <div key={phase.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: '#0A7A3B' }}
                    >
                      {phase.id}
                    </div>
                    <h3 className="font-inter text-lg font-semibold text-black">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="font-inter text-sm text-gray-700 mb-2">
                    {phase.description}
                  </p>
                  <p className="font-inter text-xs text-gray-500">
                    <strong>Durée :</strong> {phase.duree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement solennel */}
        <div className="py-12 w-full flex justify-center" style={{ backgroundColor: '#F5F7FA' }}>
          <div className="max-w-4xl px-6 text-center">
            <h2 className="font-inter text-2xl font-bold text-black mb-6">
              Engagement solennel
            </h2>
            <div className="space-y-4 mb-8">
              {engagements.map((engagement, index) => (
                <div key={index} className="flex items-start gap-3 justify-center">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#0A7A3B' }}
                  >
                    {index + 1}
                  </div>
                  <p className="font-inter text-base text-gray-700 text-left max-w-2xl">
                    {engagement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Télécharger le programme */}
        <div className="bg-white py-12 w-full flex justify-center">
          <div className="max-w-4xl px-6">
            <div className="flex justify-center items-center gap-4">
              <span className="font-inter text-base text-gray-700">
                Consulter le programme de société
              </span>
              <a
                href="/doc/Projet UN Diaspora Afrique 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm font-medium text-white px-4 py-2 rounded transition-all duration-300 flex items-center gap-2"
                style={{
                  backgroundColor: '#1e40af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A7A3B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e40af';
                }}
                aria-label="Télécharger le programme de société – PDF"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                EN SAVOIR PLUS
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}