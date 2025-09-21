'use client';

import React, { useEffect, useRef } from 'react';
import { Candidate } from '@/data/candidates';

interface BiographyModalProps {
  candidate: Candidate;
  onClose: () => void;
}

const BiographyModal: React.FC<BiographyModalProps> = ({ candidate, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Gestion du focus et accessibilité
  useEffect(() => {
    // Focus sur le bouton fermer à l'ouverture
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Gestion de la touche Échap
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Piéger le focus dans le modal
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTabKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden border-3 border-green-600"
      >
        {/* Header moderne */}
        <div className="bg-gray-50 border-b border-gray-200 p-8 relative">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-4 right-6 text-gray-400 text-3xl font-light hover:text-gray-600 transition-colors leading-none focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
            aria-label="Fermer la biographie"
          >
            ×
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Photo */}
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-48 h-56 object-cover border border-gray-200 mx-auto lg:mx-0 shadow-md"
            />

            {/* Texte du header */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className="text-sm font-medium text-emerald-800 mb-3 tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {candidate.role}
              </div>
              <h2
                id="modal-title"
                className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {candidate.name}
                {candidate.subtitle && (
                  <span className="block text-2xl mt-2 text-gray-700 font-normal">
                    {candidate.subtitle}
                  </span>
                )}
              </h2>
              <p
                className="text-gray-600 italic text-lg leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{candidate.tagline}"
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-300px)]">
          <div className="p-8 lg:p-12 bg-white">
            {Object.entries(candidate.biography).map(([key, section]) => (
              <div key={key} className="mb-8">
                <h3
                  className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {section.title}
                </h3>
                <p
                  className="text-gray-700 leading-relaxed text-justify"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-inter font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiographyModal;