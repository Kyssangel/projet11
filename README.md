# API Argent Banque

Cette base de code contient le code nécessaire pour exécuter le backend d'Argent Bank.

## Commencer

### Conditions préalables

Argent Bank utilise la pile technologique suivante :

- [Node.js v12](https://nodejs.org/en/)
- [Serveur communautaire MongoDB](https://www.mongodb.com/try/download/community)

Veuillez vous assurer que vous disposez des bonnes versions et téléchargez les deux packages. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre terminal :

```bash
# Vérifiez la version de Node.js
nœud --version

# Vérifier la version de Mongo
mongo --version
```

### Instructions

1. Forkez ce dépôt
1. Clonez le dépôt sur votre ordinateur
1. Ouvrez une fenêtre de terminal dans le projet cloné
1. Exécutez les commandes suivantes :

```bash
# Installer les dépendances
installation npm

# Démarrer le serveur de développement local
npm exécuter dev: serveur

# Remplir la base de données avec deux utilisateurs
npm exécuter populate-db
```

Votre serveur devrait maintenant fonctionner sur http://locahost:3001 et vous aurez désormais deux utilisateurs dans votre base de données MongoDB !

## Données de base de données remplies

Une fois que vous avez exécuté le script `populate-db`, vous devriez avoir deux utilisateurs dans votre base de données :

### Tony Stark

- Prénom : "Tony"
- Nom de famille : `Stark`
- E-mail : `tony@stark.com`
- Mot de passe : `password123`

### Steve Rogers

- Prénom : `Steve`,
- Nom de famille : « Rogers »,
- Courriel : `steve@rogers.com`,
- Mot de passe : `password456`

##Documentation API

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs

## Éléments de conception

Du HTML et CSS statiques ont été créés pour la majeure partie du site et se trouvent dans : `/designs`.

Pour certaines fonctionnalités dynamiques, comme le basculement de l'édition utilisateur, il existe une maquette dans `/designs/wireframes/edit-user-name.png`.

Et pour le modèle API que vous proposerez pour les transactions, le wireframe se trouve dans `/designs/wireframes/transactions.png`.
