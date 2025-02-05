function reverseString(str) {
  const matchStrings = /[a-z]/gi;

  let letters = [];//array for letters
  let chars = [];//array for other charactors

  for(let i = 0; i < str.length; i++){
    
    if(str[i].match(matchStrings)){
      //check regex for letters and push to array
      letters.push(str[i])
    } else {
      //else add non-matching chars
      chars[i] = str[i];
    }
  }

  for(var j = 0; j <str.length; j++){
    
    if(chars[j] === undefined){
    
      chars[j] = letters[letters.length - 1];
      letters.pop();
      //reverses position of letters
    }
  }

  let revStr = chars.join('');
  return revStr;
}


module.exports = { reverseString };