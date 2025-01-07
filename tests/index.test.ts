const FizzBuzz = require('./../src/index.js');

test('Return new Array', () => {
  const arr = [1, 2, "Fizz", 4, "Buzz", "Fizz",7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
  expect(FizzBuzz()).toStrictEqual(arr);
});