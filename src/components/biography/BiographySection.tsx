'use client';

import React, { useState } from 'react';
import { candidates, Candidate } from '@/data/candidates';
import CandidateCard from './CandidateCard';
import BiographyModal from './BiographyModal';

const BiographySection: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const handleSelectCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <>
      {/* Font Loading */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h1
              className="text-3xl font-bold text-gray-900 tracking-wide mb-4"
              style={{ fontFamily: 'Merriweather, serif', fontSize: '1.8rem' }}
            >
              Vos candidats
            </h1>
            <div className="w-16 h-0.5 bg-emerald-800 mx-auto" />
          </div>

          {/* Candidates Face-to-Face Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 max-w-5xl mx-auto">
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onSelect={() => handleSelectCandidate(candidate)}
              />
            ))}
          </div>

          {/* Section CTA - version élégante */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200 max-w-3xl mx-auto">
              <h3
                className="text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ensemble pour la Diaspora Gabon Afrique
              </h3>
              <p
                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Un binôme complémentaire, uni par une vision commune : porter la voix
                de la diaspora gabonaise en Afrique et créer des ponts durables entre
                nos compatriotes et la mère-patrie.
              </p>
              <a
                href="/programme"
                className="inline-flex items-center bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-4 px-8 rounded transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Découvrir notre programme
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedCandidate && (
          <BiographyModal
            candidate={selectedCandidate}
            onClose={handleCloseModal}
          />
        )}
      </section>
    </>
  );
};

export default BiographySection;