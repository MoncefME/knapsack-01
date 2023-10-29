import knapsack from "./knapsack";
import { testCase00 } from "../test/testCases";

const { maxValue, indexes } = knapsack(testCase00);
console.log(maxValue);
console.log(indexes);
