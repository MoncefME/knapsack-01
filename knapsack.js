function knapsack({ capacity, items }) {
  const size = items.length;
  const lookup = Array.from(Array(size + 1), () => new Array(capacity + 1));
  const values = items.map((item) => item.value);
  const weights = items.map((item) => item.weight);
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (i === 0 || j === 0) {
        lookup[i][j] = 0;
      } else if (weights[i - 1] <= j) {
        lookup[i][j] = Math.max(
          values[i - 1] + lookup[i - 1][j - weights[i - 1]],
          lookup[i - 1][j]
        );
      } else {
        lookup[i][j] = lookup[i - 1][j];
      }
    }
  }
  const indexes = [];
  var c = capacity;
  for (let i = size; i > 0; i--) {
    if (lookup[i][c] !== lookup[i - 1][c]) {
      indexes.push(i - 1);
      c = c - weights[i - 1];
    }
  }
  indexes.sort(function (a, b) {
    return a - b;
  });
  return { maxValue: lookup[size][capacity], indexes: indexes };
}

module.exports = knapsack;
