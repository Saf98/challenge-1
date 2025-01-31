const { reverseString } = require('../src/StringReverser.js');


describe('reverse single string', () => {
  let str;
  let word;
  let sentence;

  beforeEach(() => {
    str = "hello";
    word = "hello world";
    sentence = "hi, how are you?";
  });

  it('Reverse single string', () => {
    const match = "?"

    const revString = "olleh";
    expect(reverseString(str, match)).toEqual(revString);
  });

  it('Reverse word', () => {
    const match = "?"
    const revString = "dlrow olleh";
    expect(reverseString(word, match)).toEqual(revString);
  });

  // it('Reverse sentence w/o punct', () => {
  //   const revString = "you are how hi?";
    
  //   expect(reverseString(sentence)).toEqual(revString);
  // });

  // it('Reverse words with punct', () => {
  //   const revString = "?uoy era woh ,ih";
    
  //   expect(reverseString(sentence)).toEqual(revString);
  // });

});