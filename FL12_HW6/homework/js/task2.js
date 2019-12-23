let a = +prompt('Введите значение для стороны a');
let b = +prompt('Введите значение для стороны b');
let c = +prompt('Введите значение для стороны c');
if (a === 0 || !Number.isInteger(a) || isNaN(a) || b === 0 || !Number.isInteger(b) || isNaN(b) || c === 0
    || !Number.isInteger(c) || isNaN(c)) {
    console.log('Input values should be ONLY numbers ')
}
if (a < 0 || b < 0 || c < 0) {
    console.log('A triangle must have 3 sides with a positive definite length')
} else if (!(a < b + c && b < a + c && c < a + b)) {
    console.log('Triangle doesn’t exist')
} else if (a === b && b === c) {
    console.log('Triangle is equivalent ')
} else if (a === b || b === c || a === c) {
 console.log('Triangle is isosceles') 
} else {
 console.log('Triangle is scalene') 
}
