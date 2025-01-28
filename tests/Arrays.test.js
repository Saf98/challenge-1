const { findDuplicates, removeDuplicates, countOccurrences } = require('../src/Arrays.js');


describe('duplicates', () => {
  let arr;
  let mixedArr;

  beforeEach(() => {
    arr = [1, 2, 3, 2, 4, 1];
  });

  beforeEach(() => {
    mixedArr = ["a", 2, 3, "a", "b", 3];
  });

  it('Return duplicates in an Array', () => {
    const duplicateArray = [2, 1];
    expect(findDuplicates(arr)).toEqual(expect.arrayContaining(duplicateArray));
  });

  it('Remove duplicates in an Array', () => {
    const singleArray = [1, 2, 3, 4];
    expect(removeDuplicates(arr)).toEqual(expect.arrayContaining(singleArray));
  });

  it('Return mixed duplicates in an Array', () => {
  
    const duplicateArray = ["a", 3];
    expect(findDuplicates(mixedArr)).toEqual(expect.arrayContaining(duplicateArray));
  });

  it('Remove mixed duplicates in an Array', () => {
    const singleArray = ["a", 2, 3, "b"];
    expect(removeDuplicates(mixedArr)).toEqual(expect.arrayContaining(singleArray));
  });

  it('Counts occurences in an Array', () => {
    expect(countOccurrences(arr)).toEqual({"1": 2, "2": 2, "3": 1, "4": 1});
  });

  it('Count single item occurences in an Array', () => {
    expect(countOccurrences([1])).toEqual({"1": 1});
  });
});