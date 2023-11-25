type KnapsackItem = {
  value: number;
  weight: number;
};

type KnapsackResult = {
  maxValue: number;
  indexes: number[];
};

function useKnapsack({
  capacity,
  items,
}: {
  capacity: number;
  items: KnapsackItem[];
}): KnapsackResult {
  const size = items.length;
  const lookup: number[][] = new Array(size + 1)
    .fill([])
    .map(() => new Array(capacity + 1).fill(0));
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

  const indexes: number[] = [];
  let c = capacity;

  for (let i = size; i > 0; i--) {
    if (lookup[i][c] !== lookup[i - 1][c]) {
      indexes.push(i - 1);
      c -= weights[i - 1];
    }
  }

  indexes.sort((a, b) => a - b);

  return { maxValue: lookup[size][capacity], indexes };
}

export default useKnapsack;
