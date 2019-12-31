function makeNumber(str) {
    let num_str = ' ';
    for (let i of str) {
        if (!isNaN(i)) {
            num_str += i;
        }

    }
    return num_str;
}

function countNumbers(str) {
    let object = {};
    let string = makeNumber(str);
    for (let number of string) {
        if (!(number in object)) {
            object[number] = 1;
        } else {
            object[number] += 1;
        }
    } return object;
}

console.log(makeNumber("s82r8rg28"));
console.log(countNumbers("s82r8rg28"))