# 🎯 Configuration Facebook Graph API

Guide complet pour connecter automatiquement les publications Facebook de la candidate au site web.

## 📋 Vue d'ensemble

Le site récupère automatiquement les publications de la page Facebook d'Angélina :
- **URL de la page** : https://www.facebook.com/profile.php?id=61579187160785
- **ID de la page** : 61579187160785
- **Publications récupérées** : Images, vidéos, réels avec texte et metadata

## 🔧 Étapes de configuration

### 1. Créer une App Facebook Developer

1. **Aller sur Facebook Developers**
   - Visiter : https://developers.facebook.com/
   - Se connecter avec un compte Facebook

2. **Créer une nouvelle application**
   - Cliquer "Create App"
   - Choisir "Business" comme type d'application
   - Nom suggéré : "Diaspora Gabon Afrique Website"
   - Email de contact : email de l'équipe

3. **Ajouter des produits**
   - Ajouter "Facebook Login for Business"
   - Ajouter "Pages API"

### 2. Configurer les permissions

**Permissions requises :**
- `pages_read_engagement` : Lire les publications de la page
- `pages_show_list` : Accéder aux informations de la page

**Obtenir ces permissions :**
1. Dans votre App, aller dans "App Review" > "Permissions and Features"
2. Demander l'approbation pour ces permissions
3. ⚠️ **Important** : Justifier l'utilisation pour le site web officiel de campagne

### 3. Générer le token d'accès

1. **Utiliser Graph API Explorer**
   - Aller sur : https://developers.facebook.com/tools/explorer/
   - Sélectionner votre application
   - Dans "Permissions", ajouter : `pages_read_engagement`, `pages_show_list`
   - Cliquer "Generate Access Token"

2. **Obtenir un token de longue durée**
   ```bash
   # Remplacer YOUR_APP_ID, YOUR_APP_SECRET, et SHORT_LIVED_TOKEN
   curl -X GET "https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=SHORT_LIVED_TOKEN"
   ```

### 4. Configuration du site web

1. **Copier le fichier d'environnement**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Configurer les variables**
   ```env
   NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN=your_long_lived_token_here
   NEXT_PUBLIC_FACEBOOK_PAGE_ID=61579187160785
   NEXT_PUBLIC_FACEBOOK_APP_ID=your_app_id_here
   ```

3. **Redémarrer le serveur**
   ```bash
   npm run dev
   ```

## 📱 Test de l'intégration

### Vérification du fonctionnement

1. **Page d'accueil** → Section "Actualités récentes"
   - Doit afficher 6 vraies publications Facebook
   - Images et vidéos doivent s'afficher correctement
   - Titres générés automatiquement
   - Dates de publication correctes

2. **Page "Actualités & Médias"**
   - Tous les posts avec contenu visuel
   - Lecteur vidéo intégré fonctionnel
   - Agrandissement des images

### Mode développement sans token

Si aucun token n'est configuré, le site utilise automatiquement des données de démonstration réalistes.

## 🔍 Débogage

### Vérifier les logs

```bash
# Dans la console du navigateur
# Rechercher les messages de la Facebook API
```

### Tester l'API manuellement

```bash
# Tester l'endpoint Facebook
curl "https://graph.facebook.com/v18.0/61579187160785/posts?fields=id,message,created_time,full_picture&access_token=YOUR_TOKEN"
```

### Erreurs communes

1. **Token expiré**
   - Générer un nouveau token de longue durée
   - Mettre à jour `.env.local`

2. **Permissions insuffisantes**
   - Vérifier que les permissions `pages_read_engagement` sont approuvées
   - Contacter Facebook si nécessaire

3. **Limite de taux dépassée**
   - L'API Facebook limite les appels
   - Implémenter un cache si nécessaire

## 📊 Monitoring

### Métriques à surveiller

- Nombre de publications récupérées
- Temps de réponse de l'API Facebook
- Taux d'erreur des requêtes

### Logs d'erreur

Le système affiche automatiquement :
- Erreurs de connexion Facebook
- Problèmes de parsing des données
- Fallback vers les données de démonstration

## 🚀 Mise en production

### Variables d'environnement production

```env
# Production
NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN=production_token
NEXT_PUBLIC_FACEBOOK_PAGE_ID=61579187160785
NODE_ENV=production
```

### Sécurité

- Le token Facebook est exposé côté client (NEXT_PUBLIC_)
- Utiliser des tokens avec permissions minimales
- Surveiller l'utilisation de l'API
- Renouveler les tokens régulièrement

## 📞 Support

En cas de problème :
1. Vérifier les logs de la console navigateur
2. Tester l'API manuellement
3. Vérifier que la page Facebook est publique
4. Contacter l'équipe de développement

---

**✅ Une fois configuré, le site affichera automatiquement les vraies publications Facebook d'Angélina en temps réel !**