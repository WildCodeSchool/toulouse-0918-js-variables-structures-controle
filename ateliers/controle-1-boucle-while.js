/**
 * Cours JavaScript - Structures de contrôle
 * 
 * Atelier
 * 
 * 1. Réaliser un programme qui permet de faire une multiplication
 * entre 2 nombres en utilisant uniquement l’opération d’addition
 * (utiliser une boucle while)
 */

// L'idée générale est de se servir d'un des deux nombres pour
// définir le nombre de passages (itérations) dans la boucle while.
// À chaque itération, l'autre nombre va être ajouté à une variable
// contenant le résultat, cette variable étant initialisée à zéro AVANT
// la boucle

// Une 1ère solution
// On va stocker le résultat final dans result
// On va utiliser count pour stocker le nombre de passages déjà
// effectués dans la boucle
let result = 0;
let count = 0;
const number1 = 7;
const number2 = 4;

while (count < number1) {
  result += number2;  // version raccourcie de result = result + number2
  count++;
}

// Une 2ème solution
// On va, là aussi, stocker le résultat final dans result
// Par contre, au lieu de créer une deuxième variable "count" pour compter
// le nombre d'itérations, on se sert d'un des nombres pour cela.
// Admettons que ce nombre soit 3 : on doit passer 3 fois dans la boucle.
// L'idée est de décrémenter ce nombre à chaque itération : on le fait à la
// fin du corps de la boucle.
// Attention cela ne marche que si ce nombre (ici number1) est déclaré avec let
// Par contre on peut déclarer number2 avec const, car il ne sera pas modifié

// Décommenter les lignes ci-dessous pour l'essayer
// (et commenter celles de la 1ère solution)

// let result = 0
// let number1 = 9
// const number2 = 6
// while (number1 >= 1) {
//   result += number2;
//   number1 -= 1;
// }

// Une 3ème solution (même si ce n'est pas dans l'énoncé qui demande un while)
// Résolution avec une boucle for

// let result = 0
// const number1 = 14
// const number2 = 3
// for (let count = 1 ; count <= number1 ; count += 1) {
//   result += number2;
// }

console.log('Résultat', result);