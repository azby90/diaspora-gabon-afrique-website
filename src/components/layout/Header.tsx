'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import MobileMenu from '@/components/ui/MobileMenu';
import { navigationItems } from '@/types/navigation';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className="fixed w-full z-50 transition-all duration-300 bg-white"
        style={{
          top: '44px',
          height: '80px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: 'none',
          margin: '0',
          padding: '0'
        }}
      >
        <div className="flex justify-between items-center h-full w-full">
          {/* Logo */}
          <div
            className="flex items-center"
            style={{
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingLeft: '20px'
            }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-3xl">🇬🇦</span>
              <div>
                <h1
                  className="font-inter font-bold text-primary"
                  style={{
                    fontSize: '20px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Diaspora Gabon Afrique
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center"
            style={{
              paddingRight: '20px',
              marginRight: '0px',
              gap: '16px'
            }}
          >
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-inter transition-colors duration-300 relative"
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: isActive ? '#0A7A3B' : '#0E0E0E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '4px 2px',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#0A7A3B';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#0E0E0E';
                  }}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary"
                      style={{
                        width: '18px',
                        height: '2px',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex font-inter"
              style={{
                fontSize: '13px',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                paddingLeft: '20px',
                paddingRight: '20px'
              }}
              onClick={() => window.location.href = '/contact-simpliquer'}
            >
              Rejoindre
            </Button>

            {/* Modern animated hamburger button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-colors relative"
              style={{
                marginRight: '20px',
                width: '44px',
                height: '44px'
              }}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div className="relative w-6 h-6 mx-auto">
                {/* Ligne du haut */}
                <span
                  className="absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  style={{
                    top: isMobileMenuOpen ? '11px' : '6px',
                    transform: isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transformOrigin: 'center'
                  }}
                />
                {/* Ligne du milieu */}
                <span
                  className="absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  style={{
                    top: '11px',
                    opacity: isMobileMenuOpen ? 0 : 1,
                    transform: isMobileMenuOpen ? 'scale(0)' : 'scale(1)'
                  }}
                />
                {/* Ligne du bas */}
                <span
                  className="absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                  style={{
                    top: isMobileMenuOpen ? '11px' : '16px',
                    transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
                    transformOrigin: 'center'
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  );
};

export default Header;