

function getMin(...args) {
    let min;
    for (let i of args) {

        min = min < i ? min : i;
    }

    return min;

}

getMin(3, 0, -3)