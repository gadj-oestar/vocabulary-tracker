# Vocabulary Tracker

Un carnet de vocabulaire simple pour apprendre une langue : ajoutez vos mots, révisez-les, progressez.

> Le projet en est à ses débuts : pour l'instant, seule la page d'accueil est disponible.

## Fonctionnalités prévues

- **Ajoutez vos mots** : notez chaque nouveau mot avec sa traduction.
- **Révisez** : retournez des cartes et indiquez si vous connaissiez la réponse.
- **Progressez** : les mots difficiles reviennent plus souvent.

## Technologies

- [React](https://react.dev) 19
- [Vite](https://vite.dev)
- [ESLint](https://eslint.org)

## Démarrage

Prérequis : [Node.js](https://nodejs.org) et npm.

```bash
npm install
npm run dev
```

L'application est alors disponible sur l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

## Scripts disponibles

| Commande          | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement             |
| `npm run build`   | Génère la version de production dans `dist/`  |
| `npm run preview` | Prévisualise la version de production         |
| `npm run lint`    | Vérifie le code avec ESLint                   |

## Mise en ligne

Le site est prévu pour [Vercel](https://vercel.com), qui détecte Vite tout seul : aucune configuration n'est nécessaire.

1. Se connecter sur [vercel.com](https://vercel.com) avec son compte GitHub.
2. « Add New… », puis « Project », puis importer `vocabulary-tracker`.
3. Laisser les réglages proposés (Framework : Vite, commande `npm run build`, dossier `dist`) et cliquer sur « Deploy ».

Ensuite, chaque push sur `main` met le site à jour automatiquement, et chaque pull request reçoit sa propre adresse de prévisualisation. Documentation : [Vite sur Vercel](https://vercel.com/docs/frameworks/frontend/vite).
