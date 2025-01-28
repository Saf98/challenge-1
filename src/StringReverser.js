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
module.exports = {reverseString};