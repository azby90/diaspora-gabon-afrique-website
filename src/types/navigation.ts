export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  { name: 'Biographies', href: '/biographies' },
  { name: 'Programme', href: '/programme' },
  { name: 'Communautés & Agenda', href: '/communautes-agenda' },
  { name: 'Actualités & Médias', href: '/actualites-medias' },
  { name: 'Contact & S\'impliquer', href: '/contact-simpliquer' },
];