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
      category: 'Communauté',
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne gauche - Actualités */}
          <div>
            <h2 className="font-inter text-3xl font-bold text-black mb-8">
              Actualités récentes
            </h2>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white cursor-pointer transition-all duration-200 border border-gray-200 p-5"
                  onClick={() => {
                    const baseUrl = item.type === 'article' ? '/actualites' : '/medias';
                    window.location.href = `${baseUrl}/${item.slug}`;
                  }}
                >
                  <div className="flex gap-4">
                    {/* Image à gauche */}
                    <div className="relative bg-gray-100 overflow-hidden flex-shrink-0 w-24 h-24">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="font-inter text-xs font-medium text-gray-600 text-center">
                          {item.type === 'video' ? '🎥' : item.type === 'album' ? '📸' : '📰'}
                        </span>
                      </div>
                    </div>

                    {/* Contenu à droite */}
                    <div className="flex-1">
                      <h3 className="font-inter text-lg font-bold text-black mb-2">
                        {item.title}
                      </h3>

                      <p className="font-inter text-sm text-gray-700 mb-3 leading-relaxed">
                        {item.excerpt.substring(0, 100)}...
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="font-inter text-xs text-gray-500">
                          {item.date} • {item.lieu}
                        </span>

                        <button
                          className="font-inter text-sm font-medium text-primary hover:underline"
                          onClick={(e) => {
                            e.stopPropagation();
                            const baseUrl = item.type === 'article' ? '/actualites' : '/medias';
                            window.location.href = `${baseUrl}/${item.slug}`;
                          }}
                        >
                          Lire →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Colonne droite - Lettre de la candidate */}
          <div>
            <div className="bg-white border border-gray-200 p-6">
              {/* Photo portrait centrée */}
              <div className="mb-6 text-center">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mx-auto aspect-[3/4] max-w-[250px] w-full">
                  <span className="font-inter text-sm font-medium text-gray-600">
                    Portrait officiel
                    <br />
                    Angelina
                  </span>
                </div>
              </div>

              {/* Nom complet */}
              <div className="text-center mb-4">
                <h3 className="font-inter text-lg font-bold text-black">
                  Angelina Charlotte Nongou-Mavikana
                  <br />
                  <span className="font-inter text-base font-normal text-gray-700">
                    (ép. Leyenberger)
                  </span>
                </h3>
              </div>

              {/* Sous-titre */}
              <div className="text-center mb-6">
                <h4 className="font-inter text-xl font-bold text-primary">
                  Lettre aux citoyens
                </h4>
              </div>

              {/* Texte introductif */}
              <div className="mb-6 space-y-4">
                <p className="font-inter text-base text-gray-700 leading-relaxed">
                  "Chères et chers compatriotes dispersés aux quatre coins de l'Afrique, votre courage et votre détermination font de vous les ambassadeurs authentiques de notre belle nation gabonaise."
                </p>
                <p className="font-inter text-base text-gray-700 leading-relaxed">
                  "Votre réussite dans vos pays d'accueil honore le Gabon et tisse des liens précieux entre nos peuples frères."
                </p>
              </div>

              {/* Lien en bas */}
              <div className="text-left">
                <button
                  className="font-inter text-base font-medium text-primary hover:underline transition-all duration-200"
                  onClick={() => window.location.href = '/programme'}
                >
                  Lire la suite →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMessage;