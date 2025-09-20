# 📷 Placement de l'image Hero - 13.jpg

## ✅ **Image placée avec succès !**

Votre image est maintenant dans :

```
/public/images/hero/13.jpg
```

## 📋 **Configuration actuelle**

✅ **Fichier** : `13.jpg` (nom original conservé)
✅ **Emplacement** : `/public/images/hero/13.jpg`
✅ **Code mis à jour** : `url('/images/hero/13.jpg')`

## ⚙️ **Configuration actuelle du code**

### Background-image configuré
```css
background-image: url('/images/hero/duo-candidats.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed; /* Effet parallax */
```

### Overlay sombre
```css
background-color: rgba(0, 0, 0, 0.4); /* 40% d'opacité */
```

## 📐 **Spécifications recommandées**

### Taille d'image optimale
- **Largeur** : 1920px minimum (Full HD)
- **Hauteur** : 1080px minimum
- **Ratio** : 16:9 (paysage)
- **Poids** : < 500KB pour de bonnes performances

### Format
- **JPG** : Recommandé pour les photos
- **WebP** : Meilleur compression (si supporté)
- **Qualité** : 80-85% (bon compromis poids/qualité)

## 🎨 **Style appliqué**

### Desktop
- **Plein écran** : 100vh de hauteur
- **Background fixe** : Effet parallax lors du scroll
- **Contenu à droite** : Texte superposé sur l'image
- **Overlay sombre** : 40% pour améliorer la lisibilité

### Mobile
- **Même image** : S'adapte automatiquement
- **Contenu centré** : Texte au centre de l'écran
- **Responsive** : Tailles de police adaptatives

## 🔧 **Test après placement**

1. Placez `duo-candidats.jpg` dans `/public/images/hero/`
2. Rechargez la page d'accueil
3. L'image doit s'afficher en arrière-plan plein écran
4. Le texte blanc doit être lisible par-dessus

## 📝 **Notes importantes**

- Le chemin commence par `/images/` (sans `/public/`)
- Next.js sert automatiquement les fichiers du dossier `/public/`
- L'effet parallax (`background-attachment: fixed`) peut être désactivé sur mobile pour de meilleures performances