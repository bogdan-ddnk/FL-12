function makeNumber(str) {
    let num_str = ' ';
    for (let i of str) {
        if (!isNaN(i)) {
            num_str += i;
        }

    }
    return num_str;
}

console.log(makeNumber('490sad222esff'));