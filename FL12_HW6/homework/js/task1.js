let a = +prompt('Введите значение a:');
let b = +prompt('Введите значение b:');
let c = +prompt('Введите значение c:');
const two = 2
const four = 4
let discriminant = b * b - four * a * c;

if (a === 0 || isNaN(a) || b === 0 || isNaN(b)
    || c === 0 || isNaN(c)) {
    console.log('Invalid input data');
} else if (discriminant > 0) {
    let x1 = Math.round((-b + Math.sqrt(discriminant)) / (two* a));
    let x2 = Math.round((-b - Math.sqrt(discriminant)) / (two * a));
    console.log('x1 =', x1, 'x2 =', x2);
} else if (discriminant < 0) {
 console.log('no solution '); 
} else if (discriminant === 0) {
    let x = Math.round(-b / (two * a));
    console.log('x =', x);
}


