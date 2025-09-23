// Service pour récupérer les publications Facebook via Graph API
export interface FacebookGraphPost {
  id: string;
  message?: string;
  story?: string;
  description?: string;
  created_time: string;
  permalink_url: string;
  full_picture?: string;
  attachments?: {
    data: Array<{
      type: string;
      media?: {
        image?: {
          src: string;
          width: number;
          height: number;
        };
        source?: string; // Pour les vidéos
      };
      url?: string;
      title?: string;
      description?: string;
    }>;
  };
  type: 'status' | 'photo' | 'video' | 'link' | 'event' | 'note';
}

export interface FacebookPage {
  id: string;
  name: string;
  posts: {
    data: FacebookGraphPost[];
    paging?: {
      next?: string;
      previous?: string;
    };
  };
}

class FacebookApiService {
  private baseUrl = 'https://graph.facebook.com/v18.0';
  private pageId = '61579187160785'; // ID de la page d'Angélina
  private accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN || '';

  /**
   * Récupère les publications récentes de la page Facebook
   * @param limit Nombre de publications à récupérer (défaut: 6)
   * @returns Promise avec les publications formatées
   */
  async getPagePosts(limit: number = 6): Promise<FacebookGraphPost[]> {
    try {
      // Construction de l'URL pour l'API Graph - récupération complète
      const fields = [
        'id',
        'message',
        'story',
        'created_time',
        'permalink_url',
        'full_picture',
        'attachments{type,media{image,source},url,title,description}',
        'type',
        'object_id',
        'picture',
        'source',
        'description'
      ].join(',');

      const url = `${this.baseUrl}/${this.pageId}/posts?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;

      // Mode développement : utiliser des données de démonstration
      if (process.env.NODE_ENV === 'development' && !this.accessToken) {
        console.warn('🔄 Mode développement : utilisation de données de démonstration Facebook');
        return this.getDemoData(limit);
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erreur Facebook API: ${response.status} ${response.statusText}`);
      }

      const data: { data: FacebookGraphPost[] } = await response.json();

      // Filtrer et prioriser les posts avec contenu visuel ou texte substantiel
      const processedPosts = data.data
        .filter(post => {
          // Accepter les posts avec média ou texte substantiel
          const hasMedia = post.full_picture ||
            post.attachments?.data.some(att => att.type === 'photo' || att.type === 'video_inline');
          const hasSubstantialText = post.message && post.message.trim().length > 20;

          return hasMedia || hasSubstantialText;
        })
        .map(post => ({
          ...post,
          // Assurer que le message complet est préservé
          message: post.message || post.story || post.description || '',
        }));

      return processedPosts.slice(0, limit);

    } catch (error) {
      console.error('Erreur lors de la récupération des posts Facebook:', error);
      // Fallback sur les données de démonstration en cas d'erreur
      return this.getDemoData(limit);
    }
  }

  /**
   * Génère un titre automatique depuis le contenu d'un post
   */
  generateTitle(post: FacebookGraphPost): string {
    const text = post.message || post.story || '';
    if (!text) return 'Publication Facebook';

    // Nettoyer le texte (supprimer emojis, hashtags, liens)
    let cleanText = text
      .replace(/[^\w\s\u00C0-\u017F]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Prendre les premiers mots (max 60 caractères)
    if (cleanText.length > 60) {
      cleanText = cleanText.substring(0, 60);
      const lastSpace = cleanText.lastIndexOf(' ');
      if (lastSpace > 20) {
        cleanText = cleanText.substring(0, lastSpace);
      }
    }

    return cleanText || 'Publication Facebook';
  }

  /**
   * Détermine le type de média d'un post
   */
  getMediaType(post: FacebookGraphPost): 'post' | 'video' | 'reel' {
    if (post.type === 'video') return 'video';

    const hasVideoAttachment = post.attachments?.data.some(att =>
      att.type === 'video_inline' || att.media?.source
    );

    if (hasVideoAttachment) return 'video';

    return 'post';
  }

  /**
   * Données de démonstration pour le développement
   */
  private getDemoData(limit: number): FacebookGraphPost[] {
    const demoData: FacebookGraphPost[] = [
      {
        id: '1',
        message: `Chers compatriotes de la diaspora gabonaise en Afrique ! 🇬🇦

Aujourd'hui, je partage avec vous ma vision pour notre représentation au Parlement. Ensemble, nous pouvons faire la différence pour nos communautés établies sur le continent africain.

Vous avez prouvé votre efficacité et votre sens des résultats. Cette élection représente un investissement stratégique majeur. En me choisissant, vous optez pour une représentation qui comprend les enjeux économiques, qui facilite vos projets d'investissement et qui défend concrètement vos intérêts business au Gabon.

Agissons maintenant pour construire un avenir solide pour notre diaspora ! 💪

#DiasporaGabon #ParlemantGabon #Afrique #Ensemble`,
        created_time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        permalink_url: `https://www.facebook.com/profile.php?id=${this.pageId}`,
        full_picture: '/images/hero/5.jpg',
        type: 'photo',
        attachments: {
          data: [{
            type: 'photo',
            media: {
              image: {
                src: '/images/hero/5.jpg',
                width: 800,
                height: 600
              }
            }
          }]
        }
      },
      {
        id: '2',
        message: `Grande réunion avec la communauté gabonaise de Lagos ! 🤝

Plus de 200 compatriotes présents pour échanger sur nos priorités :
✅ Éducation de nos enfants
✅ Accès aux soins de santé
✅ Développement de l'entrepreneuriat
✅ Facilitation des investissements au Gabon

Vos voix comptent et seront entendues au Parlement. Ensemble, nous construisons un pont solide entre le Gabon et sa diaspora africaine.

Merci à tous pour votre engagement et votre confiance ! 🙏

#Lagos #Nigeria #CommunautéGabonaise #Ensemble`,
        created_time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: `https://www.facebook.com/profile.php?id=${this.pageId}`,
        full_picture: '/images/hero/3.jpg',
        type: 'video',
        attachments: {
          data: [{
            type: 'video_inline',
            media: {
              source: 'https://player.vimeo.com/video/example',
              image: {
                src: '/images/hero/3.jpg',
                width: 800,
                height: 600
              }
            }
          }]
        }
      },
      {
        id: '3',
        message: "📢 PROGRAMME DE SOCIÉTÉ 📢 Découvrez mon programme en 7 piliers pour la diaspora gabonaise en Afrique : Réformes institutionnelles, Excellence éducative, Dynamisation économique, Protection sociale universelle.",
        created_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: `https://www.facebook.com/profile.php?id=${this.pageId}`,
        full_picture: '/images/hero/1.jpg',
        type: 'photo',
        attachments: {
          data: [{
            type: 'photo',
            media: {
              image: {
                src: '/images/hero/1.jpg',
                width: 800,
                height: 600
              }
            }
          }]
        }
      },
      {
        id: '4',
        message: "🎯 OBJECTIF : Créer un pont durable entre le Gabon et sa diaspora africaine. Chaque Gabonais, où qu'il se trouve sur le continent, mérite une représentation forte et efficace.",
        created_time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: `https://www.facebook.com/profile.php?id=${this.pageId}`,
        full_picture: '/images/hero/2.jpg',
        type: 'video',
        attachments: {
          data: [{
            type: 'video_inline',
            media: {
              source: 'https://player.vimeo.com/video/example2',
              image: {
                src: '/images/hero/2.jpg',
                width: 800,
                height: 600
              }
            }
          }]
        }
      },
      {
        id: '5',
        message: "🌍 TOURNÉE AFRICAINE EN COURS ! Cette semaine, nous sommes en déplacement à Accra, Abidjan et Bamako pour rencontrer nos compatriotes.",
        created_time: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: `https://www.facebook.com/profile.php?id=${this.pageId}`,
        full_picture: '/images/hero/4.jpg',
        type: 'photo',
        attachments: {
          data: [{
            type: 'photo',
            media: {
              image: {
                src: '/images/hero/4.jpg',
                width: 800,
                height: 600
              }
            }
          }]
        }
      },
      {
        id: '6',
        message: "🇬🇦 Rencontre émouvante avec la communauté gabonaise de Kinshasa ! Des échanges riches sur l'avenir de notre représentation parlementaire.",
        created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        permalink_url: `https://www.facebook.com/profile.php?id=${this.pageId}`,
        full_picture: '/images/hero/6.jpg',
        type: 'video',
        attachments: {
          data: [{
            type: 'video_inline',
            media: {
              source: 'https://player.vimeo.com/video/example3',
              image: {
                src: '/images/hero/6.jpg',
                width: 800,
                height: 600
              }
            }
          }]
        }
      }
    ];

    return demoData.slice(0, limit);
  }

  /**
   * Valide le token d'accès Facebook
   */
  async validateAccessToken(): Promise<boolean> {
    try {
      if (!this.accessToken) return false;

      const url = `${this.baseUrl}/me?access_token=${this.accessToken}`;
      const response = await fetch(url);

      return response.ok;
    } catch {
      return false;
    }
  }
}

// Export de l'instance singleton
export const facebookApi = new FacebookApiService();
export default facebookApi;