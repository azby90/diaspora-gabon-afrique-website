# 📁 Guide des Images - Diaspora Gabon Afrique

## 🗂️ Structure des dossiers

```
/public/images/
├── hero/                 # Images pour la bannière principale
│   ├── hero-banner.jpg   # Image principale (votre 13.jpg)
│   └── hero-mobile.jpg   # Version mobile (optionnel)
├── candidates/           # Photos des candidats
├── gallery/             # Galerie d'images
└── icons/               # Icônes et logos
```

## 📤 Comment ajouter votre image personnalisée

### Étape 1 : Préparer votre image
1. **Renommez** votre fichier `13.jpg` en `hero-banner.jpg`
2. **Copiez** le fichier dans : `/public/images/hero/hero-banner.jpg`

### Étape 2 : Optimisation recommandée
- **Format** : JPG ou WebP pour les photos
- **Taille** : 1920x1080px (Full HD) minimum
- **Poids** : < 500KB pour de bonnes performances
- **Qualité** : 80-85% pour un bon compromis

### Étape 3 : Placement du fichier
```bash
# Copiez votre image ici :
/public/images/hero/hero-banner.jpg
```

## 🎛️ Configuration de la bannière

Le fichier `Hero.tsx` contient ces paramètres configurables :

```javascript
const heroImagePath = '/images/hero/hero-banner.jpg'; // Votre image
const overlayOpacity = 0.3; // Intensité de l'overlay (0.0 à 1.0)
```

### Ajuster l'overlay
- `0.0` = Pas d'overlay (image pure)
- `0.2` = Overlay léger
- `0.3` = Overlay moyen (recommandé)
- `0.5` = Overlay fort
- `0.8` = Overlay très sombre

## 🔧 Formats d'images supportés

| Format | Usage | Avantages |
|--------|-------|-----------|
| JPG | Photos, bannières | Petit poids, qualité |
| PNG | Logos, icônes | Transparence |
| WebP | Toutes images | Meilleure compression |
| SVG | Icônes simples | Vectoriel, léger |

## 📱 Responsive

L'image s'adapte automatiquement :
- **Desktop** : Côté gauche 50%
- **Mobile** : Haut de page 50%
- **Background-size** : cover (remplit toute la zone)
- **Background-position** : center (centré)

## ⚡ Optimisation performance

1. **Compressez** vos images avant upload
2. **Utilisez WebP** si possible
3. **Gardez** les fichiers < 500KB
4. **Testez** sur mobile et desktop

## 🎨 Exemples d'utilisation

```javascript
// Image claire avec overlay moyen
const overlayOpacity = 0.3;

// Image sombre avec overlay léger
const overlayOpacity = 0.1;

// Image très contrastée avec overlay fort
const overlayOpacity = 0.5;
```