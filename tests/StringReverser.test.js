const { reverseString } = require('../src/StringReverser.js');


describe('reverse single string', () => {
  let str;
  beforeEach(() => {
    str = "hello";
  });

  it('Reverse String', () => {
    const revString = "olleh";
    expect(reverseString(str)).toEqual(expect.arrayContaining(revString));
  });

});