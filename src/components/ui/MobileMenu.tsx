'use client';

import React from 'react';
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
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-2xl z-50 lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'min(80vw, 300px)' }}
      >
        {/* Header du menu */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🇬🇦</span>
            <span className="font-bold text-primary text-sm">Diaspora Gabon</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer le menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-6">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`block px-6 py-4 text-base font-medium transition-all duration-200 border-l-4 ${
                  isActive
                    ? 'text-primary bg-primary-50 border-primary'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50 border-transparent hover:border-primary'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bouton CTA */}
        <div className="p-6 border-t border-gray-100">
          <button
            onClick={() => {
              window.location.href = '/contact-simpliquer';
              onClose();
            }}
            className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Rejoindre la Campagne
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;