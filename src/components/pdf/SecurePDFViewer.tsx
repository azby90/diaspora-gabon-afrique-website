'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SecurePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

const SecurePDFViewer: React.FC<SecurePDFViewerProps> = ({
  isOpen,
  onClose,
  pdfUrl = '/doc/PROJET.pdf'
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    // Protection contre les raccourcis clavier
    const handleKeyDown = (e: KeyboardEvent) => {
      // Empêche Ctrl+S (sauvegarder), Ctrl+P (imprimer), F12 (DevTools)
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'p')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
        e.stopPropagation();
        alert('⚠️ Cette action n\'est pas autorisée sur ce document protégé.');
        return false;
      }
    };

    // Protection contre le menu contextuel
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Protection contre la sélection de texte
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // URL sécurisée avec PDF.js viewer
  const secureUrl = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;

  return (
    <div className="secure-pdf-overlay">
      <div className="secure-pdf-container">
        {/* En-tête avec contrôles */}
        <div className="pdf-header">
          <div className="pdf-title">
            <h3>📋 Programme de Société - Angelina Nongou Mavikana</h3>
            <span className="protection-badge">🔒 Document protégé</span>
          </div>
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Zone de visualisation du PDF */}
        <div className="pdf-content">
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner">📄</div>
              <p>Chargement du document sécurisé...</p>
            </div>
          )}

          <iframe
            ref={iframeRef}
            src={secureUrl}
            className="pdf-iframe"
            title="Document sécurisé"
            onLoad={() => setIsLoading(false)}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              userSelect: 'none',
              pointerEvents: 'auto'
            }}
          />
        </div>

        {/* Message de protection */}
        <div className="protection-notice">
          ⚠️ Document protégé - Visualisation uniquement - Téléchargement et impression non autorisés
        </div>
      </div>

      {/* Styles CSS intégrés pour la sécurité */}
      <style jsx>{`
        .secure-pdf-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .secure-pdf-container {
          background: white;
          border-radius: 12px;
          width: 100%;
          height: 100%;
          max-width: 1200px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .pdf-header {
          background: linear-gradient(135deg, #0A7A3B, #28a745);
          color: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }

        .pdf-title h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .protection-badge {
          display: inline-block;
          background: rgba(242, 201, 76, 0.3);
          color: #F2C94C;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          margin-top: 5px;
          border: 1px solid #F2C94C;
        }

        .close-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .pdf-content {
          flex: 1;
          position: relative;
          background: #f5f5f5;
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .loading-spinner {
          font-size: 3rem;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: white;

          /* Protections CSS */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          -webkit-user-drag: none;
          -moz-user-drag: none;
          user-drag: none;

          -webkit-touch-callout: none;
        }

        .protection-notice {
          background: #fef3cd;
          color: #856404;
          padding: 12px 20px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 500;
          border-top: 1px solid #ffd60a;
          user-select: none;
        }

        /* Protection globale contre la sélection */
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;

          -webkit-user-drag: none !important;
          -moz-user-drag: none !important;
          user-drag: none !important;

          -webkit-touch-callout: none !important;
        }

        /* Empêche l'impression */
        @media print {
          * {
            display: none !important;
          }
          body::before {
            content: "🚫 Impression non autorisée - Document protégé";
            display: block !important;
            font-size: 24px;
            text-align: center;
            margin-top: 50px;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .secure-pdf-overlay {
            padding: 10px;
          }

          .secure-pdf-container {
            max-height: 95vh;
          }

          .pdf-header {
            padding: 15px;
          }

          .pdf-title h3 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SecurePDFViewer;