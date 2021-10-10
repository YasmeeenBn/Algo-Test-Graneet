function maxZeros(N) {
  let maxm = -1;
  let cnt = 0;

  while (N != 0) {
    if (N % 2 == 0) {
      cnt++;
      N = Math.floor(N / 2);
      maxm = Math.max(maxm, cnt);
    } else {
      maxm = Math.max(maxm, cnt);
      cnt = 0;
      N = Math.floor(N / 2);
    }
  }
  return maxm;
}
module.exports = maxZeros;

// // Tests
let N = 9999;
console.log(maxZeros(N));
