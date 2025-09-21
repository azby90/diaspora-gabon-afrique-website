'use client';

import React from 'react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  lieu?: string;
  category: string;
  type: 'article' | 'video' | 'album';
  image: string;
  slug: string;
}

const NewsAndMessage: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Grande rencontre familiale des Gabonais de Dakar',
      excerpt: 'Un moment d\'émotion et de partage exceptionnel ! Plus de 200 familles gabonaises se sont rassemblées dans les jardins de l\'Institut français pour célébrer nos liens indéfectibles. Entre plats traditionnels, danses folkloriques et témoignages touchants, cette journée restera gravée dans nos mémoires.',
      date: '15 Mars 2025',
      lieu: 'Dakar, Sénégal',
      category: 'Rencontre',
      type: 'article',
      image: '/images/news/senegal.jpg',
      slug: 'rencontre-familiale-dakar'
    },
    {
      id: '2',
      title: 'Marché solidaire : entrepreneurs gabonais d\'Afrique centrale',
      excerpt: 'L\'entrepreneuriat gabonais rayonne ! Découvrez comment nos compatriotes de Yaoundé, Bangui et N\'Djamena créent des ponts commerciaux innovants. De l\'artisanat traditionnel aux nouvelles technologies, leurs initiatives transforment l\'économie régionale tout en préservant notre identité culturelle.',
      date: '12 Mars 2025',
      lieu: 'Yaoundé, Cameroun',
      category: 'Économie',
      type: 'article',
      image: '/images/news/economie.jpg',
      slug: 'marche-solidaire-entrepreneurs'
    },
    {
      id: '3',
      title: 'Festival culturel "Gabon mon amour" à Lomé',
      excerpt: 'Trois jours de festivités exceptionnelles ! Le festival culturel organisé par nos compatriotes de Lomé a ébloui plus de 1000 visiteurs. Expositions d\'art contemporain, concerts de musique traditionnelle et moderne, ateliers culinaires... Un véritable voyage au cœur de notre patrimoine.',
      date: '8 Mars 2025',
      lieu: 'Lomé, Togo',
      category: 'Culture',
      type: 'video',
      image: '/images/news/culture.jpg',
      slug: 'festival-culturel-lome'
    },
    {
      id: '4',
      title: 'Bourse d\'excellence : 50 étudiants gabonais primés',
      excerpt: 'Fierté et émotion à Abidjan ! La cérémonie de remise des bourses d\'excellence a récompensé 50 jeunes Gabonais pour leur parcours académique remarquable. Médecine, ingénierie, sciences sociales... Ces futurs leaders incarnent l\'espoir et l\'avenir de notre diaspora africaine.',
      date: '5 Mars 2025',
      lieu: 'Abidjan, Côte d\'Ivoire',
      category: 'Éducation',
      type: 'album',
      image: '/images/news/education.jpg',
      slug: 'bourse-excellence-etudiants'
    },
    {
      id: '5',
      title: 'Forum économique de la diaspora à Lagos',
      excerpt: 'Networking et échanges fructueux ! Plus de 300 entrepreneurs gabonais se sont réunis pour renforcer les liens commerciaux inter-africains. Discussions stratégiques, partenariats innovants et vision d\'avenir ont marqué cette rencontre exceptionnelle qui ouvre de nouvelles perspectives.',
      date: '2 Mars 2025',
      lieu: 'Lagos, Nigeria',
      category: 'Économie',
      type: 'article',
      image: '/images/news/forum.jpg',
      slug: 'forum-economique-lagos'
    },
    {
      id: '6',
      title: 'Célébration de l\'indépendance à Kinshasa',
      excerpt: 'Une fête inoubliable ! La communauté gabonaise de Kinshasa a célébré avec fierté les 65 ans d\'indépendance de notre nation. Défilés colorés, hymnes patriotiques et moments de recueillement ont rythmé cette journée mémorable qui renforce notre sentiment d\'appartenance.',
      date: '28 Février 2025',
      lieu: 'Kinshasa, RDC',
      category: 'Culture',
      type: 'album',
      image: '/images/news/independance.jpg',
      slug: 'celebration-independance-kinshasa'
    }
  ];

  return (
    <section className="bg-white" style={{ paddingTop: '15px', paddingBottom: '80px' }}>
      <div className="w-full px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-[1000px] mx-auto">
            {/* Titre global centré */}
            <h2 className="font-inter text-3xl font-bold text-black mb-6 text-center">
              Actualités récentes
            </h2>

            {/* Grille principale : 3 colonnes actualités + 1 colonne lettre */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 items-start">
              {/* Zone Actualités - 2 colonnes × 3 lignes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white cursor-pointer transition-all duration-200 border border-gray-200 hover:border-gray-300 flex flex-col"
                    style={{ minHeight: '350px' }}
                    onClick={() => {
                      const baseUrl = item.type === 'article' ? '/actualites' : '/medias';
                      window.location.href = `${baseUrl}/${item.slug}`;
                    }}
                  >
                    {/* Image en haut - ratio 16:9, centrée */}
                    <div className="relative bg-gray-100 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="font-inter text-sm font-medium text-gray-600 text-center">
                          {item.type === 'video' ? '🎥 Vidéo' : item.type === 'album' ? '📸 Album' : '📰 Article'}
                          <br />
                          <span className="text-xs">{item.lieu}</span>
                        </span>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-5 flex flex-col h-full">
                      {/* Tag catégorie - centré */}
                      <div className="text-center mb-3">
                        <span className="inline-block font-inter text-xs font-medium text-white bg-primary px-3 py-1 rounded">
                          {item.category}
                        </span>
                      </div>

                      {/* Titre - centré */}
                      <h3 className="font-inter text-lg font-bold text-black mb-3 text-center line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Extrait - justifié */}
                      <p className="font-inter text-sm text-gray-700 mb-4 leading-relaxed flex-1" style={{ textAlign: 'justify' }}>
                        {item.excerpt}
                      </p>

                      {/* Bas de carte */}
                      <div className="mt-auto border-t border-gray-100 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-inter text-xs text-gray-500">
                            {item.date}
                          </span>
                          <button
                            className="font-inter text-sm font-medium text-primary hover:underline"
                            onClick={(e) => {
                              e.stopPropagation();
                              const baseUrl = item.type === 'article' ? '/actualites' : '/medias';
                              window.location.href = `${baseUrl}/${item.slug}`;
                            }}
                          >
                            Lire la suite →
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Colonne droite - Lettre de la candidate */}
              <div className="bg-white border border-gray-200 p-6" style={{ minHeight: '600px' }}>
                {/* Photo portrait centrée */}
                <div className="mb-4 text-center">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto aspect-[3/4] max-w-[180px] w-full">
                    <span className="font-inter text-sm font-medium text-gray-600 text-center">
                      Portrait officiel
                      <br />
                      Angelina Charlotte
                      <br />
                      Nongou-Mavikana
                    </span>
                  </div>
                </div>

                {/* Nom complet */}
                <div className="text-center mb-3">
                  <h3 className="font-inter text-sm font-bold text-black">
                    Angelina Charlotte Nongou-Mavikana
                    <br />
                    <span className="font-inter text-xs font-normal text-gray-700">
                      (ép. Leyenberger)
                    </span>
                  </h3>
                </div>

                {/* Sous-titre */}
                <div className="text-center mb-4">
                  <h4 className="font-inter text-lg font-bold text-primary">
                    Lettre aux citoyens
                  </h4>
                </div>

                {/* Texte introductif */}
                <div className="mb-4 space-y-3">
                  <p className="font-inter text-sm text-gray-700 leading-relaxed" style={{ textAlign: 'justify' }}>
                    "Chères et chers compatriotes dispersés aux quatre coins de l'Afrique, votre courage et votre détermination font de vous les ambassadeurs authentiques de notre belle nation gabonaise."
                  </p>
                  <p className="font-inter text-sm text-gray-700 leading-relaxed" style={{ textAlign: 'justify' }}>
                    "Votre réussite dans vos pays d'accueil honore le Gabon et tisse des liens précieux entre nos peuples frères."
                  </p>
                </div>

                {/* Lien en bas */}
                <div className="text-center mt-auto">
                  <button
                    className="font-inter text-sm font-medium text-primary hover:underline transition-all duration-200"
                    onClick={() => window.location.href = '/programme'}
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
  );
};

export default NewsAndMessage;