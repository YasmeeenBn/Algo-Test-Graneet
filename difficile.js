function MaximumSum(matrix) {
  let N = matrix.length;
  let M = matrix[0].length;

  let sum = new Array(N + 1);

  for (var i = 0; i < sum.length; i++) {
    sum[i] = new Array(M + 1);
  }

  for (var i = 0; i <= N; i++) {
    for (var j = 0; j <= N; j++) {
      sum[i][j] = 0;
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      sum[i][j] = Math.max(sum[i - 1][j], sum[i][j - 1]) + matrix[i - 1][j - 1];
    }
  }

  return sum[N][M];
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
];

console.log(MaximumSum(matrix));
