# Générateur de Blagues
> README en partie généré par IA (Prompt : "écrit un README simple pour ce projet")

Une application web simple permettant d'afficher et de gérer des blagues en français en utilisant l'API [JokeAPI](https://jokeapi.dev/).

---

## 🚀 Fonctionnalités

- **Récupération dynamique :** Récupération de blagues aléatoires en français via un appel API asynchrone (`fetch`).
- **Filtrage de contenu :** Les blagues inappropriées (NSFW, religieuses, politiques, racistes, sexistes, explicites) sont automatiquement filtrées.
- **Gestion des doublons :** Vérification automatique pour éviter de récupérer une blague déjà affichée lors de la même session ou stockée.
- **Persistance des données :** Sauvegarde automatique des blagues dans le `localStorage` du navigateur pour les conserver après rafraîchissement de la page.
- **Gestion de la liste :**
  - **Suppression individuelle :** Possibilité de supprimer une blague spécifique du tableau et du stockage local.
  - **Effacement global :** Bouton pour réinitialiser le tableau et vider complètement le stockage local.
- **Interface responsive :** Utilisation de **Bootstrap 5** pour un rendu propre et adapté aux différents écrans.

---

## 🛠️ Technologies utilisées

- **HTML5** : Structure de la page web.
- **CSS3 / Bootstrap 5** : Style et mise en page responsive.
- **JavaScript** : Manipulation du DOM, gestion des événements, appels API (`async/await`) et persistance via `localStorage`.
- **JokeAPI (v2)** : API externe pour la fourniture des blagues.

---

## 📁 Structure du projet

```text
├── index.html          # Structure HTML principale
├── assets/
│   ├── css/
│   │   └── style.css  
│   └── js/
│       └── script.js   # Logique applicative et interactions API
└── README.md           # Documentation du projet
```

---

## ⚙️ Installation et utilisation

1. **Cloner ou télécharger le dépôt :**
   ```bash
   git clone https://github.com/YannNotRoot/JokeTable
   ```


