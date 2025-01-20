const FizzBuzz = require('../src/FizzBuzz.js');

describe('FizzBuzz', () => {
  test('Return length 5 Array', () => {
    const arr = [1, 2, "Fizz", 4, "Buzz"];
    expect(FizzBuzz(5)).toStrictEqual(arr);
  });
  
  test('Return length 15 Array', () => {
    const arr = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
    expect(FizzBuzz(15)).toStrictEqual(arr);
  });
  
  test('Return length 20 Array', () => {
    const arr = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"];
    expect(FizzBuzz(20)).toStrictEqual(arr);
  });
  
  test('Test Negative', () => {
    expect(FizzBuzz(-2)).toStrictEqual([])
  });
});

