const findDuplicates = require('../src/Arrays.js');
const removeDuplicates = require('../src/Arrays.js');


describe('duplicates', () => {
  it('Return duplicates in an Array', () => {
    const arr = [1, 2, 3, 2, 4, 1];
    const duplicateArray = [2, 1];
    expect(findDuplicates(arr)).toEqual(expect.arrayContaining(duplicateArray));
  });

  it('Remove duplicates in an Array', () => {
    const arr = [1, 2, 3, 2, 4, 1];
    const singleArray = [1, 2, 3, 4];
    expect(removeDuplicates(arr)).toEqual(expect.arrayContaining(singleArray));
  });

  it('Return mixed duplicates in an Array', () => {
    const arr = ["a", 2, 3, "a", "b", 3];
    const duplicateArray = ["a", 3];
    expect(findDuplicates(arr)).toEqual(expect.arrayContaining(duplicateArray));
  });

  it('Remove mixed duplicates in an Array', () => {
    const arr = ["a", 2, 3, "a", "b", 3];
    const singleArray = ["a", 2, 3, "b"];
    expect(removeDuplicates(arr)).toEqual(expect.arrayContaining(singleArray));
  });
});