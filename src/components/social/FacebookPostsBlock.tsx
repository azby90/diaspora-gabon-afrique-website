'use client';

import React, { useEffect, useState } from 'react';
import { facebookApi, FacebookGraphPost } from '@/services/facebookApi';

interface FacebookPostsBlockProps {
  pageId: string;
  limit?: number;
  variant?: 'card' | 'minimal' | 'compact' | 'institutional';
}

const FacebookPostsBlock: React.FC<FacebookPostsBlockProps> = ({
  pageId,
  limit = 3,
  variant = 'card'
}) => {
  const [posts, setPosts] = useState<FacebookGraphPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Chargement des publications Facebook
  useEffect(() => {
    const loadFacebookPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const realPosts = await facebookApi.getPagePosts(limit);
        setPosts(realPosts);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des publications');
        console.error('Erreur chargement posts Facebook:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFacebookPosts();
  }, [limit, pageId]);


  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit }, (_, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-pulse" style={{ height: '500px' }}>
            <div className="bg-gray-200 rounded h-64 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-xl border border-red-200">
        <div className="text-red-400 text-4xl mb-4">⚠️</div>
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Erreur de chargement
        </h3>
        <p className="text-red-600 text-sm">
          {error}
        </p>
      </div>
    );
  }

  const renderPost = (post: FacebookGraphPost) => {
    const formatPublishDate = (dateString: string) => {
      const date = new Date(dateString);
      return `Publié le ${date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}`;
    };

    // Fonction pour formater le texte original sans troncature
    const formatOriginalMessage = (message: string) => {
      if (!message) return 'Publication sans texte';
      // Préserver les sauts de ligne et le formatage original
      return message.replace(/\n/g, '\n').trim();
    };

    const isVideo = post.type === 'video' || facebookApi.getMediaType(post) === 'video';
    const hasAttachment = post.attachments && post.attachments.data[0];
    const mediaItem = hasAttachment?.media;
    const imageUrl = post.full_picture || mediaItem?.image?.src;
    const videoUrl = mediaItem?.source;

    return (
      <article
        key={post.id}
        className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
        style={{ minHeight: '400px' }}
      >
        {/* Zone média adaptable selon le contenu */}
        <div className="relative bg-gray-50 overflow-hidden" style={{ minHeight: '250px', maxHeight: '400px' }}>
          {isVideo && videoUrl ? (
            // Lecteur vidéo intégré avec thumbnail cliquable
            <div className="relative w-full h-full group cursor-pointer"
                 onClick={() => setSelectedVideo(videoUrl)}>
              <img
                src={imageUrl}
                alt={`Vidéo - ${facebookApi.generateTitle(post)}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay Play Button */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-6 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>
              {/* Badge type */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-md">
                  {facebookApi.getMediaType(post) === 'reel' ? 'Réel' : 'Vidéo'}
                </span>
              </div>
            </div>
          ) : imageUrl ? (
            // Image cliquable avec agrandissement
            <div className="relative w-full h-full cursor-pointer group"
                 onClick={() => setSelectedImage(imageUrl)}>
              <img
                src={imageUrl}
                alt={`Publication - ${facebookApi.generateTitle(post)}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay zoom */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Badge type */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-md">
                  Publication
                </span>
              </div>
            </div>
          ) : (
            // Placeholder si pas de média
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📰</div>
                <span className="text-sm font-medium">Publication Facebook</span>
              </div>
            </div>
          )}
        </div>

        {/* Contenu de la carte - hauteur adaptable */}
        <div className="p-4 flex flex-col flex-1">
          {/* Texte original complet de la publication Facebook */}
          <div className="flex-1 mb-4">
            <p className="font-inter text-sm text-gray-800 leading-relaxed whitespace-pre-line"
               style={{ textAlign: 'justify' }}>
              {formatOriginalMessage(post.message || post.story || '')}
            </p>
          </div>

          {/* Footer avec date et bouton aligné à droite */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
            <span className="font-inter text-xs text-gray-500">
              {formatPublishDate(post.created_time)}
            </span>
            <button
              className="font-inter text-xs font-medium text-white px-4 py-2 rounded transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: '#0A7A3B',
                borderColor: '#0A7A3B'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#28a745';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0A7A3B';
              }}
              onClick={() => {
                window.open(post.permalink_url, '_blank', 'noopener,noreferrer');
              }}
            >
              Voir sur Facebook
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="facebook-posts-block">
      <div className={`grid gap-6 ${
        variant === 'institutional' ?
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :
          variant === 'compact' ?
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      }`}>
        {posts.map(renderPost)}
      </div>

      {/* Modal Vidéo amélioré */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
             onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-5xl mx-4 h-[90vh] flex flex-col">
            {/* Header du modal */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-medium">Vidéo Facebook</h3>
              <button
                className="text-white text-2xl hover:text-gray-300 transition-colors p-2"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fermer la vidéo"
              >
                ✕
              </button>
            </div>

            {/* Zone vidéo */}
            <div className="flex-1 bg-black rounded-lg overflow-hidden">
              {/* Pour les vraies vidéos Facebook, on utilisera l'iframe embed */}
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; web-share"
                allowFullScreen
                title="Vidéo Facebook"
              ></iframe>
            </div>

            {/* Footer du modal */}
            <div className="mt-4 text-center">
              <button
                className="font-inter text-sm text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded transition-colors"
                onClick={() => window.open(selectedVideo, '_blank')}
              >
                Voir sur Facebook
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
             onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl max-h-5xl mx-4">
            <button
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Agrandissement"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {posts.length === 0 && !loading && !error && (
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

        /* Responsive design optimisé pour tablette et mobile */
        @media (max-width: 1024px) {
          .facebook-posts-block .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .facebook-posts-block .grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .facebook-posts-block article {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FacebookPostsBlock;