//DOM Elements
const btn = document.querySelector("button")!;
const container = document.querySelector(".container") as HTMLDivElement;
const lettre = document.querySelector("input") as HTMLInputElement;
const wordContainer = document.querySelector(".word") as HTMLDivElement;

// Variables
const listeDeMots: string[] = [
  "pomme",
  "école",
  "maison",
  "jardin",
  "rivière",
  "montagne",
  "chocolat",
  "voiture",
  "avion",
  "bateau",
  "soleil",
  "étoile",
  "neige",
  "livre",
  "chien",
  "chat",
  "éléphant",
  "girafe",
  "tigre",
  "souris",
  "téléphone",
  "ordinateur",
  "musique",
  "danse",
  "cinéma",
  "peinture",
  "théâtre",
  "voyage",
  "mer",
  "plage",
  "forêt",
  "désert",
  "lac",
  "cascade",
  "volcan",
  "nuage",
  "vent",
  "pluie",
  "arc-en-ciel",
  "poisson",
  "requin",
  "dauphin",
  "baleine",
  "grenouille",
  "oiseau",
  "serpent",
  "papillon",
  "abeille",
  "singe",
  "lapin",
];
let motATrouver: string;
let compteur: number = 0;
// Functions

/**
 * @name play - Fonction pour jouer
 * @param mot - Mot à trouver
 * @param lettre - Lettre à vérifier
 * @param compteur - Compteur de tentatives
 * @returns void
 * @description Vérifie si la lettre est dans le mot
 */
function play(mot: string, lettre: string): void {
  if (compteur < 6) {
    if (mot.includes(lettre)) {
      console.log("La lettre est dans le mot");
      bonneLettre(lettre);
    } else {
      console.log("La lettre n'est pas dans le mot");
      mauvaiseLettre(lettre);
    }
  } else partiePerdue();
}

/**
 *@name mauvaiseLettre
 * @param lettre - La lettre qui n'est pas présente dans le motATrouver
 * @description Fonction pour les mauvaises lettres entrées par l'utilisateur
 */
function mauvaiseLettre(lettre: string) {
  compteur++;
  console.log("Mauvaise lettre - Plus que " + (6 - compteur) + " tentatives");
}

/**
 *@name bonneLettre
 * @param lettre - La lettre qui n'est pas présente dans le motATrouver
 * @description Fonction pour les bonnes lettres entrées par l'utilisateur
 */
function bonneLettre(lettre: string) {}

/**
 * @name partiePerdue
 * @description Fonction pour la partie perdue
 */
function partiePerdue() {
  console.log("Perdu");
  const p = document.createElement("p");
  p.id = "msg-perdu";
  p.textContent = "Perdu !";
  wordContainer.innerHTML = "";
  wordContainer.appendChild(p);
}

// Event listeners
btn.addEventListener("click", (event) => {
  const randomNumber = Math.floor(Math.random() * listeDeMots.length);
  motATrouver = listeDeMots[randomNumber];

  play(motATrouver, lettre.value);
});
