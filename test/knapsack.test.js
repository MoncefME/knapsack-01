// import { expect, test } from "@jest/globals";
import knapsack from "../src/knapsack.js";
import { testCase00, testCase01, testCase02, testCase03, testCase04, testCase05, testCase06, testCase07, testCase08, testCase09, testCase10, testCase11 } from "./testCases.js";

test("TestCase 0", () => {
  const { maxValue, indexes } = knapsack(testCase00);
  expect(maxValue).toBe(testCase00.expectedMaxValue);
  expect(indexes).toEqual(testCase00.expectedIndexes);
});

test("TestCase 1", () => {
  const { maxValue, indexes } = knapsack(testCase01);
  expect(maxValue).toBe(testCase01.expectedMaxValue);
  expect(indexes).toEqual(testCase01.expectedIndexes);
});
test("TestCase 2", () => {
  const { maxValue, indexes } = knapsack(testCase02);
  expect(maxValue).toBe(testCase02.expectedMaxValue);
  expect(indexes).toEqual(testCase02.expectedIndexes);
});
test("TestCase 3", () => {
  const { maxValue, indexes } = knapsack(testCase03);
  expect(maxValue).toBe(testCase03.expectedMaxValue);
  expect(indexes).toEqual(testCase03.expectedIndexes);
});
test("TestCase 4", () => {
  const { maxValue, indexes } = knapsack(testCase04);
  expect(maxValue).toBe(testCase04.expectedMaxValue);
  expect(indexes).toEqual(testCase04.expectedIndexes);
});

test("TestCase 5", () => {
  const { maxValue, indexes } = knapsack(testCase05);
  expect(maxValue).toBe(testCase05.expectedMaxValue);
  expect(indexes).toEqual(testCase05.expectedIndexes);
});
test("TestCase 6", () => {
  const { maxValue, indexes } = knapsack(testCase06);
  expect(maxValue).toBe(testCase06.expectedMaxValue);
  expect(indexes).toEqual(testCase06.expectedIndexes);
});
test("TestCase 7", () => {
  const { maxValue, indexes } = knapsack(testCase07);
  expect(maxValue).toBe(testCase07.expectedMaxValue);
  expect(indexes).toEqual(testCase07.expectedIndexes);
});
test("TestCase 8", () => {
  const { maxValue, indexes } = knapsack(testCase08);
  expect(maxValue).toBe(testCase08.expectedMaxValue);
  expect(indexes).toEqual(testCase08.expectedIndexes);
});
test("TestCase 9", () => {
  const { maxValue, indexes } = knapsack(testCase09);
  expect(maxValue).toBe(testCase09.expectedMaxValue);
  expect(indexes).toEqual(testCase09.expectedIndexes);
});
test("TestCase 10", () => {
  const { maxValue, indexes } = knapsack(testCase10);
  expect(maxValue).toBe(testCase10.expectedMaxValue);
  expect(indexes).toEqual(testCase10.expectedIndexes);
});
test("TestCase 11", () => {
  const { maxValue, indexes } = knapsack(testCase11);
  expect(maxValue).toBe(testCase11.expectedMaxValue);
  expect(indexes).toEqual(testCase11.expectedIndexes);
});
