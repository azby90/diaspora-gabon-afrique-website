export interface Promise {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}