import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';

const actualites = [
  {
    id: 1,
    title: 'Lancement Officiel de Notre Campagne',
    excerpt: 'Nous avons officiellement lancé notre campagne pour représenter la diaspora gabonaise en Afrique lors d\'un événement mémorable à Libreville.',
    date: '15 Septembre 2024',
    category: 'Campagne',
    imageUrl: '/placeholder-news-1.jpg',
    readTime: '3 min de lecture'
  },
  {
    id: 2,
    title: 'Rencontre avec la Communauté de Lagos',
    excerpt: 'Une rencontre fructueuse avec plus de 200 membres de la communauté gabonaise de Lagos pour discuter de leurs préoccupations et attentes.',
    date: '10 Septembre 2024',
    category: 'Communauté',
    imageUrl: '/placeholder-news-2.jpg',
    readTime: '5 min de lecture'
  },
  {
    id: 3,
    title: 'Partenariat avec l\'Union Africaine',
    excerpt: 'Signature d\'un protocole d\'accord avec l\'Union Africaine pour renforcer la coopération en faveur de la diaspora gabonaise.',
    date: '5 Septembre 2024',
    category: 'Partenariat',
    imageUrl: '/placeholder-news-3.jpg',
    readTime: '4 min de lecture'
  },
  {
    id: 4,
    title: 'Forum Économique : Résultats et Perspectives',
    excerpt: 'Retour sur le forum économique de Douala qui a réuni entrepreneurs et investisseurs gabonais de toute l\'Afrique Centrale.',
    date: '1er Septembre 2024',
    category: 'Économie',
    imageUrl: '/placeholder-news-4.jpg',
    readTime: '6 min de lecture'
  }
];

const medias = [
  {
    type: 'Interview TV',
    title: 'Interview sur Africa24 - Vision pour la Diaspora',
    date: '12 Septembre 2024',
    duration: '15 min',
    platform: 'Africa24'
  },
  {
    type: 'Podcast',
    title: 'Podcast Africa Business - Entrepreneuriat en Diaspora',
    date: '8 Septembre 2024',
    duration: '25 min',
    platform: 'Africa Business Radio'
  },
  {
    type: 'Article de Presse',
    title: 'Le Nouveau Gabon - "Une campagne prometteuse"',
    date: '6 Septembre 2024',
    duration: 'Article',
    platform: 'Le Nouveau Gabon'
  },
  {
    type: 'Interview Radio',
    title: 'Radio Gabon International - Débat sur la représentation',
    date: '3 Septembre 2024',
    duration: '20 min',
    platform: 'RGI'
  }
];

export default function ActualitesMediasPage() {
  return (
    <PageLayout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Actualités & Médias
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suivez toute l&apos;actualité de notre campagne, nos rencontres avec les communautés
              et notre présence dans les médias.
            </p>
          </div>

          {/* Actualités Principales */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">
                Dernières Actualités
              </h2>
              <Button variant="outline" size="sm">
                Voir toutes les actualités
              </Button>
            </div>

            {/* Article Principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-primary-100 flex items-center justify-center">
                    <span className="text-6xl">📰</span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                        Campagne
                      </span>
                      <span className="text-gray-500 text-sm">15 Septembre 2024</span>
                      <span className="text-gray-500 text-sm">3 min de lecture</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Lancement Officiel de Notre Campagne
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Nous avons officiellement lancé notre campagne pour représenter la diaspora gabonaise
                      en Afrique lors d&apos;un événement mémorable à Libreville. Plus de 500 personnes étaient
                      présentes pour ce moment historique...
                    </p>
                    <Button variant="primary">
                      Lire l&apos;article complet
                    </Button>
                  </div>
                </article>
              </div>

              {/* Articles Secondaires */}
              <div className="space-y-6">
                {actualites.slice(1, 3).map((article) => (
                  <article key={article.id} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        article.category === 'Communauté' ? 'bg-blue-100 text-blue-800' :
                        article.category === 'Partenariat' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-xs">{article.date}</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2 leading-tight">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button variant="outline" size="sm">
                      Lire plus
                    </Button>
                  </article>
                ))}
              </div>
            </div>

            {/* Autres Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actualites.slice(3).map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-primary-50 flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        article.category === 'Économie' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-xs">{article.readTime}</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{article.date}</span>
                      <Button variant="outline" size="sm">
                        Lire plus
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Section Médias */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Présence Médiatique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {medias.map((media, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`w-3 h-3 rounded-full mr-2 ${
                          media.type === 'Interview TV' ? 'bg-red-500' :
                          media.type === 'Podcast' ? 'bg-purple-500' :
                          media.type === 'Article de Presse' ? 'bg-blue-500' :
                          'bg-green-500'
                        }`}></span>
                        <span className="text-sm font-medium text-gray-600">{media.type}</span>
                      </div>
                      <h3 className="font-semibold text-primary mb-2">
                        {media.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>📅 {media.date}</span>
                        <span>⏱️ {media.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{media.platform}</span>
                    <Button variant="outline" size="sm">
                      {media.type === 'Article de Presse' ? 'Lire' : 'Écouter/Voir'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Restez Informés
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir toutes les actualités de notre campagne
              directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button variant="primary">
                S&apos;abonner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}