/**
 * Cours JavaScript - Structures de contrôle
 * 
 * Atelier
 * 
 * 2. Réaliser un programme qui compte de 5 en 5 de 0 jusqu'à 100,
 * puis affiche la somme des nombres trouvés
 * (utiliser une boucle for)
 */

// 3 choses dans les parenthèses du for, séparées par ;
//     1. initialisation d'un compteur.
//     2. condition d'arrêt: une valeur vraie ou fausse
//     3. modification du compteur: "incrémentation" (augmenter le compteur) ou décrémentation (diminuer)

// Plusieurs façons de modifier le compteur
// Version "verbeuse": count = count + 5
// Version abrégée: count += 5

// Note: si on incrémentait de 1 en 1, on pourrait utiliser:
// count++ (qui signifie augmenter de 1)

// Là aussi, pour résoudre l'exercice, on doit définir une variable sum
// qui va contenir le total. Elle doit être initialisée à zéro

let sum = 0;
for (let count = 0 ; count <= 100 ; count = count + 5) {
  sum = sum + count;
  console.log(count);
}
console.log(sum);