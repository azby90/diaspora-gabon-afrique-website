export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  { name: 'Biographies', href: '/biographies' },
  { name: 'Programme', href: '/programme' },
  { name: 'Contact & S\'impliquer', href: '/contact-simpliquer' },
];