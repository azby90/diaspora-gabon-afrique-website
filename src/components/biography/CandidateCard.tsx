'use client';

import React from 'react';
import { Candidate } from '@/data/candidates';
import SocialMediaIcons from './SocialMediaIcons';

interface CandidateCardProps {
  candidate: Candidate;
  onSelect: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col max-w-[300px] mx-auto">
      {/* Photo */}
      <div className="relative overflow-hidden flex-shrink-0 max-w-[250px] mx-auto">
        <img
          src={candidate.image}
          alt={candidate.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        <div>
          <div
            className="text-xs font-medium text-emerald-800 mb-3 tracking-widest"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {candidate.role}
          </div>

          <h2
            className="text-2xl font-bold mb-2 text-gray-900 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {candidate.name}
            {candidate.subtitle && (
              <span className="block text-lg mt-1 text-gray-700 font-normal">
                {candidate.subtitle}
              </span>
            )}
          </h2>

          <p
            className="text-gray-600 mb-6 leading-relaxed text-sm italic"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            "{candidate.tagline}"
          </p>
        </div>

        <div>
          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className="w-full bg-white border border-emerald-800 text-emerald-800 px-6 py-3 rounded font-medium transition-all duration-300 hover:bg-emerald-800 hover:text-white text-sm tracking-wide mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Voir la biographie complète
          </button>

          {/* Social Media Icons */}
          <SocialMediaIcons socialMedia={candidate.socialMedia} />
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;