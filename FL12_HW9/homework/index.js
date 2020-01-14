
function convert() {
    let resultArray = [];
    for (let i = 0; i < arguments.length; i++) {
        switch (typeof arguments[i]) {
            case 'string':
                resultArray.push(Number(arguments[i]));
                break;
            case 'number':
                resultArray.push(String(arguments[i]));
                break;
            default:
                break;
        }
    }
    return resultArray;
}


function executeForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


function mapArray(array, callback) {
    let result = [];
    executeForEach(array, function (el) {
        result.push(callback(Number(el)));
    });
    return result;
}


function filterArray(array, filter) {
    let resultArray = [];
    executeForEach(array, function (el) {
        if (filter(el)) {
            resultArray.push(el);
        }
    });
    return resultArray;
}


function flipOver(string) {
    let resultStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        resultStr += string[i];
    }
    return resultStr;
}

function makeListFromRange(array) {
    let newArray = [];
    for (let i = array[0]; i <= array[1]; i++) {
        newArray.push(i);
    }
    return newArray;
}

function getArrayOfKeys(array, keyName) {
    let resultArray = [];
    executeForEach(array, function (e) {
        resultArray.push(e[keyName]);
    });
    return resultArray;
}

const maxValue = 30
function substitute(array) {
    return mapArray(array, function (e) {
        if (e < maxValue) {
            return '*';
        } else {
            return e
        }
    });
}

const msecPerDay = 86400000;
function getPastDay(date,daysAgo){
return new Date(date.getTime() - daysAgo * msecPerDay).getDate();
}

