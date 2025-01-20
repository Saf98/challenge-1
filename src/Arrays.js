

function findDuplicates() {

const indices = [];

const arr = [1, 2, 3, 2, 4, 1];

const element = 2;

let idx = arr.indexOf(element);

while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(element, idx + 1);
}

console.log(indices);
return
}

findDuplicates();


module.exports = findDuplicates;