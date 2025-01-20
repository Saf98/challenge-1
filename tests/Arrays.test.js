const findDuplicates = require('../src/Arrays.js');
const removeDuplicates = require('../src/Arrays.js');


describe('duplicates', () => {
  it('Return Duplicated in an Array', () => {
    const arr = [1, 2, 3, 2, 4, 1];
    const duplicateArray = [2, 1];
    expect(findDuplicates(arr)).toEqual(expect.arrayContaining(duplicateArray));
  });

  it('Remove duplicates in an Array', () => {
    const arr = [1, 2, 3, 2, 4, 1];
    const singleArray = [1, 2, 3, 4];
    expect(removeDuplicates(arr)).toEqual(expect.arrayContaining(singleArray));
  });
});