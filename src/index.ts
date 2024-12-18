//DOM Elements
const btn = document.querySelector("button")!;
const container = document.querySelector(".container") as HTMLDivElement;
const lettre = document.querySelector("input") as HTMLInputElement;
const wordContainer = document.querySelector(".word") as HTMLDivElement;
const penduImg = document.querySelector(".pendu-img") as HTMLImageElement;
const nbLettresContainer = document.querySelector(
  "#nbLettres"
) as HTMLDivElement;
let lettresDejaTrouves: string[] = [];

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
    // displayNombreLettres(motATrouver);
    if (mot.includes(lettre)) {
      if (lettresDejaTrouves.includes(lettre)) {
        console.log("Lettre déjà trouvée !");
        console.log("liste des lettres déjà trouvées: " + lettresDejaTrouves);
      } else {
        console.log("La lettre est dans le mot");
        bonneLettre(lettre);
      }
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
  penduImg.src = `/images/pendu-${compteur}.png`;
}

/**
 *@name bonneLettre
 * @param lettre - La lettre qui n'est pas présente dans le motATrouver
 * @description Fonction pour les bonnes lettres entrées par l'utilisateur
 */
function bonneLettre(lettre: string) {
  console.log(
    "Bien joué, la lettre " +
      lettre +
      " vient d'être ajoutée aux lettres trouvées"
  );
  lettresDejaTrouves.push(lettre);
  console.log("Lettres trouvées: " + lettresDejaTrouves);
}

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

/**
 * @name displayLettresDejaTrouves
 * @description Fonction pour afficher les lettres déjà trouvées
 */
function displayLettresDejaTrouves(): void {
  for (let lettres of lettresDejaTrouves) {
    const p = document.createElement("p");
    p.classList.add("list-lettres-trouvees");
    p.textContent = lettres;
    nbLettresContainer.append(p);
  }
}

/**
 * @name displayNombreLettres
 * @param mot - Mot à trouver
 * @description Fonction pour afficher le nombre de lettres du mot à trouver
 */
function displayNombreLettres(mot: string): void {
  for (let i = 0; i < mot.length; i++) {
    const p = document.createElement("p");
    p.classList.add("lettre-cachee");
    p.textContent = "_";
    nbLettresContainer.appendChild(p);
  }
}

// Event listeners
const randomNumber = Math.floor(Math.random() * listeDeMots.length);
motATrouver = listeDeMots[randomNumber];
console.log("TRICHE: LE MOT EST " + motATrouver);

displayLettresDejaTrouves();
btn.addEventListener("click", (event) => {
  play(motATrouver, lettre.value);
});
