import { testCase00 } from "../test/testCases.js";
import knapsack from "./knapsack.js";

const { maxValue, indexes } = knapsack(testCase00);
console.log(maxValue);
console.log(indexes);
