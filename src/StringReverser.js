function reverseString(str) {
    return str.split("").reverse().join("");
}


const regexBoundary = /\b/;
const special = /[^a-zA-Z0-9]/g;
const arr = [];
const str3 = str.split(regexBoundary).map((el, i) => {
  
  console.log(el.split(special));
  
//     console.log(el.split().splice(0))
//     console.log(el.indexOf(","))
});

console.log(str3);


const arr = ["s","t", "d", " ", "c", "n", "'","t"];
// const arr = "stdcn't";

//   const idx = arr.indexOf("'"); // found element at pos 6

// let newArr = [];
// let newStr = [];

// const str = arr.filter((e, id) => {
//   const idx = arr.indexOf("'"); // found element at pos 6
//   if (id !== idx) {
//     newStr.reverse().push(e);
    
//     return newArr = newStr.toSpliced(idx, 0, "'");

//   }
// })


function reverse(txt, match) {
  let newArr = [];
  let newStr = [];
  const str = txt.filter((e, id) => {
    const idx = txt.indexOf(match); // found element at pos 6
    
    if (id !== idx) {
      newStr.reverse().push(e);

      return newArr = newStr.toSpliced(idx, 0, "'");

    }
  });
  return newArr.join("");

}

console.log(reverse(arr, "'"));
// console.log(newStr.splice(idx, 0, "'"));
// console.log(newStr);
// console.log(str)

// console.log(newStr.toSpliced(idx, 0, "'"));

module.exports = {reverseString};