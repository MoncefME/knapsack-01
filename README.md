# 0/1 Knapsack Problem Solver

## The `knapsack` Function

The main functionality of this repository is the `knapsack` function, defined in `knapsack.js`. It solves the 0/1 Knapsack Problem using dynamic programming. Here's how you can use it:

### Inputs

- `capacity`: A number representing the maximum weight the knapsack can carry.
- `items`: An array of objects, where each object represents an item with `value` (the value of the item) and `weight` (the weight of the item).

### Output

The `knapsack` function returns an object with the following properties:

- `maxValue`: The maximum value that can be achieved with the given capacity and items.
- `indexes`: An array of indexes corresponding to the items selected to achieve the maximum value. These indexes indicate which items should be included in the knapsack to maximize the total value.

## Usage

Here's a basic example of how to use the `knapsack` function:

```javascript
const knapsack = require('./knapsack.js');
const { maxValue, indexes } = knapsack({
  capacity: 10,
  items: [
    { value: 60, weight: 5 },
    { value: 50, weight: 3 },
    { value: 70, weight: 4 },
    { value: 30, weight: 2 },
  ],
});

console.log('Max Value:', maxValue);
console.log('Selected Item Indexes:', indexes);

```
## Unit Tesging 
<img height="50" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png">

- I used [Jest](https://jestjs.io/)  for unit testing using the [testCases.js](testCases.js) , I got them from [AtCoder](https://atcoder.jp/contests/dp/tasks/dp_d), All test passed in but took too much to execute 
#
<img width="256" alt="image" src="https://github.com/MoncefME/knapsack-01/assets/77624873/6f095131-7add-4ad0-8b99-04e070601384">
#

## To-Do List:
- [ ] Implement TypeScript for enhanced type safety.
- [ ] Transition from `require` to ES6 `import` for modern module management.
- [ ] Develop the front-end implementation.

