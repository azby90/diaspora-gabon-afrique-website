'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function ContactSimplquerPage() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Votre message a été transmis avec succès. Nous vous répondrons dans les meilleurs délais.');
    setFormData({
      prenom: '',
      nom: '',
      email: '',
      sujet: '',
      message: ''
    });
  };

  const handleVolunteer = () => {
    alert('Redirection vers le formulaire d\'inscription des bénévoles...');
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    const shareText = "Soutenez le changement au Gabon. Rejoignez le mouvement citoyen.";

    if (navigator.share) {
      navigator.share({
        title: 'Diaspora Gabon Afrique',
        text: shareText,
        url: shareUrl
      }).catch(err => console.log('Erreur de partage:', err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Le lien a été copié. Vous pouvez le partager sur vos réseaux.');
      });
    }
  };

  const handleContribute = () => {
    alert('Redirection vers la plateforme de contribution sécurisée...');
  };

  return (
    <PageLayout>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap');

        .institutional-page {
          font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #FAFAFA;
          color: #2C3E50;
          line-height: 1.6;
        }

        .page-header {
          background: white;
          border-bottom: 3px solid #0A7A3B;
          padding: 40px 0;
          margin-bottom: 40px;
        }

        .page-header h1 {
          font-size: 2.2em;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
          text-align: center;
        }

        .page-header p {
          font-size: 1.05em;
          color: #5A6C7D;
          font-weight: 400;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .section {
          background: white;
          padding: 50px 20px;
          border-bottom: 1px solid #E5E7EB;
        }

        .section:last-child {
          border-bottom: none;
        }

        .section-title {
          font-size: 1.6em;
          font-weight: 600;
          color: #1A1A1A;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid #E5E7EB;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .contact-item:hover {
          background: #F0F2F5;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-info {
          flex: 1;
        }

        .contact-label {
          font-size: 0.85em;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 3px;
        }

        .contact-value {
          font-size: 1em;
          color: #1A1A1A;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-value:hover {
          color: #0A7A3B;
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: 20px;
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid #E5E7EB;
          justify-content: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 2px solid #E5E7EB;
          border-radius: 4px;
          transition: all 0.2s;
          text-decoration: none;
        }

        .social-link:hover {
          border-color: #0A7A3B;
          transform: translateY(-2px);
        }

        .form-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .form-row {
          margin-bottom: 25px;
        }

        .form-two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .form-two-columns {
            grid-template-columns: 1fr;
          }
        }

        .form-label {
          display: block;
          font-size: 0.95em;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .required {
          color: #DC2626;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #D1D5DB;
          border-radius: 4px;
          font-size: 1em;
          font-family: 'Source Sans 3', sans-serif;
          background: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #0A7A3B;
          box-shadow: 0 0 0 3px rgba(10, 122, 59, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-button {
          background: #0A7A3B;
          color: white;
          padding: 14px 32px;
          border: none;
          border-radius: 4px;
          font-size: 1em;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: 'Source Sans 3', sans-serif;
        }

        .form-button:hover {
          background: #085A2C;
        }

        .form-button:active {
          transform: translateY(1px);
        }

        .involvement-section {
          background: #F5F5F5;
          padding: 60px 20px;
          margin-top: 40px;
        }

        .involvement-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .involvement-intro h2 {
          font-size: 1.8em;
          font-weight: 600;
          color: #1A1A1A;
          margin-bottom: 15px;
        }

        .involvement-intro p {
          font-size: 1.05em;
          color: #5A6C7D;
        }

        .involvement-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .involvement-card {
          background: white;
          border: 1px solid #D1D5DB;
          border-radius: 4px;
          padding: 35px 30px;
          text-align: center;
          transition: box-shadow 0.2s;
        }

        .involvement-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .involvement-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          background: #F3F4F6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .involvement-card h3 {
          font-size: 1.3em;
          font-weight: 600;
          color: #1A1A1A;
          margin-bottom: 15px;
        }

        .involvement-card p {
          color: #5A6C7D;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95em;
        }

        .involvement-button {
          background: #004080;
          color: white;
          padding: 12px 28px;
          border: none;
          border-radius: 4px;
          font-size: 0.95em;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: 'Source Sans 3', sans-serif;
        }

        .involvement-button:hover {
          background: #0A7A3B;
        }
      `}</style>

      <div className="institutional-page">
        {/* Header */}
        <div className="page-header">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h1>Contact & S'impliquer</h1>
            <p>Vous souhaitez entrer en contact avec l'équipe de campagne ou participer activement à la mobilisation ? Retrouvez ci-dessous toutes les informations utiles.</p>
          </div>
        </div>

        {/* Section Contact */}
        <div className="section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Bloc gauche : Coordonnées */}
              <div>
                <h2 style={{ fontSize: '1.4em', fontWeight: '600', color: '#1A1A1A', marginBottom: '30px', textAlign: 'center' }}>
                  Contactez-nous
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '30px', color: '#5A6C7D' }}>
                  Notre équipe est à votre disposition pour répondre à toutes vos questions.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Adresse */}
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" fill="#0A7A3B" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="contact-info">
                      <div className="contact-label">Adresse officielle</div>
                      <div className="contact-value">Libreville, République Gabonaise</div>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" fill="#0A7A3B" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="contact-info">
                      <div className="contact-label">Téléphone</div>
                      <a href="tel:+24101234567" className="contact-value">+241 01 23 45 67</a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" fill="#25D366" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="contact-info">
                      <div className="contact-label">WhatsApp</div>
                      <a href="https://wa.me/24101234567" target="_blank" rel="noopener noreferrer" className="contact-value">+241 01 23 45 67</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" fill="#0A7A3B" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div className="contact-info">
                      <div className="contact-label">Email</div>
                      <a href="mailto:contact@diaspora-gabon.org" className="contact-value">contact@diaspora-gabon.org</a>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" fill="#0A7A3B" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                      </svg>
                    </div>
                    <div className="contact-info">
                      <div className="contact-label">Horaires</div>
                      <div className="contact-value">Lun-Ven: 8h-18h</div>
                    </div>
                  </div>

                </div>

                {/* Réseaux sociaux */}
                <div className="social-links">
                  <a href="https://facebook.com/AngelinaNongouMavikana" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0077B5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" title="X (Twitter)">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1DA1F2">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/24101234567" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bloc droit : Formulaire */}
              <div>
                <h2 style={{ fontSize: '1.4em', fontWeight: '600', color: '#1A1A1A', marginBottom: '30px', textAlign: 'center' }}>
                  Envoyer un message
                </h2>

                <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <form onSubmit={handleSubmit}>

                    {/* Nom + Prénom */}
                    <div className="form-row">
                      <div className="form-two-columns">
                        <div>
                          <label htmlFor="prenom" className="form-label">
                            Prénom <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="nom" className="form-label">
                            Nom <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-row">
                      <label htmlFor="email" className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>

                    {/* Sujet */}
                    <div className="form-row">
                      <label htmlFor="sujet" className="form-label">
                        Sujet <span className="required">*</span>
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                        className="form-select"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="contact">Contact général</option>
                        <option value="press">Presse / Média</option>
                        <option value="volunteer">Bénévolat</option>
                        <option value="partnership">Partenariat</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-row">
                      <label htmlFor="message" className="form-label">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="form-textarea"
                      />
                    </div>

                    {/* Bouton Envoyer */}
                    <div className="form-row" style={{ textAlign: 'center' }}>
                      <button type="submit" className="form-button">
                        Envoyer
                      </button>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section S'impliquer */}
        <div className="involvement-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="involvement-intro">
              <h2>S'impliquer dans la campagne</h2>
              <p>Votre engagement fait la différence. Découvrez comment vous pouvez contribuer activement au changement.</p>
            </div>

            <div className="involvement-cards">
              <div className="involvement-card">
                <div className="involvement-icon">
                  <svg width="28" height="28" fill="#0A7A3B" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3>Devenir bénévole</h3>
                <p>Rejoignez notre équipe de volontaires et participez activement aux actions de terrain. Votre temps et vos compétences sont précieux.</p>
                <button className="involvement-button" onClick={handleVolunteer}>Je m'inscris</button>
              </div>

              <div className="involvement-card">
                <div className="involvement-icon">
                  <svg width="28" height="28" fill="#0A7A3B" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                </div>
                <h3>Relayer la campagne</h3>
                <p>Devenez un ambassadeur du changement. Partagez nos messages et mobilisez votre réseau pour amplifier notre mouvement.</p>
                <button className="involvement-button" onClick={handleShare}>Partager</button>
              </div>

              <div className="involvement-card">
                <div className="involvement-icon">
                  <svg width="28" height="28" fill="#0A7A3B" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <h3>Soutenir la candidate</h3>
                <p>Chaque contribution compte. Aidez-nous à financer cette campagne citoyenne pour porter notre message dans tout le pays.</p>
                <button className="involvement-button" onClick={handleContribute}>Contribuer</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: '#2C3E50', color: 'white', padding: '30px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <p style={{ fontSize: '0.9em', opacity: '0.9' }}>
              &copy; 2025 Diaspora Gabon Afrique - République Gabonaise. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}