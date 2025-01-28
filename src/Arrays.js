function findDuplicates(arr) {
    const clonedArr = [...arr]

    const duplicateArray = clonedArr.filter((element, index) => {
        return clonedArr.indexOf(element) !== index;
    });

    return duplicateArray;
}


function removeDuplicates(arr) {
    const clonedArr = [...arr]

    const removeDuplicatesArray = clonedArr.filter((element, index) => {
        return clonedArr.indexOf(element) === index;
    });

    return removeDuplicatesArray;
}


function countOccurrences(arr) {
    const clonedArr = [...arr]

    return clonedArr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

module.exports = { findDuplicates, removeDuplicates, countOccurrences }