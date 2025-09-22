'use client';

import React, { useEffect } from 'react';

interface FacebookFeedProps {
  pageUrl: string;
  width?: number;
  height?: number;
  showPosts?: number;
  variant?: 'compact' | 'full';
}

const FacebookFeed: React.FC<FacebookFeedProps> = ({
  pageUrl,
  width = 500,
  height = 600,
  showPosts = 3,
  variant = 'full'
}) => {
  useEffect(() => {
    // Charger le SDK Facebook de manière asynchrone
    const loadFacebookSDK = () => {
      if (typeof window !== 'undefined' && !window.FB) {
        // Créer l'élément script pour le SDK Facebook
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';

        // Ajouter le script au document
        document.head.appendChild(script);

        // Initialiser Facebook SDK une fois chargé
        script.onload = () => {
          if (window.FB) {
            window.FB.init({
              xfbml: true,
              version: 'v18.0'
            });
          }
        };
      } else if (window.FB) {
        // Si le SDK est déjà chargé, parser les éléments Facebook
        window.FB.XFBML.parse();
      }
    };

    loadFacebookSDK();
  }, []);

  // Extraire l'ID de la page Facebook depuis l'URL
  const getPageId = (url: string) => {
    // Si c'est déjà un ID (que des chiffres), le retourner
    if (/^\d+$/.test(url)) {
      return url;
    }

    // Extraire l'ID depuis profile.php?id=
    const profileMatch = url.match(/profile\.php\?id=(\d+)/);
    if (profileMatch) {
      return profileMatch[1];
    }

    // Sinon, extraire depuis l'URL classique
    const match = url.match(/facebook\.com\/([^\/\?]+)/);
    return match ? match[1] : url;
  };

  const pageId = getPageId(pageUrl);
  const isCompact = variant === 'compact';

  return (
    <div className="facebook-feed-container">
      {/* Plugin Facebook Page */}
      <div
        className="fb-page"
        data-href={`https://www.facebook.com/${pageId}`}
        data-tabs="timeline"
        data-width={width}
        data-height={height}
        data-small-header={isCompact ? "true" : "false"}
        data-adapt-container-width="true"
        data-hide-cover={isCompact ? "true" : "false"}
        data-show-facepile={isCompact ? "false" : "true"}
        data-show-posts="true"
        style={{
          maxWidth: '100%',
          width: '100%'
        }}
      >
        <blockquote
          cite={`https://www.facebook.com/${pageId}`}
          className="fb-xfbml-parse-ignore"
        >
          <a
            href={`https://www.facebook.com/${pageId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0A7A3B',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Suivez les actualités d'Angélina sur Facebook
          </a>
        </blockquote>
      </div>

      {/* Style pour adapter le widget au design du site */}
      <style jsx>{`
        .facebook-feed-container {
          width: 100%;
          overflow: hidden;
        }

        .facebook-feed-container iframe {
          border-radius: 8px !important;
          border: 1px solid #e9ecef !important;
        }

        /* Style responsive pour mobile */
        @media (max-width: 768px) {
          .facebook-feed-container {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

// Déclaration TypeScript pour le SDK Facebook
declare global {
  interface Window {
    FB: any;
  }
}

export default FacebookFeed;