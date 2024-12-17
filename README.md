# 🎮 Jeu du pendu en Typescript


## Règles

La page web choisit aléatoirement un mot à faire deviner à l'utilisateur.
Le mot est affiché sous la forme d'emplacement de lettre (par exemple, des underscores).
À chaque lettre trouvée par l'utilisateur, ceux-ci sont remplacés par la lettre correspondante.

L'utilisateur a dû faire 6 erreurs, après chaque erreur le dessin du pendu doit progresser. 

Si l'utilisateur trouve le mot avant d'avoir fait 6 erreurs, celui-ci gagne le jeu !
Dans le cas contraint, indique à l'utilisateur qu'il a perdu et affiche le mot.

## Bonus

1) L'utilisateur utilise des boutons pour proposer les lettres. Ceux-ci ne sont plus cliquables si la lettre a été proposée.
2) Ajouter un mode "facile" qui révèle 2 lettres au début de la partie


## Tips

### Exemple de procedure de travail

1) Mettre en place le projet \
• Les fichiers (index.html & script.ts) \
• La configuration du TypeScript \
• La configuration du projet (npm)

2) Réaliser l'algorithme du pendu "simple" \
• Ne pas dessiner le pendu. \
• Créer une méthode "getRandomWorld" qui renvoi toujours le même mot.

3) Ajouter le dessin du pendu après chaque erreur

4) Ajouter de l'aleatoire \
• Modifier la méthode "getRandomWorld"
