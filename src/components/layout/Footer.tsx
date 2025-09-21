'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#006400', color: 'white', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', margin: 'auto', gap: '40px' }}>

        {/* Bloc 1 : À propos */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h3 className="font-inter" style={{ marginBottom: '15px', fontSize: '18px', borderBottom: '1px solid white', paddingBottom: '5px' }}>
            À propos
          </h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ margin: '8px 0' }}>
              <a href="/mentions-legales" className="font-inter hover:underline" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                Mentions légales
              </a>
            </li>
            <li style={{ margin: '8px 0' }}>
              <a href="/faq" className="font-inter hover:underline" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                Foire aux questions
              </a>
            </li>
            <li style={{ margin: '8px 0' }}>
              <a href="/plan-du-site" className="font-inter hover:underline" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                Plan du site
              </a>
            </li>
          </ul>
        </div>

        {/* Bloc 2 : Newsletter */}
        <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
          <h3 className="font-inter" style={{ marginBottom: '15px', fontSize: '18px', borderBottom: '1px solid white', paddingBottom: '5px' }}>
            Newsletter
          </h3>
          <p className="font-inter" style={{ fontSize: '14px', marginBottom: '20px', lineHeight: '1.4' }}>
            Inscrivez-vous à notre newsletter pour rester informé
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              required
              className="font-inter"
              style={{
                width: '100%',
                maxWidth: '250px',
                padding: '10px 12px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#333'
              }}
            />
            <button
              type="submit"
              className="font-inter hover:bg-green-300 hover:text-green-800"
              style={{
                backgroundColor: 'white',
                color: '#006400',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s',
                minWidth: '120px'
              }}
            >
              S'abonner
            </button>
          </form>
        </div>
        {/* Bloc 3 : Nous suivre & Contacts */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h3 className="font-inter" style={{ marginBottom: '15px', fontSize: '18px', borderBottom: '1px solid white', paddingBottom: '5px' }}>
            Nous suivre & Contacts
          </h3>

          {/* Réseaux sociaux */}
          <div style={{ marginBottom: '25px' }}>
            <p className="font-inter" style={{ fontSize: '14px', marginBottom: '12px' }}>Suivez-nous :</p>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <a
                href="#"
                className="hover:bg-green-300"
                style={{
                  display: 'flex',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#006400',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                f
              </a>
              <a
                href="#"
                className="hover:bg-green-300"
                style={{
                  display: 'flex',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#006400',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                in
              </a>
              <a
                href="#"
                className="hover:bg-green-300"
                style={{
                  display: 'flex',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#006400',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                X
              </a>
              <a
                href="#"
                className="hover:bg-green-300"
                style={{
                  display: 'flex',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: '#006400',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                W
              </a>
            </div>
          </div>

          {/* Coordonnées directes */}
          <div>
            <p className="font-inter" style={{ fontSize: '14px', marginBottom: '8px' }}>Contactez-nous directement :</p>
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <p className="font-inter" style={{ margin: '4px 0' }}>
                📞 <a href="tel:+241xxxxxxxx" className="hover:underline" style={{ color: 'white', textDecoration: 'none' }}>+241 XX XX XX XX</a>
              </p>
              <p className="font-inter" style={{ margin: '4px 0' }}>
                ✉️ <a href="mailto:contact@diaspora-gabon-afrique.com" className="hover:underline" style={{ color: 'white', textDecoration: 'none' }}>contact@diaspora-gabon-afrique.com</a>
              </p>
              <p className="font-inter" style={{ margin: '4px 0' }}>
                📱 <a href="https://wa.me/241xxxxxxxx" className="hover:underline" style={{ color: 'white', textDecoration: 'none' }}>WhatsApp</a>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
        <p className="font-inter" style={{ fontSize: '14px', marginBottom: '5px' }}>
          © {new Date().getFullYear()} - Angelina Charlotte Nongou-Mavikana (ép. Leyenberger)
        </p>
        <p className="font-inter" style={{ fontSize: '12px', opacity: '0.8' }}>
          Candidate aux Élections Législatives Gabon 2025 - Circonscription Diaspora Afrique
        </p>
      </div>

    </footer>
  );
};

export default Footer;