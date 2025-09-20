# Site Officiel - Diaspora Gabon Afrique

Site de campagne officiel pour Angelina Charlotte Nongou-Mavikana (ép. Leyenberger), candidate aux élections législatives 2025 pour la circonscription Diaspora Gabon Zone Afrique.

## 🇬🇦 À Propos

Ce site représente la campagne pour la représentation de plus de 50 pays d'Afrique au Parlement gabonais. Notre mission est d'unir la diaspora gabonaise africaine et de créer des ponts durables entre nos compatriotes dispersés et notre nation d'origine.

**Slogan de campagne :** "Ensemble pour la Diaspora Gabon Afrique"

## 🚀 Technologies Utilisées

- **Framework :** Next.js 15.5.3 avec App Router
- **Langage :** TypeScript
- **Styling :** Tailwind CSS
- **Police :** Inter (Google Fonts)
- **Build :** Production-ready avec optimisations

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/azby90/diaspora-gabon-afrique-website.git
cd diaspora-gabon-afrique-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) pour voir le site.

## 🏗️ Structure du Projet

```
src/
├── app/                        # Pages App Router
│   ├── page.tsx               # Page d'accueil
│   ├── programme/             # Programme politique
│   ├── actualites-medias/     # Actualités et médias
│   ├── contact-simpliquer/    # Contact et engagement
│   └── layout.tsx             # Layout principal
├── components/
│   ├── layout/                # Composants de mise en page
│   │   ├── Header.tsx         # Navigation principale
│   │   ├── Hero.tsx           # Bannière hero
│   │   ├── Footer.tsx         # Pied de page
│   │   └── TopBanner.tsx      # Bannière supérieure
│   ├── sections/              # Sections de contenu
│   │   └── NewsAndMessage.tsx # Actualités + Lettre
│   └── ui/                    # Composants UI réutilisables
└── types/                     # Définitions TypeScript
```

## 🎨 Charte Graphique

### Couleurs
- **Primaire :** `#0A7A3B` (Vert Gabon)
- **Fond :** `#FFFFFF` (Blanc)
- **Texte Principal :** `#000000` (Noir)
- **Texte Secondaire :** `#6B7280` (Gris)
- **Footer :** `#065F46` (Vert foncé)

### Typographie
- **Police :** Inter (toutes les tailles)
- **H1/H2 :** 36px/28px, font-bold
- **H3/H4 :** 20-24px, font-bold
- **Corps :** 16px, font-normal
- **Footer :** 14px

### Layout
- **Largeur max :** 1200px centré
- **Espacement :** 80px entre sections
- **Responsive :** Mobile-first design

## 📄 Pages Disponibles

1. **Accueil** (`/`) - Hero + Vision + Actualités/Lettre + CTA
2. **Programme** (`/programme`) - Programme politique détaillé
3. **Actualités/Médias** (`/actualites-medias`) - News et contenus multimédias
4. **Contact** (`/contact-simpliquer`) - Formulaires d'engagement
5. **Biographies** (`/biographies`) - Profils équipe
6. **Communautés** (`/communautes-agenda`) - Événements diaspora

## 🔧 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
```

## 🏛️ Partenaires Institutionnels

- **ANBG** - Agence Nationale des Bourses du Gabon
- **DGDI** - Direction Générale de la Diaspora et de l'Immigration

## 📱 Import vers V0 (Vercel)

Pour importer ce projet dans V0 pour continuer le développement visuel :

1. **URL du Repository :** `https://github.com/azby90/diaspora-gabon-afrique-website`
2. **Branche :** `master`
3. **Dossier racine :** `/` (tout le projet)
4. **Framework détecté :** Next.js 15

### Fichiers clés pour V0 :
- `src/app/page.tsx` - Page principale
- `src/components/layout/Hero.tsx` - Bannière hero
- `src/components/sections/NewsAndMessage.tsx` - Section actualités
- `tailwind.config.js` - Configuration Tailwind
- `package.json` - Dépendances

## 🤝 Contribution

Ce projet représente une campagne politique officielle. Pour toute modification, contactez l'équipe de campagne.

## 📄 Licence

© 2025 - Angelina Charlotte Nongou-Mavikana (ép. Leyenberger) - Tous droits réservés

---

**Élections Législatives Gabon 2025 - Circonscription Diaspora Zone Afrique**
