const { testCase00 } = require("../test/testCases.js");
const knapsack = require("./knapsack.js");

const { maxValue, indexes } = knapsack(testCase00);
console.log(maxValue);
console.log(indexes);
