/**
 * Cours JavaScript - Les variables
 * 
 * Atelier
 * 
 * 1. Réaliser un programme déclarant une variable de chaque type suivant:
 *   - un entier représentant ton âge
 *   - une chaîne de caractère, représentant ton nom et ton prénom
 *   - un booléen représentant si tu es un homme ou une femme
 *   - une constante représentant le nom de l'école
 * 2. Afficher le type de chaque variable
 * 3. Afficher la valeur de chaque variable
 */

// 1. Déclaration des variables
const fullName = 'Benoît Hubert';
const age = 40;
const isMale = true;
const school = 'Wild Code School Toulouse';

// 2. AFfichage de leur type
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isMale);
console.log(typeof school);

// 3. Affichage de leur valeur
console.log(fullName);
console.log(age);
console.log(isMale);
console.log(school);

// Si on voulait afficher toutes les variables sur la même ligne,
// on pourrait remplacer les 4 lignes précédentes par celle-ci
// console.log(fullName, age, isMale, school);
