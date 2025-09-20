'use client';

import React from 'react';
import Link from 'next/link';
import { FacebookIcon, XIcon, LinkedInIcon } from '@/components/ui/SocialIcons';

const TopBanner: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/diaspora-gabon-afrique',
      icon: FacebookIcon,
      label: 'Facebook'
    },
    {
      name: 'X',
      url: 'https://x.com/diaspora_gabon',
      icon: XIcon,
      label: 'Compte X'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/diaspora-gabon-afrique',
      icon: LinkedInIcon,
      label: 'LinkedIn'
    },
  ];

  const actionLinks = [
    { name: 'Programme', href: '/programme' },
    { name: 'Agenda', href: '/communautes-agenda' },
    { name: 'FAQ électeurs', href: '/faq' },
    { name: 'Contact', href: '/contact-simpliquer' },
  ];

  return (
    <div
      className="w-full fixed top-0 z-50"
      style={{
        backgroundColor: 'rgba(10, 122, 59, 0.95)',
        backdropFilter: 'blur(8px)',
        height: '44px',
        borderBottom: 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="flex justify-between items-center h-full w-full">
        {/* Côté gauche - Réseaux sociaux */}
        <div
          className="flex items-center"
          style={{
            paddingLeft: '20px'
          }}
        >
          <span
            className="font-inter"
            style={{
              fontSize: '10px',
              fontWeight: '400',
              color: '#EAEAEA',
              letterSpacing: '0.2px',
              lineHeight: '1.4',
              marginRight: '10px'
            }}
          >
            Suivez-nous :
          </span>
          <div className="flex items-center" style={{ gap: '10px' }}>
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
                  style={{
                    color: '#EAEAEA',
                    padding: '4px',
                    borderRadius: '4px',
                    minWidth: '24px',
                    minHeight: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label={link.label}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#EAEAEA'}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Côté droit - Actions (collé au bord droit) */}
        <div
          className="hidden lg:flex items-center"
          style={{
            paddingRight: '20px'
          }}
        >
          {actionLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className="font-inter transition-colors duration-300 focus:outline-none"
                style={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: '#EAEAEA',
                  padding: '4px 6px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#EAEAEA'}
              >
                {link.name}
              </Link>
              {index < actionLinks.length - 1 && (
                <span
                  style={{
                    color: '#EAEAEA',
                    fontSize: '10px',
                    margin: '0 4px',
                    fontWeight: '300'
                  }}
                >
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;