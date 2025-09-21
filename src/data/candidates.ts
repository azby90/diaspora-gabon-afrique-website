export interface Candidate {
  id: string;
  name: string;
  role: string;
  subtitle?: string;
  image: string;
  tagline: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
    whatsapp: string;
  };
  biography: {
    academic: {
      title: string;
      content: string;
    };
    professional: {
      title: string;
      content: string;
    };
    engagement: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
    };
  };
}

export const candidates: Candidate[] = [
  {
    id: 'deputee',
    role: 'CANDIDATE DÉPUTÉE – SIÈGE AFRIQUE',
    name: 'Angelina Charlotte Nongou-Mavikana',
    subtitle: '(ép. Leyenberger)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
    tagline: 'Engagée pour une diaspora gabonaise unie et moderne.',
    socialMedia: {
      facebook: 'https://facebook.com/angelina.nongou',
      twitter: 'https://twitter.com/angelina_nongou',
      linkedin: 'https://linkedin.com/in/angelina-nongou',
      whatsapp: 'https://wa.me/33612345678'
    },
    biography: {
      academic: {
        title: 'Formation académique',
        content: 'Diplômée en Sciences Politiques de l\'Université Omar Bongo, Mme Nongou-Mavikana a poursuivi ses études supérieures en Droit Public à l\'Université de Bordeaux. Elle détient un Master en Administration Publique, lui conférant une expertise approfondie en gestion des affaires publiques et en conception de politiques institutionnelles.'
      },
      professional: {
        title: 'Parcours professionnel',
        content: 'Forte d\'une expérience de quinze années dans l\'administration publique, elle a occupé des fonctions stratégiques au sein de différents ministères. Son passage au Ministère des Affaires Sociales lui a permis de développer une vision concrète des enjeux sociaux contemporains. Elle a également exercé en qualité de consultante pour plusieurs organisations internationales, travaillant sur des projets de développement social et d\'autonomisation des femmes en Afrique centrale.'
      },
      engagement: {
        title: 'Engagements et responsabilités',
        content: 'Militante de longue date pour l\'égalité des sexes et les droits des femmes, Mme Nongou-Mavikana s\'engage pour une société plus juste et inclusive. Elle préside l\'association "Femmes Leaders du Gabon" qui accompagne l\'entrepreneuriat féminin et soutient l\'insertion professionnelle des jeunes diplômées. Ses actions se concentrent sur l\'amélioration de l\'accès à l\'éducation, le développement des infrastructures de santé, et la promotion de l\'économie locale.'
      },
      vision: {
        title: 'Vision politique',
        content: 'Sa candidature s\'articule autour de trois axes stratégiques : la justice sociale, l\'innovation économique et la préservation environnementale. Elle souhaite porter la voix des citoyens au cœur des débats parlementaires et contribuer à l\'édification d\'un Gabon prospère, équitable et durable pour toutes les générations.'
      }
    }
  },
  {
    id: 'suppleant',
    role: 'SUPPLÉANT – SIÈGE AFRIQUE',
    name: 'Koumba Koudel Stéphane',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    tagline: 'Professionnel expérimenté, au service du développement durable.',
    socialMedia: {
      facebook: 'https://facebook.com/koumba.koudel',
      twitter: 'https://twitter.com/koumba_koudel',
      linkedin: 'https://linkedin.com/in/koumba-koudel',
      whatsapp: 'https://wa.me/33612345679'
    },
    biography: {
      academic: {
        title: 'Formation et expertise',
        content: 'Ingénieur diplômé de l\'École Polytechnique de Libreville, M. Koumba Koudel s\'est spécialisé dans le développement des infrastructures et l\'aménagement du territoire. Il possède également une certification avancée en gestion de projets internationaux délivrée par l\'Institut de Management de Projets de Londres, ainsi qu\'un diplôme complémentaire en développement durable.'
      },
      professional: {
        title: 'Expérience professionnelle',
        content: 'Avec plus de vingt années d\'expérience dans les secteurs privé et public, il a dirigé plusieurs projets d\'envergure nationale, notamment dans les domaines des transports, de l\'énergie et des télécommunications. Son expertise technique est reconnue au niveau sous-régional. Il a occupé des fonctions de direction au sein de grandes entreprises gabonaises et a conseillé plusieurs collectivités locales dans leurs projets de développement territorial.'
      },
      engagement: {
        title: 'Engagement communautaire',
        content: 'Homme de terrain, M. Koumba Koudel s\'investit depuis de nombreuses années dans le développement communautaire. Il coordonne plusieurs initiatives locales visant à améliorer l\'accès à l\'eau potable et à l\'électricité dans les zones rurales. Il est également fondateur d\'une organisation non gouvernementale qui promeut l\'éducation technique et professionnelle auprès des jeunes, convaincu que la formation constitue la clé du développement économique durable.'
      },
      vision: {
        title: 'Orientations politiques',
        content: 'Partisan d\'un développement inclusif et participatif, il défend une approche pragmatique de la politique, fondée sur l\'écoute des citoyens et la recherche de solutions concrètes aux problèmes quotidiens. Sa priorité consiste à contribuer à la modernisation des infrastructures nationales tout en préservant l\'environnement gabonais et en garantissant un développement équitable pour tous les territoires.'
      }
    }
  }
];