'use client';

import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const campagneArticles = [
  {
    id: 1,
    title: "Rencontre historique avec la diaspora gabonaise de Johannesburg",
    excerpt: "Une soirée d'échanges fructueuse avec nos compatriotes d'Afrique du Sud pour présenter notre vision pour l'Afrique et renforcer les liens avec la communauté gabonaise. Plus de 200 participants ont répondu présent pour cette première étape de notre tournée africaine.",
    date: "2025-01-20",
    author: "Équipe campagne",
    categories: ["Déplacements", "Diaspora"],
    image: "/images/placeholder-campaign.jpg",
    slug: "rencontre-johannesburg",
    comments: 12,
    likes: 45,
    views: 2840
  },
  {
    id: 2,
    title: "Communiqué officiel : Notre programme complet pour la diaspora africaine",
    excerpt: "Présentation détaillée de nos 5 axes prioritaires pour renforcer les liens entre le Gabon et sa diaspora africaine. Un plan ambitieux qui place l'unité et la coopération au cœur de notre action politique pour les années à venir.",
    date: "2025-01-18",
    author: "Angelina Charlotte Nongou-Mavikana",
    categories: ["Communiqués", "Programme"],
    image: "/images/placeholder-campaign.jpg",
    slug: "programme-diaspora",
    comments: 8,
    likes: 67,
    views: 4150
  },
  {
    id: 3,
    title: "Interview exclusive sur TV5 Afrique : Les enjeux de représentation",
    excerpt: "Notre candidate s'exprime en direct sur les enjeux cruciaux de représentation de la diaspora gabonaise au sein des institutions africaines. Un entretien de 45 minutes qui aborde les défis et opportunités de notre communauté.",
    date: "2025-01-15",
    author: "TV5 Afrique",
    categories: ["Médias", "Interviews"],
    image: "/images/placeholder-campaign.jpg",
    slug: "interview-tv5",
    comments: 15,
    likes: 89,
    views: 6720
  },
  {
    id: 4,
    title: "Meeting exceptionnel à Dakar : Mobilisation réussie de la communauté",
    excerpt: "Retour en images sur la rencontre exceptionnelle avec la communauté gabonaise de Dakar lors de notre tournée africaine. Une mobilisation impressionnante qui témoigne de l'engagement de nos compatriotes sénégalais.",
    date: "2025-01-12",
    author: "Correspondant Dakar",
    categories: ["Événements", "Photos"],
    image: "/images/placeholder-campaign.jpg",
    slug: "meeting-dakar",
    comments: 22,
    likes: 134,
    views: 5890
  }
];

const recentPosts = [
  {
    title: "Social Study Proves the Hostility Toward Women in Economics",
    date: "2025-01-18",
    image: "/images/placeholder-campaign.jpg",
    slug: "study-hostility-women"
  },
  {
    title: "The Politicization of Military May Turn Dangerous",
    date: "2025-01-15",
    image: "/images/placeholder-campaign.jpg",
    slug: "military-politicization"
  },
  {
    title: "New Research Shows Climate Impact on African Communities",
    date: "2025-01-12",
    image: "/images/placeholder-campaign.jpg",
    slug: "climate-impact-research"
  }
];

const archives = [
  "Janvier 2025",
  "Décembre 2024",
  "Novembre 2024",
  "Octobre 2024",
  "Septembre 2024"
];

export default function ActualitesMediasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatShortDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <PageLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header style RightWay */}
        <div className="bg-[#0A7A3B] text-white text-center py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-semibold mb-3">
              Actualités & Médias
            </h1>
            <p className="text-lg opacity-90">
              Suivez l'actualité de la campagne d'Angelina Charlotte Nongou-Mavikana
            </p>
          </div>
        </div>

        {/* Conteneur principal CENTRÉ comme RightWay */}
        <div className="flex justify-center min-h-screen bg-gray-50">
          <main className="max-w-[1140px] w-full px-5 py-10">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">

            {/* COLONNE ARTICLES - style RightWay */}
            <section className="bg-white rounded-lg shadow-lg">
              {campagneArticles.map((article, index) => (
                <article key={article.id} className={`${index !== campagneArticles.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  {/* Image large 16/9 */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full h-64 object-cover ${index === 0 ? 'rounded-t-lg' : ''}`}
                  />

                  <div className="p-6">
                    {/* Titre style RightWay */}
                    <h2 className="text-2xl font-semibold text-[#0A7A3B] mb-2 leading-tight">
                      <a
                        href={`/actualites-medias/${article.slug}`}
                        className="hover:text-[#085a2b] transition-colors"
                      >
                        {article.title}
                      </a>
                    </h2>

                    {/* Méta style RightWay */}
                    <div className="text-sm text-gray-600 mb-3">
                      📅 {formatDate(article.date)} • 👤 par {article.author} • 🏷️ {article.categories.join(', ')}
                    </div>

                    {/* Extrait */}
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    {/* Actions style RightWay */}
                    <div className="flex justify-between items-center">
                      <a
                        href={`/actualites-medias/${article.slug}`}
                        className="bg-[#F1C232] text-gray-900 px-5 py-2 rounded font-medium hover:bg-[#d4a929] transition-colors"
                      >
                        Lire la suite
                      </a>

                      <div className="text-sm text-gray-500">
                        👁️ {article.views.toLocaleString()} vues • 💬 {article.comments} commentaires
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>


            {/* SIDEBAR style RightWay */}
            <aside className="flex flex-col gap-8">

              {/* Bloc Recherche */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#0A7A3B] mb-5 pb-3 border-b-2 border-[#F1C232]">
                  Recherche
                </h3>
                <form className="relative">
                  <input
                    type="search"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 border-2 border-gray-200 rounded-md focus:border-[#0A7A3B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0A7A3B]"
                  >
                    🔍
                  </button>
                </form>
              </div>

              {/* Bloc Archives */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#0A7A3B] mb-5 pb-3 border-b-2 border-[#F1C232]">
                  Archives
                </h3>
                <ul className="space-y-3">
                  {archives.map((archive, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between items-center text-gray-600 hover:text-[#0A7A3B] py-2 border-b border-gray-100 transition-colors"
                      >
                        <span>{archive}</span>
                        <span className="text-sm text-gray-400">({8 + index})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Publications récentes */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#0A7A3B] mb-5 pb-3 border-b-2 border-[#F1C232]">
                  Publications Récentes
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <img
                        src={post.image}
                        alt=""
                        className="w-14 h-14 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-[#0A7A3B] leading-tight mb-1 cursor-pointer transition-colors">
                          {post.title}
                        </h4>
                        <time className="text-xs text-gray-500">
                          {formatShortDate(post.date)}
                        </time>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendrier */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#0A7A3B] mb-5 pb-3 border-b-2 border-[#F1C232]">
                  Calendrier
                </h3>
                <div className="text-center">
                  <div className="text-base font-semibold text-[#0A7A3B] mb-4">Janvier 2025</div>
                  <div className="grid grid-cols-7 gap-1 text-sm">
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Lu</div>
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Ma</div>
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Me</div>
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Je</div>
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Ve</div>
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Sa</div>
                    <div className="text-[#0A7A3B] font-semibold p-2 text-xs">Di</div>

                    <div></div>
                    <div></div>
                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">1</div>
                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">2</div>
                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">3</div>
                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">4</div>
                    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">5</div>

                    {Array.from({ length: 26 }, (_, i) => (
                      <div
                        key={i + 6}
                        className={`p-2 rounded cursor-pointer ${
                          i + 6 === 15 || i + 6 === 18 || i + 6 === 20
                            ? 'bg-[#F1C232] text-gray-900 font-semibold'
                            : i + 6 === 23
                            ? 'bg-[#0A7A3B] text-white font-semibold'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {i + 6}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </aside>
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}