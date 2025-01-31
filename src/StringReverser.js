function reverseString(txt, match) {
  let text = txt;
  let arr = [];

  if (txt.indexOf(match) === -1 || !match) {
    return txt.split("").reverse().join("");
  }

  for (let i = 0; i < text.length; i++) {

    if (text[i] === match) {
      arr.reverse().push(match)

      continue;
    }

    arr.push(text[i].split(""));
  }

 return arr.join("");
}



module.exports = {reverseString};