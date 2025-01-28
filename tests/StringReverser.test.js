const { reverseString } = require('../src/StringReverser.js');


describe('duplicates', () => {
  let arr;
  beforeEach(() => {
    arr = [1, 2, 3, 2, 4, 1];
  });

  it('Return duplicates in an Array', () => {
    const revString = [2, 1];
    expect(reverseString(arr)).toEqual(expect.arrayContaining(revString));
  });

});