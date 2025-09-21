'use client';

import PageLayout from '@/components/layout/PageLayout';

const piliers = [
  {
    id: 1,
    title: 'RÉFORMES INSTITUTIONNELLES',
    description: 'Moderniser la représentation de la diaspora dans les institutions gabonaises.',
    mesures: [
      'Moderniser la Constitution pour garantir la représentativité des Gabonais de l\'étranger',
      'Instaurer un système de consultation permanente de la diaspora',
      'Créer des mécanismes de participation citoyenne digitale',
      'Renforcer le rôle consultatif de la représentation diasporique'
    ],
    resultat: 'Une diaspora représentée et impliquée dans les décisions nationales'
  },
  {
    id: 2,
    title: 'ÉDUCATION ET FORMATION',
    description: 'Développer l\'accès à l\'éducation et aux formations pour la diaspora.',
    mesures: [
      'Créer des bourses d\'études spécifiques pour les enfants de la diaspora',
      'Développer des programmes de formation continue en ligne',
      'Faciliter la reconnaissance des diplômes étrangers au Gabon',
      'Mettre en place des partenariats universitaires internationaux'
    ],
    resultat: 'Une diaspora qualifiée et compétitive sur le marché international'
  },
  {
    id: 3,
    title: 'DÉVELOPPEMENT ÉCONOMIQUE',
    description: 'Favoriser l\'entrepreneuriat et les investissements de la diaspora.',
    mesures: [
      'Créer un fonds d\'investissement spécifique à la diaspora',
      'Faciliter les transferts de fonds et les investissements au Gabon',
      'Développer un réseau d\'entrepreneurs gabonais à l\'international',
      'Mettre en place des zones économiques spéciales pour la diaspora'
    ],
    resultat: 'Une économie gabonaise renforcée par les investissements diasporiques'
  },
  {
    id: 4,
    title: 'SANTÉ ET PROTECTION SOCIALE',
    description: 'Améliorer l\'accès aux soins et la protection sociale.',
    mesures: [
      'Étendre la couverture santé gabonaise à la diaspora',
      'Créer un système de rapatriement sanitaire d\'urgence',
      'Développer la télémédecine pour la diaspora',
      'Négocier des accords de protection sociale bilatéraux'
    ],
    resultat: 'Une diaspora protégée et en bonne santé'
  },
  {
    id: 5,
    title: 'CULTURE ET IDENTITÉ',
    description: 'Préserver et promouvoir la culture gabonaise à l\'international.',
    mesures: [
      'Créer des centres culturels gabonais dans les pays africains',
      'Développer l\'enseignement des langues locales gabonaises',
      'Organiser des festivals culturels diasporiques annuels',
      'Numériser et diffuser le patrimoine culturel gabonais'
    ],
    resultat: 'Une identité gabonaise forte et valorisée à l\'international'
  },
  {
    id: 6,
    title: 'MOBILITÉ ET CITOYENNETÉ',
    description: 'Faciliter la mobilité et simplifier les démarches administratives.',
    mesures: [
      'Simplifier les procédures consulaires et administratives',
      'Créer un guichet unique numérique pour la diaspora',
      'Négocier des accords de libre circulation en Afrique',
      'Faciliter le retour temporaire ou définitif au Gabon'
    ],
    resultat: 'Une mobilité facilitée et des démarches simplifiées'
  },
  {
    id: 7,
    title: 'COOPÉRATION INTERNATIONALE',
    description: 'Renforcer les relations diplomatiques et la coopération Sud-Sud.',
    mesures: [
      'Développer les partenariats économiques intra-africains',
      'Renforcer la diplomatie économique gabonaise',
      'Créer des réseaux de coopération technique entre pays africains',
      'Promouvoir le Gabon comme hub régional en Afrique centrale'
    ],
    resultat: 'Un Gabon influent et respecté sur la scène africaine'
  }
];

const resumeExecutif = [
  'Représentation effective de la diaspora dans les institutions nationales',
  'Facilitation des démarches administratives et consulaires',
  'Développement économique par les investissements diasporiques',
  'Extension de la protection sociale aux Gabonais de l\'étranger',
  'Promotion de la culture gabonaise sur le continent africain',
  'Négociation d\'accords bilatéraux favorables à la diaspora'
];

const engagements = [
  'Mandat unique pour se concentrer pleinement sur les résultats',
  'Transparence totale avec rapports d\'activité trimestriels publics',
  'Révocabilité en cas de non-respect des engagements pris',
  'Consultation systématique avant chaque vote important'
];

export default function ProgrammePage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* En-tête institutionnel */}
        <div className="bg-gray-50 py-16" style={{ borderBottom: '1px solid #e5e7eb' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1
              className="text-4xl font-bold mb-4 tracking-wide"
              style={{
                color: '#0A7A3B',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              PROGRAMME POLITIQUE
            </h1>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              7 Piliers – Des solutions concrètes, des résultats mesurables
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 py-16">
          {/* Introduction institutionnelle */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="md:w-32 flex-shrink-0 text-center">
                  <img
                    src="/images/hero/2.jpg"
                    alt="Angélina Charlotte Nongou-Mavikana"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 mx-auto"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2
                    className="text-xl font-bold mb-4"
                    style={{ color: '#0A7A3B', fontFamily: 'Inter, sans-serif' }}
                  >
                    CONTRAT SOCIAL AVEC LA DIASPORA
                  </h2>
                  <p className="text-gray-800 leading-relaxed text-justify mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Ce programme n'est pas une simple compilation de promesses, mais un véritable contrat social entre
                    la candidate Angélina Charlotte Nongou-Mavikana, son suppléant Koumba Koudel Stéphane, et les
                    électeurs de la diaspora gabonaise en Afrique.
                  </p>
                  <p className="text-gray-800 leading-relaxed text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Chaque mesure proposée est réalisable, mesurable et répond à un besoin réel identifié au sein de
                    notre communauté. Notre engagement : transformer ces propositions en réalités concrètes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Résumé exécutif */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-100 p-8" style={{ border: '1px solid #d1d5db' }}>
              <h2
                className="text-xl font-bold mb-6 text-center"
                style={{ color: '#0A7A3B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}
              >
                RÉSUMÉ EXÉCUTIF
              </h2>
              <div className="space-y-3">
                {resumeExecutif.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Les 7 Piliers - Style institutionnel */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2
              className="text-2xl font-bold text-center mb-12"
              style={{
                color: '#0A7A3B',
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              LES 7 PILIERS STRUCTURANTS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
              {piliers.map((pilier) => (
                <div
                  key={pilier.id}
                  className="bg-white p-6 w-full max-w-lg"
                  style={{
                    border: '1px solid #d1d5db',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3
                    className="font-bold mb-3"
                    style={{
                      color: '#0A7A3B',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    PILIER {pilier.id} : {pilier.title}
                  </h3>
                  <p className="text-gray-800 mb-4 text-justify leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                    {pilier.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      MESURES CONCRÈTES :
                    </h4>
                    <ul className="space-y-2">
                      {pilier.mesures.map((mesure, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{mesure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-100 p-3" style={{ borderLeft: '4px solid #0A7A3B' }}>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      RÉSULTAT ATTENDU :
                    </h4>
                    <p className="text-gray-800 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{pilier.resultat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagements solennels */}
          <div className="bg-gray-900 text-white p-8 mb-16" style={{ margin: '0 -6rem' }}>
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
                ENGAGEMENTS SOLENNELS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {engagements.map((engagement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{engagement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Citation forte */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <blockquote
                className="text-xl font-normal italic leading-relaxed"
                style={{ color: '#1f2937', fontFamily: 'Inter, sans-serif' }}
              >
                "Avec Angélina Charlotte Nongou, la diaspora sera au cœur de la reconstruction du Gabon."
              </blockquote>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#0A7A3B', fontFamily: 'Inter, sans-serif' }}
              >
                LE 27 SEPTEMBRE 2025, VOTEZ POUR TRANSFORMER LA REPRÉSENTATION DE LA DIASPORA
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ce programme constitue notre engagement. Votre vote nous donnera le mandat pour le réaliser.
              </p>
              <button
                className="bg-blue-900 hover:bg-green-700 text-white font-semibold py-4 px-8 transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onClick={() => window.open('/programme-complet.pdf', '_blank')}
              >
                TÉLÉCHARGER LE PROGRAMME COMPLET (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}