'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SecurePDFViewer from '@/components/pdf/SecurePDFViewer';

const ProgrammePage: React.FC = () => {
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);

  const piliers = [
    {
      num: "I",
      title: "Sur les réformes institutionnelles et l'architecture juridique",
      description: "La représentation parlementaire de la diaspora ne peut produire ses effets transformateurs sans une révision profonde du cadre juridique et institutionnel régissant les relations entre l'État gabonais et ses ressortissants à l'étranger. Ce pilier constitue le socle législatif indispensable à toutes les autres réformes.",
      propositions: [
        "Proposition de loi constitutionnelle portant statut du député de la diaspora",
        "Proposition de loi portant révision du Code de la nationalité gabonaise",
        "Proposition de loi portant création du Consulat général du Gabon au Ghana"
      ],
      couleur: "vert",
      type: "propositions-legislatives"
    },
    {
      num: "II",
      title: "Sur l'excellence éducative et l'insertion professionnelle",
      description: "L'éducation constitue le fondement de toute stratégie de développement national et le principal facteur d'intégration de la diaspora dans la dynamique nationale. Ce pilier vise à transformer la diversité des parcours de formation en atout collectif et à garantir que chaque investissement éducatif familial se traduise par une valorisation professionnelle optimale.",
      propositions: [
        "Création de la Plateforme Nationale d'Accréditation des Établissements Étrangers",
        "Révolution du système d'équivalences académiques",
        "Démocratisation de l'accès aux bourses d'études",
        "Institution du Comité National d'Orientation et d'Insertion"
      ],
      couleur: "jaune",
      type: "axes-prioritaires"
    },
    {
      num: "III",
      title: "Sur la Dynamisation Économique et l'Entrepreneuriat Diasporique",
      description: "La diaspora gabonaise représente un gisement économique considérable largement sous-exploité. Nos compatriotes ont démontré leur capacité d'innovation et de création de valeur. Cette approche vise à créer un écosystème économique intégré capable de transformer cette expertise en moteur de croissance pour l'économie gabonaise.",
      propositions: [
        "Création du Guichet Unique de l'Entrepreneur Diasporique (Facilitation massive de la création d'entreprises diasporiques)",
        "Institution du Fonds d'Investissement Diasporique (Autofinancement progressif et viabilité économique)",
        "Révolution de l'accès aux marchés publics (Injection significative de capitaux dans l'économie nationale)",
        "Programme de Reconnaissance de l'Excellence Diasporique (Valorisation du soft power gabonais à l'international)"
      ],
      couleur: "vert",
      type: "points-cles"
    },
    {
      num: "IV",
      title: "Protection Sociale Universelle et Solidarité Communautaire",
      description: "La protection sociale constitue un droit fondamental de tout citoyen gabonais, indépendamment de son lieu de résidence. L'État gabonais doit étendre sa solidarité nationale au-delà des frontières géographiques et garantir à tous ses ressortissants un filet de sécurité sociale adapté aux défis de l'expatriation.",
      propositions: [
        "Institution de la Mutuelle Nationale de Santé Diaspora",
        "Renforcement du Fonds de Solidarité Diasporique",
        "Plateformes Numériques d'Entraide Diasporique"
      ],
      couleur: "jaune",
      type: "points-cles"
    },
    {
      num: "V",
      title: "Rayonnement culturel et excellence artistique",
      description: "La culture constitue l'âme d'une nation et le vecteur privilégié de son rayonnement international. Nos artistes, créateurs, intellectuels et sportifs établis à l'étranger sont les ambassadeurs naturels de l'excellence gabonaise et constituent un soft power considérable.",
      propositions: [
        "Tournée Culturelle Panafricaine Annuelle",
        "Création des Instituts Culturels Gabonais",
        "Programme de Soutien aux Talents Diasporiques"
      ],
      couleur: "vert",
      type: "actions-prevues"
    },
    {
      num: "VI",
      title: "Mobilité, facilité et connectivité renforcée",
      description: "La mobilité constitue un droit fondamental des citoyens gabonais et un facteur déterminant du maintien des liens avec la mère patrie. Cette approche vise à créer les conditions d'une circulation fluide et abordable entre le Gabon et les pays de résidence de nos communautés.",
      propositions: [
        "Partenariat Stratégique avec Fly Gabon",
        "Visa Électronique Diasporique Révolutionnaire",
        "Plateforme Numérique Intégrée de Services Diasporiques"
      ],
      couleur: "jaune",
      type: "actions-prevues"
    },
    {
      num: "VII",
      title: "Inclusion communautaire et cohésion sociale",
      description: "La diaspora se caractérise par sa diversité sociale, professionnelle, générationnelle et spirituelle. Cette richesse constitue une force, à condition que les politiques publiques créent les conditions d'une inclusion effective et d'une cohésion sociale durable autour des valeurs nationales partagées.",
      propositions: [
        "Institution du Conseil Consultatif Permanent de la Diaspora",
        "Cadre de Dialogue Interreligieux Structuré",
        "Programme d'Inclusion des Personnes à Mobilité Réduite",
        "Programme d'Inclusion des Compatriotes en Milieu Carcéral"
      ],
      couleur: "vert",
      type: "actions-prevues"
    }
  ];

  return (
    <PageLayout>
      <div style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '60px'
      }}>
        {/* En-tête */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '3rem',
            fontWeight: '700',
            color: '#0A7A3B',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            animation: 'fadeInUp 1s ease-out'
          }}>
            PROGRAMME DE SOCIÉTÉ
          </h1>
          <div style={{
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, #F2C94C, #0A7A3B)',
            margin: '0 auto 30px auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.3rem',
            color: '#666',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            UN DIASPORA AFRIQUE 2025 : CONSTRUIRE ENSEMBLE L'AVENIR DU GABON
          </p>
        </div>

        {/* Introduction */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 80px auto',
          padding: '40px',
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#0A7A3B',
            marginBottom: '25px',
            textAlign: 'center'
          }}>
            Notre Vision
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            La diaspora gabonaise en Afrique représente une force considérable pour le développement de notre pays.
            Riche de son expertise, de ses réseaux et de sa connaissance du continent africain, elle constitue un atout
            majeur pour l'avenir du Gabon dans un monde globalisé.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'justify'
          }}>
            Ce programme s'articule autour de 7 piliers stratégiques qui visent à transformer la relation entre le Gabon
            et sa diaspora africaine, en créant des ponts durables et en valorisant pleinement le potentiel de nos compatriotes
            établis sur le continent.
          </p>
        </div>

        {/* Les 8 piliers */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {piliers.map((pilier) => (
            <div key={pilier.num} style={{
              marginBottom: '40px',
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              {/* En-tête du pilier */}
              <div className="pilier-header" style={{
                background: pilier.couleur === 'vert'
                  ? 'linear-gradient(135deg, #0A7A3B, #28a745)'
                  : 'linear-gradient(135deg, #F2C94C, #ffc107)',
                color: pilier.couleur === 'vert' ? 'white' : '#333',
                padding: '30px 40px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: pilier.couleur === 'vert' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {pilier.num}
                    </div>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      margin: 0,
                      lineHeight: '1.3'
                    }}>
                      {pilier.title}
                    </h3>
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    margin: 0,
                    opacity: 0.95,
                    lineHeight: '1.6'
                  }}>
                    {pilier.description}
                  </p>
                </div>
              </div>

              {/* Contenu du pilier */}
              <div className="pilier-content" style={{
                padding: '40px',
                background: '#fafafa'
              }}>
                <h4 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  {pilier.type === 'propositions-legislatives' ? 'Propositions législatives prioritaires' :
                   pilier.type === 'axes-prioritaires' ? 'Axes prioritaires' :
                   pilier.type === 'points-cles' ? 'Points clés' :
                   pilier.type === 'actions-prevues' ? 'Actions prévues' : 'Actions et Propositions'}
                </h4>
                <div style={{
                  display: 'grid',
                  gap: '15px'
                }}>
                  {pilier.propositions.map((proposition, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '15px',
                      padding: '15px',
                      background: 'white',
                      borderRadius: '8px',
                      border: `2px solid ${pilier.couleur === 'vert' ? '#0A7A3B' : '#F2C94C'}`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <div style={{
                        width: '25px',
                        height: '25px',
                        background: pilier.couleur === 'vert'
                          ? 'linear-gradient(135deg, #0A7A3B, #28a745)'
                          : 'linear-gradient(135deg, #F2C94C, #ffc107)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <span style={{
                          color: pilier.couleur === 'vert' ? 'white' : '#333',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          {pilier.type === 'propositions-legislatives' ? '⚖️' :
                           pilier.type === 'axes-prioritaires' ? '🎓' :
                           pilier.type === 'points-cles' && pilier.num === 'III' ? '💼' :
                           pilier.type === 'points-cles' && pilier.num === 'IV' ? '🏥' :
                           pilier.type === 'actions-prevues' && pilier.num === 'V' ? '🎨' :
                           pilier.type === 'actions-prevues' && pilier.num === 'VI' ? '✈️' :
                           pilier.type === 'actions-prevues' && pilier.num === 'VII' ? '🤝' : '✓'}
                        </span>
                      </div>
                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        color: '#555',
                        margin: 0,
                        lineHeight: '1.6',
                        textAlign: 'justify'
                      }}>
                        {proposition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Engagement Solennel */}
        <div style={{
          maxWidth: '1000px',
          margin: '80px auto 0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
            border: '1px solid #e9ecef'
          }}>
            {/* En-tête de l'engagement */}
            <div style={{
              background: 'linear-gradient(135deg, #0A7A3B, #28a745)',
              color: 'white',
              padding: '40px',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 0l100 100M100 0L0 100\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'0.5\'/%3E%3C/svg%3E")',
                opacity: 0.3
              }}></div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  ENGAGEMENT SOLENNEL ET PACTE DÉMOCRATIQUE
                </h2>
                <div style={{
                  width: '100px',
                  height: '3px',
                  background: '#F2C94C',
                  margin: '0 auto',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>

            {/* Contenu de l'engagement */}
            <div style={{
              padding: '50px 40px',
              background: '#fafafa'
            }}>
              <div style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.1rem',
                  color: '#555',
                  lineHeight: '1.8',
                  textAlign: 'justify',
                  marginBottom: '30px',
                  fontStyle: 'italic'
                }}>
                  En tant que candidate de la diaspora gabonaise en Afrique, je prends devant vous, devant nos familles
                  et devant la nation gabonaise, l'engagement solennel de porter fidèlement votre voix et de défendre
                  sans relâche vos intérêts et vos aspirations.
                </p>

                <div style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '10px',
                  border: '3px solid #0A7A3B',
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#0A7A3B',
                    marginBottom: '25px',
                    textAlign: 'center'
                  }}>
                    SERMENT RÉPUBLICAIN
                  </h3>

                  <div style={{ marginBottom: '25px' }}>
                    <h4 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#0A7A3B',
                      marginBottom: '15px'
                    }}>
                      Je m'engage solennellement à :
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {[
                        "Être votre porte-voix fidèle et déterminée au sein des institutions nationales",
                        "Défendre avec courage et persévérance les intérêts de la diaspora gabonaise en Afrique",
                        "Œuvrer sans relâche pour la mise en œuvre effective de ce programme de société",
                        "Maintenir une communication transparente et régulière avec vous",
                        "Rendre compte de mon action et de mes décisions devant la communauté"
                      ].map((engagement, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '12px',
                          padding: '8px 0'
                        }}>
                          <span style={{
                            color: '#0A7A3B',
                            fontSize: '1.2rem',
                            marginTop: '2px'
                          }}>•</span>
                          <span style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1rem',
                            color: '#555',
                            lineHeight: '1.6'
                          }}>
                            {engagement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    borderTop: '2px solid #e9ecef',
                    paddingTop: '25px'
                  }}>
                    <h4 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#0A7A3B',
                      marginBottom: '15px'
                    }}>
                      Je m'engage également à respecter :
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {[
                        "Les principes démocratiques et l'État de droit",
                        "La diversité de notre diaspora dans toutes ses composantes",
                        "L'éthique et la transparence dans l'exercice de mon mandat",
                        "Les valeurs de solidarité et d'entraide qui nous unissent",
                        "L'unité nationale et la cohésion sociale"
                      ].map((principe, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '12px',
                          padding: '8px 0'
                        }}>
                          <span style={{
                            color: '#F2C94C',
                            fontSize: '1.2rem',
                            marginTop: '2px'
                          }}>★</span>
                          <span style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1rem',
                            color: '#555',
                            lineHeight: '1.6'
                          }}>
                            {principe}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.1rem',
                  color: '#555',
                  lineHeight: '1.8',
                  textAlign: 'justify',
                  marginBottom: '30px'
                }}>
                  Ce programme n'est pas seulement une promesse électorale, c'est un contrat moral que je passe avec vous.
                  Chaque proposition, chaque action prévue sera mise en œuvre avec méthode, rigueur et détermination.
                </p>

                <div style={{
                  textAlign: 'center',
                  background: 'white',
                  padding: '30px',
                  borderRadius: '10px',
                  border: '2px solid #F2C94C'
                }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.2rem',
                    color: '#0A7A3B',
                    fontWeight: '600',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    "Ensemble, écrivons une nouvelle page de l'histoire de la diaspora gabonaise en Afrique.
                    Ensemble, construisons le Gabon de demain."
                  </p>
                  <div style={{
                    marginTop: '20px',
                    fontSize: '1rem',
                    color: '#666',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    <strong>Angelina NONGOU-MAVIKANA épouse LEYENBERGER</strong><br/>
                    Candidate de la diaspora gabonaise en Afrique
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section de conclusion avec bouton de téléchargement */}
        <div style={{
          maxWidth: '900px',
          margin: '80px auto 0 auto',
          padding: '0 20px'
        }}>
          <h2 className="conclusion-title" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#0A7A3B',
            marginBottom: '25px',
            textAlign: 'center'
          }}>
            Le 27 septembre 2025, votez pour transformer la représentation de la diaspora
          </h2>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '15px',
            border: '3px solid #0A7A3B',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.2rem',
              color: '#0A7A3B',
              margin: 0,
              lineHeight: '1.8',
              fontWeight: '500',
              fontStyle: 'italic'
            }}>
Ce programme n'est pas seulement une promesse électorale. C'est un contrat moral et politique que je propose à la diaspora gabonaise, fondé sur des engagements clairs, mesurables et soumis à votre contrôle citoyen.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setIsPDFViewerOpen(true)}
              className="download-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #1e40af, #0056b3)',
                color: 'white',
                padding: '18px 35px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(30, 64, 175, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.3)';
              }}
            >
              <span style={{
                fontSize: '1.2rem'
              }}>👁</span>
              Voir le programme au complet
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2.2rem !important;
            }

            .pilier-header {
              padding: 20px 25px !important;
              font-size: 1.2rem !important;
            }

            .pilier-content {
              padding: 25px 20px !important;
            }

            .conclusion-title {
              font-size: 1.8rem !important;
            }

            .download-btn {
              padding: 15px 30px !important;
              font-size: 0.9rem !important;
            }
          }
        `}</style>
      </div>

      {/* Visionneuse PDF sécurisée */}
      <SecurePDFViewer
        isOpen={isPDFViewerOpen}
        onClose={() => setIsPDFViewerOpen(false)}
        pdfUrl="/doc/PROJET.pdf"
      />
    </PageLayout>
  );
};

export default ProgrammePage;