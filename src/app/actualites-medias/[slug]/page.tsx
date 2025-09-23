'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  slug: string;
  author: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Grande rencontre familiale des Gabonais de Dakar',
    excerpt: 'Un moment d\'émotion et de partage exceptionnel ! Plus de 200 familles gabonaises se sont rassemblées dans les jardins de l\'Institut français pour célébrer nos liens indéfectibles.',
    content: `
      <h2>Une journée mémorable pour la communauté gabonaise</h2>

      <p>Un moment d'émotion et de partage exceptionnel ! Plus de 200 familles gabonaises se sont rassemblées dans les jardins de l'Institut français de Dakar pour célébrer nos liens indéfectibles qui nous unissent par-delà les frontières.</p>

      <p>Cette rencontre, organisée dans le cadre de notre campagne pour renforcer les liens communautaires, a été marquée par une atmosphère chaleureuse et conviviale. Entre plats traditionnels, danses folkloriques et témoignages touchants, cette journée restera gravée dans nos mémoires comme un symbole de l'unité de notre diaspora.</p>

      <h3>Des moments forts de partage</h3>

      <p>La journée a débuté par l'accueil des familles dans les magnifiques jardins de l'Institut français. Dès les premières heures, l'ambiance était au rendez-vous avec les rires des enfants et les retrouvailles émouvantes des adultes.</p>

      <p>Les stands de cuisine traditionnelle ont été pris d'assaut, offrant aux participants l'occasion de redécouvrir les saveurs de notre patrimoine culinaire. Nyembwe, poisson salé, manioc... tous les incontournables de la gastronomie gabonaise étaient au rendez-vous.</p>

      <h3>Culture et tradition à l'honneur</h3>

      <p>L'après-midi a été consacrée aux spectacles culturels avec des danses traditionnelles exécutées par les jeunes de la communauté. Ces performances ont rappelé à tous l'importance de transmettre notre héritage culturel aux générations futures.</p>

      <p>Les témoignages des anciens, évoquant leur parcours migratoire et leur attachement au Gabon, ont particulièrement marqué l'assistance. Ces récits de vie ont souligné la richesse de notre diaspora et sa contribution au développement de notre pays d'origine.</p>

      <h3>Perspectives d'avenir</h3>

      <p>Cette rencontre s'inscrit dans notre vision d'une diaspora unie et solidaire, capable de peser dans les décisions qui concernent l'avenir du Gabon. C'est ensemble que nous construirons un pont solide entre l'Afrique et notre patrie.</p>
    `,
    date: '15 Mars 2025',
    category: 'Rencontre',
    imageUrl: '/images/news/senegal.jpg',
    readTime: '3 min de lecture',
    slug: 'rencontre-familiale-dakar',
    author: 'Équipe de campagne'
  },
  {
    id: 2,
    title: 'Marché solidaire : entrepreneurs gabonais d\'Afrique centrale',
    excerpt: 'L\'entrepreneuriat gabonais rayonne ! Découvrez comment nos compatriotes de Yaoundé, Bangui et N\'Djamena créent des ponts commerciaux innovants.',
    content: `
      <h2>L'entrepreneuriat gabonais en plein essor</h2>

      <p>L'entrepreneuriat gabonais rayonne à travers toute l'Afrique centrale ! Une étude récente révèle comment nos compatriotes établis à Yaoundé, Bangui et N'Djamena créent des ponts commerciaux innovants qui transforment l'économie régionale.</p>

      <p>De l'artisanat traditionnel aux nouvelles technologies, leurs initiatives démontrent la capacité de notre diaspora à innover tout en préservant notre identité culturelle. Ces entrepreneurs sont de véritables ambassadeurs du savoir-faire gabonais.</p>

      <h3>Des success stories inspirantes</h3>

      <p>À Yaoundé, Marie-Claire Nzé a développé une entreprise de transformation du manioc qui emploie aujourd'hui plus de 50 personnes. Son secret ? L'adaptation des techniques traditionnelles gabonaises aux besoins du marché camerounais.</p>

      <p>À Bangui, Jean-Baptiste Mba a créé un réseau de distribution de produits artisanaux qui connecte les artisans gabonais aux consommateurs centrafricains. Son initiative favorise les échanges culturels tout en générant des revenus substantiels.</p>

      <h3>Innovation et tradition</h3>

      <p>Ces entrepreneurs ont su allier innovation et respect des traditions. Ils utilisent les nouvelles technologies pour optimiser leurs processus tout en préservant l'authenticité de leurs produits.</p>

      <p>Leurs réussites démontrent que notre diaspora peut être un moteur de développement économique pour toute la région, créant des opportunités d'emploi et renforçant les liens entre nos pays voisins.</p>
    `,
    date: '12 Mars 2025',
    category: 'Économie',
    imageUrl: '/images/news/economie.jpg',
    readTime: '5 min de lecture',
    slug: 'marche-solidaire-entrepreneurs',
    author: 'Équipe de campagne'
  }
];

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = articles.find(a => a.slug === slug);
  const relatedArticles = articles.filter(a => a.slug !== slug && a.category === article?.category).slice(0, 3);

  if (!article) {
    return (
      <PageLayout>
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>Article non trouvé</h1>
          <p>L'article que vous recherchez n'existe pas.</p>
          <a href="/actualites-medias" style={{ color: '#0A7A3B' }}>← Retour aux actualités</a>
        </div>
      </PageLayout>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Rencontre': return 'bg-blue-100 text-blue-800';
      case 'Économie': return 'bg-green-100 text-green-800';
      case 'Culture': return 'bg-purple-100 text-purple-800';
      case 'Éducation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const shareArticle = (platform: string) => {
    const url = window.location.href;
    const title = article.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
        break;
    }
  };

  return (
    <PageLayout>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap');

        .article-page {
          font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #FAFAFA;
          color: #2C3E50;
          line-height: 1.7;
        }

        .article-header {
          background: white;
          border-bottom: 3px solid #0A7A3B;
          padding: 40px 0;
          margin-bottom: 40px;
        }

        .breadcrumb {
          font-size: 0.9em;
          color: #6B7280;
          margin-bottom: 20px;
        }

        .breadcrumb a {
          color: #0A7A3B;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          text-decoration: underline;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .article-category {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.85em;
          font-weight: 600;
        }

        .article-title {
          font-size: 2.5em;
          font-weight: 700;
          color: #1A1A1A;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .article-subtitle {
          font-size: 1.2em;
          color: #5A6C7D;
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .article-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #0A7A3B 0%, #065f2e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4em;
          border-radius: 8px;
          margin-bottom: 40px;
        }

        .article-content {
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 40px;
        }

        .article-content h2 {
          font-size: 1.6em;
          font-weight: 600;
          color: #1A1A1A;
          margin: 30px 0 15px 0;
          border-bottom: 2px solid #E5E7EB;
          padding-bottom: 10px;
        }

        .article-content h3 {
          font-size: 1.3em;
          font-weight: 600;
          color: #1A1A1A;
          margin: 25px 0 10px 0;
        }

        .article-content p {
          margin-bottom: 20px;
          text-align: justify;
          color: #374151;
        }

        .share-buttons {
          display: flex;
          gap: 10px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .share-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          font-size: 0.9em;
          font-weight: 600;
          transition: opacity 0.2s;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .share-btn:hover {
          opacity: 0.8;
        }

        .share-btn.facebook { background: #1877F2; }
        .share-btn.twitter { background: #1DA1F2; }
        .share-btn.linkedin { background: #0077B5; }
        .share-btn.whatsapp { background: #25D366; }

        .related-articles {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .related-card {
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .related-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .related-image {
          width: 100%;
          height: 120px;
          background: linear-gradient(135deg, #0A7A3B 0%, #065f2e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5em;
        }

        .related-content {
          padding: 15px;
        }

        .related-title {
          font-size: 0.95em;
          font-weight: 600;
          color: #1A1A1A;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .related-meta {
          font-size: 0.8em;
          color: #6B7280;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          margin: 40px 0;
          gap: 20px;
        }

        .nav-btn {
          background: #0A7A3B;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
          transition: background 0.2s;
          text-decoration: none;
          flex: 1;
          text-align: center;
          max-width: 200px;
        }

        .nav-btn:hover {
          background: #085A2C;
        }

        .nav-btn:disabled {
          background: #D1D5DB;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .article-title {
            font-size: 2em;
          }

          .article-content {
            padding: 20px;
          }

          .article-image {
            height: 250px;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .navigation-buttons {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="article-page">
        {/* Header */}
        <div className="article-header">
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
            <div className="breadcrumb">
              <a href="/">Accueil</a> → <a href="/actualites-medias">Actualités & Médias</a> → {article.title}
            </div>

            <div className="article-meta">
              <span className={`article-category ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span style={{ color: '#6B7280', fontSize: '0.9em' }}>{article.date}</span>
              <span style={{ color: '#6B7280', fontSize: '0.9em' }}>{article.readTime}</span>
              <span style={{ color: '#6B7280', fontSize: '0.9em' }}>Par {article.author}</span>
            </div>

            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.excerpt}</p>
          </div>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

          {/* Image à la une */}
          <div className="article-image">
            📰
          </div>

          {/* Contenu de l'article */}
          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Boutons de partage */}
            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '30px', marginTop: '40px' }}>
              <h4 style={{ marginBottom: '15px', color: '#1A1A1A' }}>Partager cet article</h4>
              <div className="share-buttons">
                <button className="share-btn facebook" onClick={() => shareArticle('facebook')}>
                  📘 Facebook
                </button>
                <button className="share-btn twitter" onClick={() => shareArticle('twitter')}>
                  🐦 Twitter
                </button>
                <button className="share-btn linkedin" onClick={() => shareArticle('linkedin')}>
                  💼 LinkedIn
                </button>
                <button className="share-btn whatsapp" onClick={() => shareArticle('whatsapp')}>
                  📱 WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Navigation précédent/suivant */}
          <div className="navigation-buttons">
            <a href="/actualites-medias" className="nav-btn">
              ← Retour aux actualités
            </a>
            <a href="/actualites-medias" className="nav-btn">
              Voir plus d'articles →
            </a>
          </div>

          {/* Articles liés */}
          {relatedArticles.length > 0 && (
            <div className="related-articles">
              <h3 style={{ fontSize: '1.5em', fontWeight: '600', color: '#1A1A1A', marginBottom: '10px' }}>
                Articles liés
              </h3>
              <p style={{ color: '#5A6C7D', marginBottom: '20px' }}>
                Découvrez d'autres articles de la catégorie "{article.category}"
              </p>

              <div className="related-grid">
                {relatedArticles.map((relatedArticle) => (
                  <a
                    key={relatedArticle.id}
                    href={`/actualites-medias/${relatedArticle.slug}`}
                    className="related-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="related-image">📄</div>
                    <div className="related-content">
                      <h4 className="related-title">{relatedArticle.title}</h4>
                      <div className="related-meta">
                        {relatedArticle.date} • {relatedArticle.readTime}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </PageLayout>
  );
}