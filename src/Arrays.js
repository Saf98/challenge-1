function findDuplicates(arr) {

const duplicateArray = arr.filter((element, index) => {
    return arr.indexOf(element) !== index;
});

return duplicateArray;
}

module.exports = findDuplicates;

function removeDuplicates(arr) {

const removeDuplicatesArray = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
});

return removeDuplicatesArray;
}

module.exports = removeDuplicates;