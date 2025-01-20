const findDuplicates = require('../src/Arrays.js');

describe('findArr', () => {
  test('Return Array', () => {
    const arr = [1, 2, 3, 2, 4, 1];
    expect(findDuplicates(arr)).toStrictEqual(arr);
  });
});