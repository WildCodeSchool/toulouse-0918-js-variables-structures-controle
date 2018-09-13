// Calculer la TVA (VAT) en fonction d'un type de produit ou service
const productType = 'restaurant';
let vat;

switch (productType) {
  case 'restaurant': {
    vat = 5;
    break;
  }
  case 'reduced': {
    vat = 10;
    break;
  }
  case 'general': {
    vat = 20;
    break;
  }
  default: {
    vat = 20;
  }

}
alert('La TVA est de ' + vat + '%');