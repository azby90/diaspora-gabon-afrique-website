'use client';

import React, { useState, useEffect } from 'react';

// TypeScript interfaces
interface SocialMedia {
  facebook: string;
  twitter: string;
  linkedin: string;
  whatsapp: string;
}

interface BiographySection {
  title: string;
  content: string;
}

interface Biography {
  introduction: BiographySection;
  engagement: BiographySection;
  political: BiographySection;
  vision: BiographySection;
}

interface Candidate {
  id: string;
  role: string;
  name: string;
  subtitle: string;
  image: string;
  tagline: string;
  socialMedia: SocialMedia;
  biography: Biography;
}

// Data structure for candidates
const candidatesData: Candidate[] = [
  {
    id: 'deputee',
    role: 'CANDIDATE DÉPUTÉE – SIÈGE AFRIQUE',
    name: 'Angelina Charlotte Nongou-Mavikana',
    subtitle: '(ép. Leyenberger)',
    image: '/images/hero/2.jpg',
    tagline: 'Engagée pour une diaspora gabonaise unie et moderne.',
    socialMedia: {
      facebook: 'https://facebook.com/angelina.nongou',
      twitter: 'https://twitter.com/angelina_nongou',
      linkedin: 'https://linkedin.com/in/angelina-nongou',
      whatsapp: 'https://wa.me/33612345678'
    },
    biography: {
      introduction: {
        title: 'Introduction',
        content: 'Angélina Charlotte NONGOU n\'est pas une politicienne comme les autres. C\'est une bâtisseuse. Née le 05 juillet 1983 à Libreville, cette mère de deux enfants est une juriste de formation et experte en audit et contrôle de gestion.\n\nElle a fondé et dirigé avec succès des entreprises spécialisées en lubrification industrielle, secteur clé pour les mines, carrières, cimenteries, agro-industries et transports depuis 20 ans.\n\nÀ la tête de Power Lubrification & Supply (PLUSUPPLY) en Côte d\'Ivoire et au Mali, et Directrice des Opérations de Lub&Supply Sénégal, elle a prouvé sa capacité à allier vision et une réelle efficacité économique. Son parcours montre qu\'elle a la rigueur nécessaire pour la gestion et la vision pour l\'avenir.'
      },
      engagement: {
        title: 'L\'engagement social au cœur de son action',
        content: 'Son engagement n\'est pas une façade. Il est la preuve de ses valeurs profondes.\nCofondatrice de l\'Association Éducative de l\'Adolescent et de l\'Enfant à Libreville et membre active de l\'Association Djiguya-Sira au Mali, elle a toujours agi pour le bien-être des adolescents.\n\nSon engagement, constant et sincère, est le reflet d\'une volonté de redonner une "bonne graine" qui unit et élève. Sa plus grande reconnaissance est la gratitude de ceux qu\'elle a soutenus.'
      },
      political: {
        title: 'Une force politique pour le changement',
        content: 'Angélina Charlotte NONGOU ne se contente pas d\'observer, elle agit. Forte d\'une expérience de 22 ans en politique, elle est une membre active de l\'Union Nationale.\n\nEn tant que coordinatrice adjointe au Rassemblement des Bâtisseurs lors de la campagne présidentielle du 22 avril 2025 au Sénégal, elle a démontré sa capacité à mobiliser et à fédérer.\n\nCandidate Députée pour la diaspora zone Afrique (13 pays), son programme s\'appuie sur une étude minutieuse et la volonté d\'être la voix de ses compatriotes à l\'Assemblée Nationale.'
      },
      vision: {
        title: 'L\'audace de faire la différence',
        content: 'Angélina Charlotte NONGOU est la candidate qui conjugue la rigueur d\'une cheffe d\'entreprise avec la passion d\'une militante pour une meilleure émancipation économique.\n\nElle veut bâtir un pont entre les Gabonais de l\'intérieur et ceux de l\'extérieur.'
      }
    }
  },
  {
    id: 'suppleant',
    role: 'SUPPLÉANT – SIÈGE AFRIQUE',
    name: 'Koumba Koudel Stéphane',
    subtitle: '',
    image: '/images/hero/7.jpg',
    tagline: 'Professionnel expérimenté, au service du développement durable.',
    socialMedia: {
      facebook: 'https://facebook.com/koumba.koudel',
      twitter: 'https://twitter.com/koumba_koudel',
      linkedin: 'https://linkedin.com/in/koumba-koudel',
      whatsapp: 'https://wa.me/33612345679'
    },
    biography: {
      introduction: {
        title: 'Formation et expertise',
        content: 'Ingénieur diplômé de l\'École Polytechnique de Libreville, M. Koumba Koudel s\'est spécialisé dans le développement des infrastructures et l\'aménagement du territoire. Il possède également une certification avancée en gestion de projets internationaux délivrée par l\'Institut de Management de Projets de Londres, ainsi qu\'un diplôme complémentaire en développement durable.'
      },
      engagement: {
        title: 'Expérience professionnelle',
        content: 'Avec plus de vingt années d\'expérience dans les secteurs privé et public, il a dirigé plusieurs projets d\'envergure nationale, notamment dans les domaines des transports, de l\'énergie et des télécommunications. Son expertise technique est reconnue au niveau sous-régional. Il a occupé des fonctions de direction au sein de grandes entreprises gabonaises et a conseillé plusieurs collectivités locales dans leurs projets de développement territorial.'
      },
      political: {
        title: 'Engagement communautaire',
        content: 'Homme de terrain, M. Koumba Koudel s\'investit depuis de nombreuses années dans le développement communautaire. Il coordonne plusieurs initiatives locales visant à améliorer l\'accès à l\'eau potable et à l\'électricité dans les zones rurales. Il est également fondateur d\'une organisation non gouvernementale qui promeut l\'éducation technique et professionnelle auprès des jeunes, convaincu que la formation constitue la clé du développement économique durable.'
      },
      vision: {
        title: 'Orientations politiques',
        content: 'Partisan d\'un développement inclusif et participatif, il défend une approche pragmatique de la politique, fondée sur l\'écoute des citoyens et la recherche de solutions concrètes aux problèmes quotidiens. Sa priorité consiste à contribuer à la modernisation des infrastructures nationales tout en préservant l\'environnement gabonais et en garantissant un développement équitable pour tous les territoires.'
      }
    }
  }
];

// Social Media Icons Component
const SocialMediaIcons: React.FC<{ socialMedia: SocialMedia }> = ({ socialMedia }) => {
  const icons = [
    {
      name: 'facebook',
      url: socialMedia.facebook,
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'twitter',
      url: socialMedia.twitter,
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'linkedin',
      url: socialMedia.linkedin,
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'whatsapp',
      url: socialMedia.whatsapp,
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      )
    }
  ];

  return (
    <div className="flex justify-center gap-3 mt-4">
      {icons.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-emerald-800 hover:text-white transition-all duration-300"
          aria-label={`Suivre sur ${social.name}`}
        >
          {social.svg}
        </a>
      ))}
    </div>
  );
};

// BiographySection Component
const BiographySectionComponent: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  // Séparer le contenu par les sauts de ligne doubles pour créer des paragraphes
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <div className="mb-10">
      <h3
        className="text-xl font-bold mb-6 text-center"
        style={{
          fontFamily: 'Merriweather, serif',
          color: '#006400',
          fontSize: '1.25rem',
          letterSpacing: '0.5px'
        }}
      >
        {title}
      </h3>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-800 leading-relaxed text-justify"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.7'
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

// BiographyModal Component
const BiographyModal: React.FC<{
  candidate: Candidate | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ candidate, isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';

      // Focus management for accessibility
      const modalElement = document.querySelector('[role="dialog"]') as HTMLElement;
      if (modalElement) {
        modalElement.focus();
      }
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !candidate) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-300 shadow-2xl">
        {/* Modal Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-gray-400 text-3xl font-light hover:text-gray-600 transition-colors leading-none"
            aria-label="Fermer la biographie"
          >
            ×
          </button>
          <div className="flex flex-col lg:flex-row gap-8">
            <img
              src={candidate.image}
              alt={`Photo officielle de ${candidate.name}, ${candidate.role}`}
              className="w-48 h-56 border border-gray-200 mx-auto lg:mx-0 shadow-md"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                backgroundColor: '#f9fafb'
              }}
              loading="eager"
            />
            <div className="flex-1 text-center lg:text-left">
              <div
                className="text-sm font-medium text-emerald-800 mb-3 tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {candidate.role}
              </div>
              <h2
                id="modal-title"
                className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                {candidate.name}
                {candidate.subtitle && (
                  <span className="block text-2xl mt-2 text-gray-700 font-normal">
                    {candidate.subtitle}
                  </span>
                )}
              </h2>
              <p
                className="text-gray-600 italic text-lg leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{candidate.tagline}"
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div id="modal-content" className="p-8 lg:p-12 bg-white">
          {Object.entries(candidate.biography).map(([key, section]) => (
            <BiographySectionComponent
              key={key}
              title={section.title}
              content={section.content}
            />
          ))}

          {/* Conclusion inspirante pour Angelina */}
          {candidate.id === 'deputee' && (
            <div className="mt-12 mb-8 text-center">
              <p
                className="text-xl font-bold italic"
                style={{
                  fontFamily: 'Merriweather, serif',
                  color: '#006400',
                  lineHeight: '1.6',
                  fontSize: '1.3rem'
                }}
              >
                "Avec Angélina Charlotte Nongou, la diaspora ne sera plus à la marge, mais au cœur de la reconstruction du Gabon."
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// CandidateCard Component - AMÉLIORÉ avec les spécifications précédentes
const CandidateCard: React.FC<{
  candidate: Candidate;
  onClick: (candidate: Candidate) => void;
}> = ({ candidate, onClick }) => {
  const handleClick = () => {
    onClick(candidate);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(candidate);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col w-full max-w-[260px] mx-auto">
      {/* Photo - RÉDUITE selon spécifications */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={candidate.image}
          alt={`Photo de ${candidate.name}, ${candidate.role}`}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        <div>
          <div
            className="text-xs font-medium text-emerald-800 mb-3 tracking-widest"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {candidate.role}
          </div>

          <h2
            className="text-2xl font-bold mb-2 text-gray-900 leading-tight"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {candidate.name}
            {candidate.subtitle && (
              <span className="block text-lg mt-1 text-gray-700 font-normal">
                {candidate.subtitle}
              </span>
            )}
          </h2>

          <p
            className="text-gray-600 mb-6 leading-relaxed text-sm italic"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            "{candidate.tagline}"
          </p>
        </div>

        <div>
          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className="w-full bg-white border border-emerald-800 text-emerald-800 px-6 py-3 rounded font-medium transition-all duration-300 hover:bg-emerald-800 hover:text-white text-sm tracking-wide mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Voir la biographie complète
          </button>

          {/* Social Media Icons */}
          <SocialMediaIcons socialMedia={candidate.socialMedia} />
        </div>
      </div>
    </div>
  );
};

// Main BiographySection Component - AMÉLIORÉ avec centrage parfait
const NewBiographySection: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCandidateClick = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <>
      {/* Optimized Font Loading */}
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="preload"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = 'stylesheet';
        }}
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </noscript>

      <section className="pb-12 px-6 bg-gray-50 min-h-screen">
        <div className="w-full">
          {/* Section Title - TITRE RÉDUIT selon spécifications */}
          <div className="flex flex-col items-center justify-center mb-6" style={{ marginTop: '40px' }}>
            <h1
              className="font-bold text-gray-900 tracking-wide mb-2 text-center"
              style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '1.8rem',
                lineHeight: '1.4'
              }}
            >
              Vos candidats
            </h1>
            <div className="w-24 h-0.5 bg-emerald-800" />
          </div>

          {/* Bloc de 2 cm sous le trait */}
          <div style={{ marginTop: '24px' }}>
            <section className="py-6 px-6 bg-gray-50">
              <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 24px 48px' }}>
                {/* Grille des candidats */}
                <div
                  className="bio-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '32px',
                    alignItems: 'stretch',
                    justifyItems: 'center',
                    maxWidth: '1120px',
                    margin: '0 auto',
                    width: '100%'
                  }}
                >
                  {/* Carte candidat 1 */}
                  <div
                    className="bio-card bg-white border border-gray-200 transition-all duration-300 h-full flex flex-col"
                    style={{
                      width: '100%',
                      maxWidth: '520px',
                      borderRadius: '10px',
                      padding: '16px 16px 12px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img
                        src="/images/hero/2.jpg"
                        alt="Angelina Charlotte Nongou-Mavikana"
                        className="photo w-full object-cover"
                        style={{
                          height: '420px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                        loading="lazy"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="text-center flex-1 flex flex-col justify-between" style={{ padding: '16px 8px 12px' }}>
                      <div>
                        <div className="role text-emerald-800 mb-2" style={{ fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                          CANDIDATE DÉPUTÉE – SIÈGE AFRIQUE
                        </div>
                        <h2 className="name text-gray-900" style={{ fontSize: '1.125rem', fontWeight: '700', margin: '8px 0 4px', fontFamily: 'Merriweather, serif' }}>
                          Angelina Charlotte Nongou-Mavikana
                          <span className="block text-gray-700" style={{ fontSize: '1rem', fontWeight: 'normal', marginTop: '4px' }}>
                            (ép. Leyenberger)
                          </span>
                        </h2>
                        <p className="quote text-gray-600 mb-4" style={{ fontSize: '0.95rem', color: '#374151', fontFamily: 'Inter, sans-serif' }}>
                          "Engagée pour une diaspora gabonaise unie et moderne."
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCandidateClick(candidatesData[0])}
                          className="w-full bg-white border border-emerald-800 text-emerald-800 px-5 py-2.5 rounded font-medium transition-all duration-300 hover:bg-emerald-800 hover:text-white text-xs tracking-wide mb-3"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          Voir la biographie complète
                        </button>
                        {/* Icônes sociales */}
                        <div className="flex justify-center gap-3 mt-3">
                          <a
                            href="https://facebook.com/angelina.nongou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="Facebook"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a
                            href="https://twitter.com/angelina_nongou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-black text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="Twitter/X"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                          <a
                            href="https://linkedin.com/in/angelina-nongou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-blue-700 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a
                            href="https://wa.me/33612345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-green-500 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="WhatsApp"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Carte candidat 2 */}
                  <div
                    className="bio-card bg-white border border-gray-200 transition-all duration-300 h-full flex flex-col"
                    style={{
                      width: '100%',
                      maxWidth: '520px',
                      borderRadius: '10px',
                      padding: '16px 16px 12px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img
                        src="/images/hero/7.jpg"
                        alt="Koumba Koudel Stéphane"
                        className="photo w-full"
                        style={{
                          height: '420px',
                          objectFit: 'contain',
                          objectPosition: 'center',
                          borderRadius: '8px',
                          backgroundColor: '#f9fafb'
                        }}
                        loading="lazy"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="text-center flex-1 flex flex-col justify-between" style={{ padding: '16px 8px 12px' }}>
                      <div>
                        <div className="role text-emerald-800 mb-2" style={{ fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                          SUPPLÉANT – SIÈGE AFRIQUE
                        </div>
                        <h2 className="name text-gray-900" style={{ fontSize: '1.125rem', fontWeight: '700', margin: '8px 0 4px', fontFamily: 'Merriweather, serif' }}>
                          Koumba Koudel Stéphane
                        </h2>
                        <p className="quote text-gray-600 mb-4" style={{ fontSize: '0.95rem', color: '#374151', fontFamily: 'Inter, sans-serif' }}>
                          "Professionnel expérimenté, au service du développement durable."
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCandidateClick(candidatesData[1])}
                          className="w-full bg-white border border-emerald-800 text-emerald-800 px-5 py-2.5 rounded font-medium transition-all duration-300 hover:bg-emerald-800 hover:text-white text-xs tracking-wide mb-3"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          Voir la biographie complète
                        </button>
                        {/* Icônes sociales */}
                        <div className="flex justify-center gap-3 mt-3">
                          <a
                            href="https://facebook.com/koumba.koudel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="Facebook"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a
                            href="https://twitter.com/koumba_koudel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-black text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="Twitter/X"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                          <a
                            href="https://linkedin.com/in/koumba-koudel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-blue-700 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a
                            href="https://wa.me/33612345679"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-green-500 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                            aria-label="WhatsApp"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>

        {/* Biography Modal */}
        <BiographyModal
          candidate={selectedCandidate}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </section>
    </>
  );
};

export default NewBiographySection;