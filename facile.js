function rends_argent(L, M) {
  let P = 0;
  for (let i = 0; i < L.length; i++) {
    while (M >= L[i]) {
      M -= L[i];
      // Fixer le résultat de l'opération précedente en cas de valeurs réels dans le tableau L
      M = Number.parseFloat(M).toFixed(2);
      P++;
    }
  }
  // Si M n'est toujours non nulle, il n'y a pas une combinaison de billets et pieces dont la somme est égale a M
  if (M != 0) return -1;
  return P;
}
module.exports = rends_argent;

//Tests;
let M = 626.5;
let L = [500, 200, 80, 70, 50, 30, 20, 10, 5, 2, 1, 0.2, 0.1, 0.02, 0.01];
console.log(rends_argent(L, M));
