#!/usr/bin/env bash
# ============================================================
# Déploiement ÉCO-CRÉDITS du site L'Autre Récit
# Build en LOCAL (gratuit) + envoi du dossier déjà construit
# → 0 minute de build Netlify consommée.
# Inclut : le site, le tunnel de vente, le guide HTML (tout est dans /public).
#
# 1re fois seulement :
#   npx netlify login
#   npx netlify link        (relier au site Netlify existant)
#
# Ensuite, à chaque retouche :
#   bash deploy.sh
# ============================================================
set -e
cd "$(dirname "$0")"

echo "→ 1/2  Build local (gratuit, sur ta machine)…"
npm run build

echo "→ 2/2  Envoi du dossier dist/ à Netlify (sans build serveur)…"
npx netlify deploy --prod --dir=dist --no-build

echo ""
echo "✅ Déployé. 0 minute de build Netlify consommée."
echo "   (Netlify n'a uploadé que les fichiers modifiés.)"
