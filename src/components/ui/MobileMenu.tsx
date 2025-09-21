'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Ici vous pouvez ajouter la logique de recherche
      console.log('Recherche:', searchQuery);
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 lg:hidden ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-2xl z-50 lg:hidden transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'min(85vw, 340px)' }}
      >
        {/* Header avec bouton fermer */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🇬🇦</span>
            <span className="font-bold text-primary text-sm">Menu</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer le menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Barre de recherche */}
        <div className="p-4 border-b border-gray-100">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type and hit enter..."
              className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Rechercher"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Navigation */}
        <nav className="py-2">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block px-6 py-4 text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-green-50'
                      : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                </Link>
                {index < navigationItems.length - 1 && (
                  <div className="mx-6 border-b border-gray-100"></div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bouton CTA */}
        <div className="p-6 border-t border-gray-100 mt-4">
          <button
            onClick={() => {
              window.location.href = '/contact-simpliquer';
              onClose();
            }}
            className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Rejoindre la Campagne
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;