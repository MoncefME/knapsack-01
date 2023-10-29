const knapsack = require("./knapsack.js");
const { testCase00 } = require("./testCases.js");

const { maxValue, indexes } = knapsack(testCase00);
console.log(maxValue);
console.log(indexes);
