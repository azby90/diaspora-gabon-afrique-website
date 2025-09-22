'use client';

import React, { useEffect, useState } from 'react';

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  permalink_url?: string;
  type: 'post' | 'video' | 'reel';
  category: string;
  lieu?: string;
  attachments?: {
    data: Array<{
      type: string;
      media?: {
        image?: {
          src: string;
        };
      };
      url?: string;
      title?: string;
      description?: string;
    }>;
  };
}

interface FacebookPostsBlockProps {
  pageId: string;
  limit?: number;
  variant?: 'card' | 'minimal' | 'compact';
}

const FacebookPostsBlock: React.FC<FacebookPostsBlockProps> = ({
  pageId,
  limit = 3,
  variant = 'card'
}) => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Données d'exemple avec mix de publications, vidéos et réels Facebook
  const demoFacebookPosts: FacebookPost[] = [
    {
      id: '1',
      type: 'post',
      category: 'Campagne',
      lieu: 'Libreville, Gabon',
      message: "Chers compatriotes de la diaspora gabonaise en Afrique ! 🇬🇦\n\nAujourd'hui, je partage avec vous ma vision pour notre représentation au Parlement. Ensemble, nous pouvons faire la différence pour nos communautés établies sur le continent africain.",
      created_time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // Il y a 2 heures
      permalink_url: `https://www.facebook.com/profile.php?id=${pageId}`,
      attachments: {
        data: [{
          type: 'photo',
          media: {
            image: {
              src: '/images/hero/5.jpg'
            }
          }
        }]
      }
    },
    {
      id: '2',
      type: 'video',
      category: 'Rencontre',
      lieu: 'Lagos, Nigeria',
      message: "Grande réunion avec la communauté gabonaise de Lagos ! 🤝\n\nPlus de 200 compatriotes présents pour échanger sur nos priorités : éducation, santé, entrepreneuriat. Vos voix comptent et seront entendues au Parlement.\n\nMerci pour cette mobilisation exceptionnelle ! 💪",
      created_time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Il y a 1 jour
      permalink_url: `https://www.facebook.com/profile.php?id=${pageId}`,
    },
    {
      id: '3',
      type: 'reel',
      category: 'Programme',
      lieu: 'Dakar, Sénégal',
      message: "📢 PROGRAMME DE SOCIÉTÉ 📢\n\nDécouvrez mon programme en 7 piliers pour la diaspora gabonaise en Afrique : Réformes institutionnelles, Excellence éducative, Dynamisation économique, Protection sociale universelle, Rayonnement culturel, Mobilité renforcée, Inclusion communautaire.",
      created_time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // Il y a 3 jours
      permalink_url: `https://www.facebook.com/profile.php?id=${pageId}`,
      attachments: {
        data: [{
          type: 'link',
          url: '/programme',
          title: 'Programme de Société - UN Diaspora Afrique 2025',
          description: 'Découvrez les 7 piliers de notre programme pour transformer la représentation de la diaspora gabonaise en Afrique.'
        }]
      }
    },
    {
      id: '4',
      type: 'video',
      category: 'Engagement',
      lieu: 'Abidjan, Côte d\'Ivoire',
      message: "🎯 OBJECTIF : Créer un pont durable entre le Gabon et sa diaspora africaine.\n\nChaque Gabonais, où qu'il se trouve sur le continent, mérite une représentation forte et efficace. C'est notre engagement solennel.",
      created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // Il y a 5 jours
      permalink_url: `https://www.facebook.com/profile.php?id=${pageId}`,
    },
    {
      id: '5',
      type: 'post',
      category: 'Tournée',
      lieu: 'Accra, Ghana',
      message: "🌍 TOURNÉE AFRICAINE EN COURS !\n\nCette semaine, nous sommes en déplacement à Accra, Abidjan et Bamako pour rencontrer nos compatriotes. Chaque rencontre nous enrichit et renforce notre détermination.\n\nVos préoccupations, vos projets, vos espoirs : tout sera porté au Parlement !",
      created_time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Il y a 7 jours
      permalink_url: `https://www.facebook.com/profile.php?id=${pageId}`,
      attachments: {
        data: [{
          type: 'photo',
          media: {
            image: {
              src: '/images/hero/3.jpg'
            }
          }
        }]
      }
    }
  ];

  useEffect(() => {
    // Simuler le chargement des posts Facebook
    const loadPosts = () => {
      setTimeout(() => {
        setPosts(demoFacebookPosts.slice(0, limit));
        setLoading(false);
      }, 1500);
    };

    loadPosts();
  }, [limit]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

    if (diffDays === 0) {
      if (diffHours === 0) {
        return "À l'instant";
      }
      return diffHours === 1 ? "Il y a 1 heure" : `Il y a ${diffHours} heures`;
    }
    if (diffDays === 1) {
      return "Hier";
    }
    return `Il y a ${diffDays} jours`;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: limit }, (_, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 animate-pulse">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-48"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const renderPost = (post: FacebookPost, index: number) => {
    const isCompact = variant === 'compact';
    const isMinimal = variant === 'minimal';

    return (
      <article
        key={post.id}
        className="bg-white cursor-pointer transition-all duration-200 border border-gray-200 hover:border-gray-300 flex flex-col"
        style={{ minHeight: '350px' }}
        onClick={() => {
          window.location.href = post.permalink_url || '#';
        }}
      >
        {/* Image en haut - ratio 16:9, centrée */}
        <div className="relative bg-gray-100 overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {post.attachments && post.attachments.data[0]?.media?.image ? (
            <img
              src={post.attachments.data[0].media.image.src}
              alt={`${post.type} Facebook`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="font-inter text-sm font-medium text-gray-600 text-center">
                {post.type === 'video' ? '🎥 Vidéo' : post.type === 'reel' ? '📱 Réel' : '📰 Publication'}
                <br />
                <span className="text-xs">{post.lieu}</span>
              </span>
            </div>
          )}
          {/* Badge type de contenu */}
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 text-xs font-medium text-white rounded ${
              post.type === 'video' ? 'bg-red-500' :
              post.type === 'reel' ? 'bg-purple-500' :
              'bg-blue-500'
            }`}>
              {post.type === 'video' ? 'Vidéo' : post.type === 'reel' ? 'Réel' : 'Post'}
            </span>
          </div>
        </div>

        {/* Contenu de la carte */}
        <div className="p-5 flex flex-col h-full">
          {/* Tag catégorie - centré */}
          <div className="text-center mb-3">
            <span className="inline-block font-inter text-xs font-medium text-white bg-primary px-3 py-1 rounded">
              {post.category}
            </span>
          </div>

          {/* Message tronqué - justifié */}
          <p className="font-inter text-sm text-gray-700 mb-4 leading-relaxed flex-1 line-clamp-4" style={{ textAlign: 'justify' }}>
            {post.message && post.message.length > 200 ?
              post.message.substring(0, 200) + '...' :
              post.message
            }
          </p>

          {/* Bas de carte */}
          <div className="mt-auto border-t border-gray-100 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs text-gray-500">
                {formatDate(post.created_time)}
              </span>
              <button
                className="font-inter text-sm font-medium text-primary hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = post.permalink_url || '#';
                }}
              >
                Voir sur Facebook →
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="facebook-posts-block">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${variant === 'compact' ? 'gap-4' : ''}`}>
        {posts.map(renderPost)}
      </div>

      {posts.length === 0 && !loading && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-gray-400 text-6xl mb-4">📘</div>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Aucune publication récente
          </h3>
          <p className="text-gray-500">
            Les dernières publications apparaîtront ici automatiquement.
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .facebook-posts-block {
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .facebook-posts-block article {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FacebookPostsBlock;